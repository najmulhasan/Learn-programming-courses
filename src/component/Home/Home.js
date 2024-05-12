// import Header from '../Header/Header';
import login from '../../images/login.png'
import app from '../../firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth(app);

const Home = () => {
    const { signInWithGoogle, signInWithFaceBook, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        setPasswordError('');

        signInWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                navigate('/Courses');

            })
            .catch(error => {
                console.error('error', error)
                setPasswordError(error.message);
            })
    }




    const handleEmailBlur = event => {
        const email = event.target.value;
        setEmail(email);
        console.log(email);
    }


    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email has been sent to your mail id')
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleFacebookSignIn = () => {
        signInWithFaceBook()
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser();


            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser();

            })
            .catch(error => {
                console.log('error: ', error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser();

            })
            .catch(error => {
                console.log('error: ', error)
            })
    }

    return (
        <>
            <div className='login-container'>
                <h1 className='form-title'>Login Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-control' >
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className='form-control' >
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" required />
                    </div>

                    <input className='btn-submit' type="submit" value="Login" required />
                    <p className='password-error'>{passwordError}</p>

                </form>
                {success && <p className='text-success'>Successfully Login</p>}
                <p>New to this website    <Link to='/signUp'>   Create a New Account</Link></p>
                <p>Forget Password?<Button onClick={handleForgetPassword} variant="link">Reset Password</Button></p>
                <div className=''>
                    <Button className='google-btn' onClick={handleGoogleSignIn}>Google sign in</Button>
                    <Button className='facebook-btn' onClick={handleFacebookSignIn}>Facebook sign in</Button>
                    <Button onClick={handleGithubSignIn}>Github sign in</Button>

                </div>


            </div>

        </>

    );
};

export default Home;