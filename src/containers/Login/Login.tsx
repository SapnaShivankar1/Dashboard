import React from "react";
import { AuthContainer } from "../../components/AuthContainer/AuthContainer";
import {useForm , SubmitHandler} from 'react-hook-form'
import { dbKeyGenerator } from "../../utils/email";
import { BASE_URL } from "../../env";
import {sha256} from 'crypto-hash';  
import { useNavigate } from "react-router-dom";

interface Iform {
    Email: string;
    Password: string;
    Remember?: string;
}

export function Login (){

    const navigate = useNavigate();//q
    const { register, handleSubmit, watch, formState : {errors}} = useForm<Iform>();


    const onSubmit: SubmitHandler<Iform> = data => {
    
        // console.log(data);
        let dbkey = dbKeyGenerator(data.Email);

        fetch(`${BASE_URL}/users/${dbkey}.json`, {
            method: 'GET',
            headers:{ContentType : 'application/json'}
        }).then(result  => result.json() )
        .then(async(res)=>{
            console.log(res);
            const hash =  await sha256(data.Password);
            if(res.Password ==  hash){
                alert('logged in');

               const sessionData = window.sessionStorage;

               sessionData.setItem('dbkey',dbkey);
               sessionData.setItem('Fname',res.Fname);
               sessionData.setItem('Lname',res.Lname);
               sessionData.setItem('email',res.Email);




                navigate('/');
            } else{
                alert('pls register');
                navigate('/register');
            }
        }).catch(()=>{
            alert("something wrong");
        })
    }


    return (
        <AuthContainer title="Welcome back!" ImgClass="bg-login-image">
       
        <form onSubmit={handleSubmit(onSubmit)} className="user">
            <div className="form-group">
                <input type="email" className="form-control form-control-user"
                    placeholder="Enter Email Address..." {...register('Email')} required />
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-user"
                    placeholder="Password" {...register('Password')} required />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox small">
                    <input type="checkbox" className="custom-control-input" {...register('Remember')} />
                    <label className="custom-control-label">Remember
                        Me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-user btn-block">
                Login
            </button>
    
        
        </form>

    <div className="text-center pt-5">
        <a className="small" href="forgot-password.html">Forgot Password?</a>
    </div>
    <div className="text-center">
        <a className="small" href="register.html">Create an Account!</a>
    </div>
  
    </AuthContainer>
)

}


// import React from 'react';
// import { useState } from 'react';

// export function First() {
//   const [count, setcount] = useState(0); // state

//   // handlers
//   IncrementHandler(){
//     setcount(count + 1);
//   }
  
//   DecrementHandler(){
//     setcount(count - 1);
//   }
  
//   return <div>
//       {porps.childerns}
//   </div>;
// }

// <First>
//     <Second IncrementHandler={IncrementHandler} DecrementHandler={DecrementHandler} />
//     <Third count={count} />
// </First>


// import React from 'react';
// import { First } from '../First/First';

// export function Second(props) {
//   return (
//     <div>
//       <button onClick={props.IncrementHandler}> Increment </button>
//       <button onClick={props.DecrementHandler}> Decrement </button>
//     </div>
//   );
// }


// import React from 'react';
// import { First } from '../First/First';
// import { Second } from '../Second/Second';

// export function Third(props) {
//   return (
//     <div>
//       Incremented Value {props.count}
//     </div>
//   );
// }
