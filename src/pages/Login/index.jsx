import './style.scss'
import googleIcon from './../../assets/images/google.png'

export function Login(){
  return(
    <>
      <main className='container'>
        
        <div className="login">
        <h2>Let's get started with you <span>30 days free trial</span></h2>
        <form action="">
          <button className='sign-google'> <img src={googleIcon} alt="" /> Sign up with Google</button>
          <input id='select' type="text" value="Salomão Santos" />
          <input type="email" placeholder='Enter your email'/>
          <input type="password" placeholder='Choose a password'/>
          <button className='create-account'>Create accont</button>
          <small>Already have account ? <span>Log in</span></small>
        </form>
        </div>

      </main>
    </>
  )
}