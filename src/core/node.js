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

  addChild (child) {
    // if the child has a parent then lets remove it as node objects can only exist in one place
    if (child.parent) {
      child.parent.removeChild(child)
    }

    child.parent = this
    this.children.push(child)
    child.emit('added', this)

    return child
  }

  addChildAt (child, index) {
    if (index < 0 || index > this.children.length) {
      throw new Error('invalid index:', index)
    }

    if (child.parent) {
      child.parent.removeChild(child)
    }

    child.parent = this
    this.children.splice(index, 0, child)
    child.emit('added', this)
  }

  swapChildren (child, child2) {
    if (child === child2) {
      return
    }

    const index1 = this.getChildIndex(child)
    const index2 = this.getChildIndex(child2)

    this.children[index1] = child2
    this.children[index2] = child
  }

  getChildIndex (child) {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error('The supplied child must be a child of the caller')
    }

    return index
  }

  setChildIndex (child, index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`The index ${index} supplied is out of bounds ${this.children.length}`)
    }

    const currentIndex = this.getChildIndex(child)

    _.pullAt(this.children, currentIndex) // remove from old position
    this.children.splice(index, 0, child) // add at new position
  }

  getChildAt (index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error(`getChildAt: Index (${index}) does not exist.`)
    }

    return this.children[index]
  }

  removeChild (child) {
    var res = _.remove(this.children, n => {
      return n.id === child.id
    })

    if (res.length === 1) {
      // if found one
      res[0].parent = null
      res[0].emit('removed', this)
      return res[0]
    } else if (res.length === 0) {
      // if no one found
      return null
    } else {
      // if found more than one nodes
      throw new Error('duplicated nodes in one container')
    }
  }

  removeChildAt (index) {
    const child = this.getChildAt(index)

    // ensure child transform will be recalculated..
    child.parent = null
    _.pullAt(this.children, index)

    child.emit('removed', this)

    return child
  }

  removeChildren (beginIndex = 0, endIndex) {
    const begin = beginIndex
    const end = typeof endIndex === 'number' ? endIndex : this.children.length
    const range = end - begin
    let removed

    if (range > 0 && range <= end) {
      removed = this.children.splice(begin, range)

      for (let i = 0; i < removed.length; ++i) {
        removed[i].parent = null
        removed[i].emit('removed', this)
      }

      return removed
    } else if (range === 0 && this.children.length === 0) {
      return []
    }

    throw new RangeError('removeChildren: numeric values are outside the acceptable range.')
  }

  destroy (destroyChildren = true) {
    this.removeAllListeners()

    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = null

    if (destroyChildren) {
      const oldChildren = this.removeChildren(0, this.children.length)
      for (let i = 0; i < oldChildren.length; ++i) {
        oldChildren[i].destroy(destroyChildren)
      }
    }

    this._destroyed = true
  }

  toString () {
    return `node->${this.id}`
  }
}

module.exports = node
