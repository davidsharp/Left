'use strict'

const marked = require('marked')

function Markdown () {
  this.el = document.createElement('markdown')

  this.install = function (host) {
    host.appendChild(this.el)
  }

  this.update = function () {
    this.el.innerHTML = marked(left.textarea_el.value)
  }
}

module.exports = Markdown
