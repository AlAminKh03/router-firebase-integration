import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Register = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please Register</h2>
            <button onClick={() => signInWithGoogle()}>Google Signin</button>
            <form action="">
                <input type="text" placeholder='Your Name' /><br />
                <input type="email" placeholder='email' /><br />
                <input type="password" placeholder='password' /><br />
            </form>
        </div>
    );
};

export default Register;