// Day 5 - Q6: Focus Management with useRef — PIN Input (React)
// 4 separate inputs, auto-focus next, backspace goes back, paste fills all.

import { useState, useRef } from 'react'

export default function Day5_PinInput() {
  const [pin, setPin] = useState(['', '', '', ''])
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)]

  // TODO: Handle input change — move focus to next on digit entry
  // TODO: Handle keydown — backspace on empty moves focus to previous
  // TODO: Handle paste — fill all 4 inputs

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return // handle paste separately
    const newPin = [...pin]
    newPin[index] = value.slice(-1)
    setPin(newPin)
    // TODO: auto-focus next input
  }

  const fullPin = pin.join('')

  return (
    <div style={{ padding: 20 }}>
      <h3>PIN Input</h3>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: 20 }}>
        {pin.map((digit, i) => (
          <input
            key={i}
            ref={refs[i]}
            value={digit}
            onChange={e => handleChange(i, e.target.value)}
            maxLength={1}
            style={{ width: 50, height: 60, textAlign: 'center', fontSize: 24, borderRadius: 8, border: '2px solid #333', background: '#1a1a2e', color: '#fff' }}
          />
        ))}
      </div>
      {fullPin.length === 4 && (
        <p style={{ textAlign: 'center', color: '#4ecca3', fontSize: 18 }}>PIN: {fullPin}</p>
      )}
    </div>
  )
}
