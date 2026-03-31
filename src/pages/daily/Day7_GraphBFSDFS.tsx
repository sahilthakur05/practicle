// Day 7 - Q1: Graph BFS & DFS
// Graph class with addVertex, addEdge, BFS(start), DFS(start).

import { useState } from 'react'

export default function Day7_GraphBFSDFS() {
  const [result, setResult] = useState('')

  // TODO: class Graph {
  //   constructor() { this.adjacencyList = new Map() }
  //   addVertex(v), addEdge(v1, v2), bfs(start), dfs(start)
  // }

  const handleRun = () => {
    // const g = new Graph()
    // g.addVertex("A"); g.addVertex("B"); g.addVertex("C"); g.addVertex("D")
    // g.addEdge("A", "B"); g.addEdge("A", "C"); g.addEdge("B", "D"); g.addEdge("C", "D")
    // setResult(`BFS: ${JSON.stringify(g.bfs("A"))}\nDFS: ${JSON.stringify(g.dfs("A"))}`)
    setResult('Implement Graph class above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Graph BFS & DFS</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`A -- B
|    |
C -- D
Expected BFS from A: [A, B, C, D]
Expected DFS from A: [A, B, D, C]`}
      </pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
