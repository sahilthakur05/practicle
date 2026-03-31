// Day 1 - Q7: Controlled Form with Dynamic Fields (React)
// Build a form where user can add/remove "Skill" fields dynamically.

import { useState } from 'react'

export default function Day1_DynamicFields() {
  const [skills, setSkills] = useState<string[]>([''])

  // TODO: Implement:
  // - addSkill: adds a new empty input
  // - removeSkill(index): removes that input (keep at least 1)
  // - updateSkill(index, value): updates value at index
  // - handleSubmit: console.log the skills array

  return (
    <div style={{ padding: 20 }}>
      <h3>Dynamic Skills Form</h3>
      <p>Add/remove skill fields. All inputs must be controlled.</p>

      {skills.map((skill, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <input
            value={skill}
            onChange={(e) => {
              // TODO: update skill at index i
            }}
            placeholder={`Skill ${i + 1}`}
            style={{ padding: '6px 10px', flex: 1, borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }}
          />
          {skills.length > 1 && (
            <button onClick={() => {/* TODO: remove skill at i */}} style={{ color: '#ef4444', background: 'none', border: '1px solid #ef4444', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}>
              Remove
            </button>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button onClick={() => {/* TODO: add skill */}} style={{ padding: '8px 16px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          + Add Skill
        </button>
        <button onClick={() => console.log(skills)} style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Submit
        </button>
      </div>
    </div>
  )
}
