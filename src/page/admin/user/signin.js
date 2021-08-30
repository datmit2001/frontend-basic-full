import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn, authenticate, isAuthenticated } from '../../../auth';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToref, setRedirectToref] = useState(false);

const {user} = isAuthenticated();
    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToref(true);
                    })
                }
            })
    }
    const redirectUser = () => {
        if(redirectToref){
            if(user.role == 1){
              return <Redirect to="/admin/dashboard" />
            }else{
                return <Redirect to="/admin/user" />
            }
        }
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button className="btn btn-primary">Đăng nhập</button>
            </form>
        )
    }
    return (
        <div title="Đăng nhập" description="Đăng nhập trang quản trị" className="signin-page">
            {showError()}
            {showLoading()}
            {signInForm()}
            {redirectUser()}
        </div>
    )
}

export default SignIn