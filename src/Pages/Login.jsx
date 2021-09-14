import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../App';
import { useHistory } from "react-router-dom";



const Login = () => {
    const { isLogged,setAuth} = useContext(UserContext)    
    const { register, handleSubmit, formState: { errors } } = useForm()

    const history = useHistory()
    const redirect = () => {      
      history.push('/')
    }


    const onSubmit = (data) => {
        console.log('data on submit', data);
        setAuth()
        redirect()
        
    }
    console.log("errors", errors);

    return (
        <div className='container-login'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='container-login-input'>
                    <input
                        className='input-login'
                        name='userName'
                        {...register('userName',
                            { required: 'veuillez renseigner votre username', maxLength: 15 })}
                        placeholder='userName'
                    />
                    <span
                        className='span-login'>
                        {errors.userName && errors.userName.type === 'maxLength' && 'username too long'}
                    </span>
                    <li>{errors.userName && errors.userName.message}</li>
                </div >

                <div className='container-login-input'>
                    <input
                        className='input-login'
                        name='password'
                        {...register('password',
                            { required: 'veuillez entrer votre password', minLength: 6 })}
                        placeholder='password'
                    />
                    <span
                        className='span-login'>
                        {errors.password && errors.password.type === 'minLength' && 'password is too short'}
                    </span>
                    <li>{errors.password && errors.password.message}</li>
                </div>
                {isLogged ?
                    <button
                        className="btnLogOut"
                        type='submit'
                        onClick={onSubmit}>
                        Logout
                    </button> 
                    
                    :                 
                    
                        <button
                            className='btnLogin'
                            type='submit'>
                            Envoyer
                        </button>
                    
                }

            </form>
        </div>
    );
};

export default Login;