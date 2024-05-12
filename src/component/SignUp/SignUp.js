import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../UserContext/UserContext';
import './SignUp.css'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { Button } from 'react-bootstrap';
const auth = getAuth(app);

const SignUp = () => {
    const { signInWithGoogle, signInWithFaceBook, signInWithGitHub } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnSubmit = (event) => {

        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase')
            return;
        }
        if (password.length < 6) {
            setPasswordError('Please provide at least six digit password')
            return;

        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail();
                updateUserName(name);

            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message);

            })

        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('Please check your email verify')
                })
        }


    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('Display Name Updated')

            })
            .catch(error => console.error(error))
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleFaceBookSignIn = () => {
        signInWithFaceBook()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (

        <div className='signup-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleOnSubmit}>
                <div className='form-control' >
                    <label htmlFor='test'>Your Name</label>
                    <input type="text" name="name" id="" required />
                </div>
                <div className='form-control' >
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control' >
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control' >
                    <label htmlFor='confirm'> Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                    <p className='password-error'>{passwordError}</p>
                    {success && <p className='text-success'>User Created Successfully</p>}
                </div>
                <br />
                <input className='btn-submit' type="submit" value="Sign Up" required />

            </form>
            <Button onClick={handleGoogleSingIn} variant="success">Google SignIn</Button>
            <Button onClick={handleFaceBookSignIn} variant="success">FaceBook SignIn</Button>
            <Button onClick={handleGithubSignIn} variant="success">Github SignIn</Button>
            <p>Already Have an Account?  <Link to='/Home'>  Login This Site</Link></p>

        </div>
    );
};

export default SignUp;