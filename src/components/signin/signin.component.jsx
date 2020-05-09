import React, {useState} from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.util';


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch(error) {
            console.error(error);
        };
    }

    return (
        <div className="signin">
            <h2 className='title'>I already have an Account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit= {HandleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    label='Email'
                    handleChange= {(event) => setEmail(event.target.value)}
                    value={ email}
                    required>
                </FormInput>
                <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    handleChange= {(event) => { setPassword(event.target.value)}}
                    value={ password}
                    required>
                </FormInput>
                <div className="buttons">
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton onClick ={ signInWithGoogle } isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;