function Login() {
  // type = {
  //   email: string,
  //   password: string,
  // }
  return (
    <header>
        <h1>Login</h1>
        {/* button, submit, password, email */}
        <label htmlFor="email">
          Email:
          <input type="email" />
        </label>
        <label htmlFor="password">
          Password:
        </label>
        <input type="password" />
        
        <button>Login</button>
        <button>Register</button>
    </header>
  )
}

export default Login