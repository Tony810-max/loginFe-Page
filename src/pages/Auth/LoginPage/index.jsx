/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { X } from 'lucide-react';

import banner from '../../../assets/images/LoginPage/banner.webp';

import LoginPageForm from './components/LoginPageForm';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    return (
        <div className="relative flex flex-col  items-center ">
            <ToastContainer />
            <img src={banner} alt="banner" className="w-full " />
            <div className="absolute top-1/2 -translate-y-1/2  z-10 px-[8.5rem] py-10 bg-white rounded-3xl">
                <X size={32} className="absolute right-8 top-8 " />
                <LoginPageForm />
            </div>
        </div>
    );
};

export default LoginPage;
