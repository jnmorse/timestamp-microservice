'use strict'

module.exports = function dateToNumber() {
  return function(req, res, next) {
    const date = req.params.date

    if (String(Number(date)).length === 9) {
      req.params.date = Number(date) * 1000

      return next()
    }

    else if (String(Number(date)).length === date.length) {
      req.params.date = Number(date)
    }

    next()
  }
}
