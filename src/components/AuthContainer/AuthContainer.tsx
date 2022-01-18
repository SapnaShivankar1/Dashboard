import React from "react";
interface AuthContainerProps {
    title : string,
    ImgClass : string
}

// export function AuthContainer : React.FC<AuthContainerProps>(props){
    export const AuthContainer : React.FC<AuthContainerProps> = (props) => {

    const {title, children, ImgClass} = props;
    return (

        <div className="container">

     
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

    <div className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
        
        <div className="row">
            <div className={`col-lg-6 d-none d-lg-block ${ImgClass}`}></div>
            <div className="col-lg-6">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">{title}</h1>
                    </div>
                   {children}
                </div>
            </div>
        </div>
    </div>
</div>
</div></div></div>
    )
}