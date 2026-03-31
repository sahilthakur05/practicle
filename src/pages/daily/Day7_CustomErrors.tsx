// Day 7 - Q2: Custom Error Classes
// AppError (base), ValidationError, NotFoundError, AuthError.

import { useState } from 'react'

export default function Day7_CustomErrors() {
  const [result, setResult] = useState('')

  // TODO: class AppError extends Error { constructor(message, statusCode) }
  // class ValidationError extends AppError { constructor(message, details) }
  // class NotFoundError extends AppError
  // class AuthError extends AppError
  // Each should have toJSON()

  const handleRun = () => {
    // const err = new ValidationError("Email is required", { field: "email" })
    // setResult(JSON.stringify({
    //   name: err.name,
    //   message: err.message,
    //   instanceof_AppError: err instanceof AppError,
    //   instanceof_Error: err instanceof Error,
    //   json: err.toJSON()
    // }, null, 2))
    setResult('Implement custom error classes above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Custom Error Classes</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
