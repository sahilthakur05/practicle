// Day 4 - Q6: Multi-Step Wizard with State Machine (React)
// Steps: info → review → confirm. Only allow valid transitions.

import { useReducer, useState } from 'react'

export default function Day4_StateMachine() {
  const [step, setStep] = useState<'info' | 'review' | 'confirm'>('info')
  const [name, setName] = useState('')

  // TODO: Replace useState with useReducer
  // Model valid transitions:
  // info → review (only if name filled)
  // review → info (back)
  // review → confirm (submit)
  // confirm → info (start over)

  return (
    <div style={{ padding: 20 }}>
      <h3>Multi-Step Wizard</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {['info', 'review', 'confirm'].map(s => (
          <div key={s} style={{ padding: '6px 16px', borderRadius: 20, background: step === s ? '#3b82f6' : '#1a1a2e', color: step === s ? '#fff' : '#666' }}>{s}</div>
        ))}
      </div>

      {step === 'info' && (
        <div>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name"
            style={{ padding: '8px 12px', width: 300, borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }} />
          <button onClick={() => name.trim() && setStep('review')} disabled={!name.trim()}
            style={{ marginLeft: 8, padding: '8px 16px', background: name.trim() ? '#3b82f6' : '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Next →</button>
        </div>
      )}

      {step === 'review' && (
        <div>
          <p>Name: <strong>{name}</strong></p>
          <button onClick={() => setStep('info')} style={{ padding: '8px 16px', background: '#555', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', marginRight: 8 }}>← Back</button>
          <button onClick={() => setStep('confirm')} style={{ padding: '8px 16px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Submit</button>
        </div>
      )}

      {step === 'confirm' && (
        <div>
          <p style={{ color: '#4ecca3', fontSize: 20 }}>Submitted successfully!</p>
          <button onClick={() => { setStep('info'); setName('') }} style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Start Over</button>
        </div>
      )}
    </div>
  )
}
