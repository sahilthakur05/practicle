// Day 6 - Q1: Binary Tree from Array
// Build balanced BST from sorted array. Implement insert, search, inOrderTraversal.

import { useState } from 'react'

export default function Day6_BinaryTree() {
  const [result, setResult] = useState('')

  // TODO: class TreeNode { constructor(value) { this.value = value; this.left = null; this.right = null } }
  // TODO: function buildBST(sortedArr) — find middle as root, recurse left/right
  // TODO: inOrderTraversal(root) — returns sorted array

  const handleRun = () => {
    // const tree = buildBST([1, 2, 3, 4, 5, 6, 7])
    // setResult(`Root: ${tree.value}\nInOrder: ${JSON.stringify(inOrderTraversal(tree))}`)
    setResult('Implement BST above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Binary Tree from Sorted Array</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>Input: [1, 2, 3, 4, 5, 6, 7]{'\n'}Expected root: 4, inOrder: [1,2,3,4,5,6,7]</pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
