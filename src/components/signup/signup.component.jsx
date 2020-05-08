import React from 'react';
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.util';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName})

            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            });

        } catch(error) {
            console.error(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signup">
                <h2 className='title'>I don't have an Account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Display Name'
                        handleChange= {this.handleChange}
                        value={ displayName}
                        required>
                    </FormInput>
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        handleChange= {this.handleChange}
                        value={ email}
                        required>
                    </FormInput>
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        handleChange= {this.handleChange}
                        value={ password}
                        required>
                    </FormInput>
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        handleChange= {this.handleChange}
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
}

export default SignUp;