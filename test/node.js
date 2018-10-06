var Node = require('../src/blue/node')
var assert = require('assert')
describe('Node', function () {
  describe('#new Node()', function () {
    it('should return the id when node.toString()', function () {
      var n = new Node()
      assert.ok(n.toString())
    })
  })

  describe('#add Node()', function () {
    it('add node to another node', function () {
      var root = new Node()
      var root1 = new Node()
      var child = new Node()

      root.add(child)
      assert.strictEqual(child.parent, root)

      // add the child again
      root.add(child)
      assert.strictEqual(child.parent, root)
      // add the child from one root to another
      root1.add(child)
      assert.strictEqual(child.parent, root1)
      assert.strictEqual(0, root.children.length)
    })
  })
})
