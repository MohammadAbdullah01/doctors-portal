import React, { useEffect } from 'react';
import auth from '../../../firebase/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../LoadingSpinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-day-picker';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser])
    let errorMessage = "";
    if (gError || error) {
        errorMessage = <p className='text-red-500'>{gError?.message || error?.message}</p>;
    }
    if (gLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required"
                                    },
                                    pattern: {
                                        value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                        message: 'provide a valid email'
                                    }
                                })} />


                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 length'
                                    }
                                })} />


                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full' type="submit" value='Login' />
                        <p>New at Doctors Portal? <Link className='text-secondary' to='/register'>Please Signup</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;