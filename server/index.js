'use strict'

const express = require('express')
const path = require('path')
const fs = require('fs')
const marked = require('marked')
const moment = require('moment')

const dateToNumber = require('./middleware/date-to-number')

const app = express()

marked.setOptions({
  tables: true,
  gfm: true,
  sanitize: true
})

/**
 * Middleware to return 404 for favicon
 */
app.use(function (req, res, next) {
  if (req.path.match(/^\/favicon/)) {
    res.sendStatus(404)
  }

  next()
})

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', function(req, res, next) {
  const index = path.join(__dirname, '..', 'views/index.md')

  fs.readFile(index, 'utf-8', function(err, body) {
    if (err) {
      next(err)
    }

    const header = '<!DOCTYPE html><html><head>'
      + '<link rel="stylesheet" href="/css/github-markdown.css">'
      + '</head><body><div class="markdown-body">'

    body = marked(body, { gfm: true, sanitize: true })

    const footer = '</div></body></html>'

    res.send(header + body + footer)
  })
})

app.get('/:date', dateToNumber(), function(req, res, next) {
  let date = req.params.date

  if (typeof date ==='string' && date.match(/^favicon/)) { return next() }

  date = moment(new Date(req.params.date))

  if (date.isValid()) {
    return res.send({
      unix: date.format('X'),
      natural: date.format('MMMM D, YYYY')
    })
  }

  res.status(200).send({ unix: null, natural: null })
})

module.exports = app
