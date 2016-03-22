var express = require('express');
var path = require('path');
var fs = require('fs');
var marked = require('marked');
var moment = require('moment');
var app = express();

marked.setOptions({
  tables: true,
  gfm: true,
  sanitize: true
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function(req, res) {
  var index = path.join(__dirname, '..', 'views/index.md');
  fs.readFile(index, 'utf-8', function(err, body) {
    if (err) {
      res.send(err);
    }

    var header = '<!DOCTYPE html><html><head>'
      + '<link rel="stylesheet" href="/css/github-markdown.css">'
      + '</head><body><div class="markdown-body">';

    body = marked(body, { gfm: true, sanitize: true });

    var footer = '</div></body></html>';

    res.send(header + body + footer);
  });
});

app.get('/:date', function(req, res) {
  var date = req.params.date;

  if (typeof +date === 'number' && +date > 0) {
    date = +date;
  }

  date = new Date(date);
  console.log(Date.now(), date.getFullYear());

  var unix = moment(date).format('x');
  var natural = moment(date).format('MMMM D, YYYY');

  unix = unix === 'Invalid date' ? null : unix;
  natural = natural === 'Invalid date' ? null : natural;

  res.status(200).send({ unix: unix, natural: natural });
});

module.exports = app;
