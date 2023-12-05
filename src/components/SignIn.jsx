

const SignIn = () => {
  return (
    <main>
        <h3>Sign In</h3>
        <div className="card">
            <form autoComplete="off">
                <fieldset>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" autoFocus />
                    <p>Valid email required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" />
                    <p>password must long</p>
                </fieldset>
                <button type="submit">Login</button>
                <div className="forgot">forgot password</div>
            </form>
        </div>
        <p>Don&apos;t have an account? <span>Sign Up</span></p>

    </main>
  )
}

export default SignIn;