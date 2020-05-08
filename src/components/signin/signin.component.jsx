import React from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.error(error);
        };
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState( { [name]: value});
    }

    render() {
        return (
            <div className="signin">
                <h2 className='title'>I already have an Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        handleChange= {this.handleChange}
                        value={ this.state.email}
                        required>
                    </FormInput>
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        handleChange= {this.handleChange}
                        value={ this.state.password}
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
}

export default SignIn;