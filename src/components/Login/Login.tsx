import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { LoginFormType } from '../../api/api';



const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props: any) => {
    return (
        <form>
            <div>
                <Field component={'input'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'}  placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'}  type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm ({
     form: 'login'
})(LoginForm)

export const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>
}