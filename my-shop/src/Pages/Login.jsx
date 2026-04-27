import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
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
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        return
      }

      // save token to localStorage
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
          Welcome <br /> <em>Back.</em>
        </h1>
        <p className="auth-sub">
          Sign in to access your orders, wishlist and exclusive deals.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-box">

          <h2 className="auth-title">Sign In</h2>
          <p className="auth-desc">Enter your credentials to continue</p>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="auth-error">{error}</div>
          )}

          <div className="auth-form">
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

            <div className="form-row">
              <label className="form-check">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="form-forgot">Forgot password?</a>
            </div>

            <button
              className="btn-primary auth-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="auth-switch">
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">Create one</Link>
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Login