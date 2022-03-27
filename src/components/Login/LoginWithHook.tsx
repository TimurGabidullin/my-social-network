import React from 'react'
import {connect} from "react-redux";
import {loginWithHook} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'
import {SubmitHandler, useForm} from "react-hook-form";


type LoginPropsType = {
    loginWithHook: (email: string, password: string, rememberMe: boolean,captcha:any, setError: Function) => void
    isAuth: boolean
    captchaUrl: null | string
}


type DataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:any
}

const Login = (props: LoginPropsType) => {
    const {loginWithHook, isAuth, captchaUrl} = props
    const {register, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({mode: 'onBlur'});
    const onSubmit: SubmitHandler<any> = (data: any) => {
        loginWithHook(data.email, data.password, data.rememberMe ,data.captcha,setError)
    }

    if (isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label>
                    <input placeholder={"E-mail"}  {...register("email", {required: true})}  />
                    E-mail
                </label>
                {errors.email && <div className={styles.formSummaryError}>This field is required</div>}
            </div>

            <div>
                <label>
                    <input  placeholder={"password"}{...register("password", {required: true})} />
                    Password
                </label>
            </div>

            {errors.password && <div className={styles.formSummaryError}>This field is required</div>}

            <div>
                <label>
                    <input {...register("checkbox")} type="checkbox" value="A"/>
                    Remember me </label>
            </div>
            {errors.error && <div className={styles.formSummaryError}>{errors.error.message}</div>}
            <div>
                {captchaUrl && <div><img src={captchaUrl} alt="captcha"/></div>}
                {captchaUrl &&
                <div>
                    <label>
                        <input {...register("captcha", {required: true})} />
                        Captcha
                    </label>
                </div>}


                {/*<input {...register("captcha", {required: true})} />*/}

                <input type="submit" onClick={()=>{clearErrors()}}/>
            </div>

        </form>

    </div>
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect(mapStateToProps, {loginWithHook})(Login)