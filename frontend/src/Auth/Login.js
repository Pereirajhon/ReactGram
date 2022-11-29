import './Auth.css'

const Login = () => {

  
  return (
    <div className='auth'>
      <div className="auth-container">
        <h2>ReactGram</h2>
        <p></p>
        <form className="form-auth">
          <input type='text' placeholder='E-mail' />
          <input type='password' placeholder='Senha' />
          <button type="button" className='btn-auth'>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login