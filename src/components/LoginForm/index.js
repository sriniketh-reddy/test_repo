import {Component} from 'react'
import './index.css'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    this.setState({username: '', password: ''})
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const jsonResponse = await response.json()
    console.log(response)
    if (response.ok) {
      history.replace('/')
    } else {
      this.setState({errorMsg: `*${jsonResponse.error_msg}`})
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-from">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <from className="from">
          <img
            className="login-form-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={this.onChangeUsername}
            className="input"
            value={username}
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            id="password"
            value={password}
            type="password"
            onChange={this.onChangePassword}
            className="input"
          />
          <button
            className="login-btn"
            type="submit"
            onClick={this.onSubmitLoginForm}
          >
            Login
          </button>
          <p className="error-message">{errorMsg}</p>
        </from>
      </div>
    )
  }
}
