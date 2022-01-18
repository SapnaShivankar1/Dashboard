import React from "react";
import { AuthContainer } from "../../components/AuthContainer/AuthContainer";
import {useForm , SubmitHandler} from 'react-hook-form';



export const Register = () => {

    interface RFormData {
        Fname : string,
        Lname : string,
        Email : string,
        Password : string,
        RPassword : string
    }

const {register , handleSubmit, watch, formState : {errors}} = useForm<RFormData>();
    const onSubmit : SubmitHandler<RFormData> = (data) => console.log(data);

        return (
            <AuthContainer title="Create an Account!" ImgClass="bg-register-image">
                <form className="user" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                placeholder="First Name" {...register('Fname')} />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                placeholder="Last Name" {...register('Lname')} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                            placeholder="Email Address"  {...register('Email')} />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" className="form-control form-control-user"
                                id="exampleInputPassword" placeholder="Password"  {...register('Password')} />
                        </div>
                        <div className="col-sm-6">
                            <input type="password" className="form-control form-control-user"
                                id="exampleRepeatPassword" placeholder="Repeat Password" {...register('RPassword')} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">
                        Register Account
                    </button>
            
                </form>
                
                <div className="text-center pt-5">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div className="text-center">
                    <a className="small" href="login.html">Already have an account? Login!</a>
                </div>
            </AuthContainer>
                        
        )
}
