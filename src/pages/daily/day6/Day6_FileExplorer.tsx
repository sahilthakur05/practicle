// Day 6 - Q7: Build a File Explorer Tree (Mini Project)
// Collapsible folders, different icons, highlight selected.

import { useState } from 'react'

interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
}

const fileTree: FileNode = {
  name: 'src', type: 'folder', children: [
    { name: 'components', type: 'folder', children: [
      { name: 'Header.tsx', type: 'file' },
      { name: 'Footer.tsx', type: 'file' },
      { name: 'ui', type: 'folder', children: [
        { name: 'Button.tsx', type: 'file' },
        { name: 'Input.tsx', type: 'file' },
      ]},
    ]},
    { name: 'pages', type: 'folder', children: [
      { name: 'Home.tsx', type: 'file' },
      { name: 'About.tsx', type: 'file' },
    ]},
    { name: 'App.tsx', type: 'file' },
    { name: 'index.tsx', type: 'file' },
  ]
}

export default function Day6_FileExplorer() {
  const [selected, setSelected] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['src']))

  // TODO: Recursive FileTreeNode component
  // - Folder: click to expand/collapse, show folder icon
  // - File: click to select, show file icon
  // - Highlight selected file

  const toggleExpand = (path: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(path) ? next.delete(path) : next.add(path)
      return next
    })
  }

  function renderNode(node: FileNode, path: string) {
    const fullPath = `${path}/${node.name}`
    const isExpanded = expanded.has(fullPath)

    if (node.type === 'file') {
      return (
        <div key={fullPath} onClick={() => setSelected(fullPath)}
          style={{ padding: '4px 8px', paddingLeft: 20, cursor: 'pointer', color: selected === fullPath ? '#3b82f6' : '#e0e0e0', background: selected === fullPath ? '#3b82f620' : 'transparent', borderRadius: 4 }}>
          📄 {node.name}
        </div>
      )
    }

    return (
      <div key={fullPath}>
        <div onClick={() => toggleExpand(fullPath)}
          style={{ padding: '4px 8px', cursor: 'pointer', color: '#f59e0b' }}>
          {isExpanded ? '📂' : '📁'} {node.name}
        </div>
        {isExpanded && node.children && (
          <div style={{ paddingLeft: 16 }}>
            {node.children.map(child => renderNode(child, fullPath))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>File Explorer</h3>
      <div style={{ background: '#1a1a2e', borderRadius: 8, padding: 12, fontFamily: 'monospace', fontSize: 14 }}>
        {renderNode(fileTree, '')}
      </div>
      {selected && <p style={{ marginTop: 12, color: '#4ecca3' }}>Selected: {selected}</p>}
    </div>
  )
}
