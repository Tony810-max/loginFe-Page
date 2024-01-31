import React from 'react';

import logo from '../../../../src/assets/images/SignUp/logo.webp';
import imgsignUp from '../../../../src/assets/images/SignUp/Abstraction.webp';
import SignUpForm from './components/SignUpForm';
const SignUpPage = () => {
    return (
        <div className="bg-[#43697b] flex justify-center items-center min-h-screen">
            <div className="bg-[#1f485b] rounded-[2rem] shadow-custom flex">
                <div className="pl-4 flex flex-col max-w-[500px] py-6 px-4">
                    <img src={logo} alt="logo" className="w-[8.5rem] h-[7.4rem]" />
                    <span className="inline-block max-w-[25rem] text-white font-Poppins text-4xl font-normal leading-normal tracking-widest mt-14">
                        Getting Started With VR Creation
                    </span>
                    <img
                        src={imgsignUp}
                        alt="img"
                        className="min-w-[39.5rem] h-[42rem] transform rotate-custom"
                    />
                </div>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
