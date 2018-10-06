const EventEmitter = require('events').EventEmitter
const shortid = require('shortid')
const _ = require('lodash')

class node extends EventEmitter {
  constructor () {
    super()

    this.id = shortid.generate()

    this.alpha = 1
    this.visible = true

    this.parent = null
    this.children = []

    this._destroyed = false
  }

  add (child) {
    // if the child has a parent then lets remove it as node objects can only exist in one place
    if (child.parent) {
      child.parent.remove(child)
    }

    child.parent = this

    this.children.push(child)

    child.emit('added', this)

    return child
  }

  remove (child) {
    const index = this.children.indexOf(child)

    if (index === -1) return null

    child.parent = null

    _.pullAt(this.children, index)

    child.emit('removed', this)

    return child
  }

  toString () {
    return `node->${this.id}`
  }
}

module.exports = node
