import React, { useContext, useState } from 'react'
import css from '../registeration/Signup.module.css'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/MyContext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, fireDB } from '../../firebase/FirebaseConfig'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import Loader from '../../componets/loader/Loader'
const Signup = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(MyContext)
  const { loading, setLoading } = context;
  const signupbtn = async () => {
    setLoading(true)


    if (name === '' || mail === '' || password === '') {
      return toast.error("All Fields Are Required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, mail, password)
      //console.log(users);
      let user = {
        name: name,
        uid: users.user.uid,
        mail: users.user.email,
        //time: Timestamp.now()
      }
      const userRef = collection(fireDB, "users")
      await addDoc(userRef, user)
      toast.success("Sign Up Successfully")
      setName("");
      setMail("")
      setPassword("")
      setLoading(false)
    }

    catch (error) {
      console.log(error);
    }

  }
  return (
    <div className={css.login}>
      {loading && <Loader />}
      < div className={css.form}>
        <h1>Signup</h1>
        <div className={css.name}>
          <input type='text' name='name' placeholder='Name' className={css.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={css.mail}>
          <input type='email' name='mail' placeholder='Email' className={css.input}
            value={mail}
            onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className={css.password}>
          <input type='password' name='password' placeholder='Password' className={css.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={css.loginbtn} onClick={signupbtn}> Signup </button>
        <div className={css.forsignup}>
          <p> Have account?</p>
          <Link to={"/login"} className={css.logintext}>Login</Link>
        </div>

      </div>
    </div >
  )
}

export default Signup
