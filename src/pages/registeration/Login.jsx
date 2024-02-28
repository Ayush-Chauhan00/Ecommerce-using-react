import React, { useContext, useState } from 'react'
import css from '../registeration/Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../../context/data/MyContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../componets/loader/Loader'


const Login = () => {
  const context = useContext(MyContext)
  const { loading, setLoading } = context;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = async () => {

    setLoading(true)
    try {

      const result = await signInWithEmailAndPassword(auth, email, password)
      toast.success("Login Successfully");
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/')
      setLoading(false)

    } catch (error) {
      console.log("error");
      setLoading(false)
    }
  }

  return (<div className={css.login}>
    < div className={css.form}>
      {loading && <Loader />}
      <h1>Login</h1>

      <div className={css.mail}>
        <input type='email' name='mail' placeholder='Email' className={css.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={css.password}>
        <input type='password' name='password' placeholder='Password' className={css.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className={css.loginbtn} onClick={login}>Login</button>
      <div className={css.forsignup}>
        <p>Don't have account?</p>
        <Link to={"/signup"} className={css.signuptext}>Signup</Link>
      </div>

    </div>
  </div>
  )
}

export default Login
