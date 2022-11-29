import './Auth.css'

const Register = () => {


  
  return (
    <div className="auth">
      <div className='auth-container'>
      <h2>ReactGram</h2>
      <p>Cadastre para ver mais fotos dos seus amigos</p>
      <form className='form-auth' >
        <input type='text' placeholder='Nome' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <input type='password' placeholder='Confirme sua Senha' />
        <button type="submit" className="btn-auth" > Registrar </button>
      </form>
    </div>
    </div>
  )
}

export default Register