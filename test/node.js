var Node = require('../src/core/node')
var assert = require('assert')
describe('Node', function () {
  describe('#create Node', function () {
    it('create a new node', function () {
      var n = new Node()
      assert.ok(n.toString())
    })
  })

  describe('#add Node', function () {
    it('add two node to root node', function () {
      var root = new Node()
      var child = new Node()
      var child1 = new Node()

      root.addChild(child)
      root.addChild(child1)
      assert.strictEqual(child.parent, root)
      assert.strictEqual(child1.parent, root)
    })
    it('add node from old root to new node', function () {
      var root = new Node()
      var root1 = new Node()
      var child = new Node()
      var child1 = new Node()

      root.addChild(child)
      root.addChild(child1)
      // add the child again, shoud push the child to the end of root's children
      root.addChild(child)
      assert.strictEqual(child, root.children[root.children.length - 1])
      // add the child from one root to another
      root1.addChild(child)
      root1.addChild(child1)
      assert.strictEqual(child.parent, root1)
      assert.strictEqual(0, root.children.length)
      assert.strictEqual(2, root1.children.length)
    })
  })
  describe('#remove Node', function () {
    it('remove child from root', function () {
      var root = new Node()
      var child = new Node()

      var res = root.removeChild(child)
      assert.equal(null, res)

      root.addChild(child)
      res = root.removeChild(child)
      assert.equal(child, res)
      assert.equal(0, root.children.length)
    })

    it('remove node at given index', function () {
      var root = new Node()
      var child = new Node()
      var child1 = new Node()
      var child2 = new Node()

      root.addChild(child)
      root.addChild(child1)
      root.addChild(child2)

      var res = root.removeChildAt(0)
      assert.strictEqual(res, child)

      res = root.removeChildAt(0)
      assert.strictEqual(res, child1)

      root.removeChildren()
      assert.strictEqual(0, root.children.length)
    })
  })
})
