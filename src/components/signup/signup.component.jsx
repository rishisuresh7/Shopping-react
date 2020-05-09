import React, {useState} from 'react';
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.util';

const SignUp = () => {
    const [userCreds, setUserCreds] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    });

    const { displayName, email, password, confirmPassword } = userCreds;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCreds({ ...userCreds, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName})

            setUserCreds({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            });

        } catch(error) {
            console.error(error.message);
        }
    }

    return (
        <div className="signup">
            <h2 className='title'>I don't have an Account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit= {handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    label='Display Name'
                    handleChange= {handleChange}
                    value={ displayName}
                    required>
                </FormInput>
                <FormInput 
                    name='email'
                    type='email'
                    label='Email'
                    handleChange= {handleChange}
                    value={ email}
                    required>
                </FormInput>
                <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    handleChange= {handleChange}
                    value={ password}
                    required>
                </FormInput>
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    handleChange= {handleChange}
                    value={ confirmPassword}
                    required>
                </FormInput>
                <div className="buttons">
                    <CustomButton type='submit' >Sign Up</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp;