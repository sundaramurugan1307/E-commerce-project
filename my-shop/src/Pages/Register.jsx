import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        return
      }

      // save token
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      // redirect to home
      navigate('/')

    } catch (err) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">

      <div className="auth-left">
        <Link to="/" className="auth-logo">NOIR<span>.</span></Link>
        <h1 className="auth-tagline">
          Join <br /> <em>The Club.</em>
        </h1>
        <p className="auth-sub">
          Create an account and get access to exclusive deals and early releases.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-box">

          <h2 className="auth-title">Create Account</h2>
          <p className="auth-desc">Fill in your details to get started</p>

          {error && (
            <div className="auth-error">{error}</div>
          )}

          <div className="auth-form">

            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn-primary auth-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className="auth-switch">
              Already have an account?{' '}
              <Link to="/login" className="auth-link">Sign in</Link>
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Register