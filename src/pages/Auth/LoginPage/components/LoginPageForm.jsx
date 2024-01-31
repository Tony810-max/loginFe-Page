/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ROUTES from '../../../../types/routes';

import ButtonCard from '../../../../components/ButtonCard';

import logoGG from '../../../../assets/images/SignUp/imgGG.webp';
import imgFB from '../../../../assets/images/SignUp/imgFB.webp';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    .required();

const LoginPageForm = () => {
    const navigate = useNavigate();
    const [hide, setHide] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    console.log(hide);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/user/');
            if (response) {
                setDataUser(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = data => {
        const checkUser = dataUser.some(
            item => item.email === data.email && item.password === data.password
        );
        if (checkUser) {
            toast.success('Login successfully');
            reset();
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } else {
            toast.error('email or password wrong');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <form
            className="flex flex-col min-w-[33rem] items-center py-10 gap-10"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col items-center">
                <span className="rounded-full bg-[#C4C4C4] w-12 h-12" />
                <span className="text-[#333] text-center font-Poppins text-[2rem] font-medium leading-normal mt-6">
                    Log in
                </span>
                <span className="text-[#333] font-Poppins text-base font-normal leading-normal ">
                    Don’t have an ccount?
                    <Link
                        to={ROUTES.SIGNUP}
                        className="text-[#333] font-Poppins text-base font-normal leading-normal underline"
                    >{` Sign up`}</Link>
                </span>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <ButtonCard
                    image={logoGG}
                    name={'Log in with Facebook'}
                    classButton={'gap-4 rounded-[2.5rem] py-5'}
                    ClassSpan={
                        'text-[#333] font-Avenir text-[1.4rem] font-normal leading-normal normal-case'
                    }
                />
                <ButtonCard
                    image={imgFB}
                    name={'Log in with Google'}
                    classButton={'gap-4 rounded-[2.5rem] py-5'}
                    ClassSpan={
                        'text-[#333] font-Avenir text-[1.4rem] font-normal leading-normal normal-case'
                    }
                />
            </div>
            <Divider>OR</Divider>
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-1">
                    <label className="text-[#666] font-Poppins text-base font-normal leading-normal">
                        Your email
                    </label>
                    <input
                        {...register('email')}
                        name="email"
                        className="w-full border border-[#d7d7d7] rounded-xl h-14 px-2"
                    />
                    {errors.email?.message && (
                        <p className="text-red-600">{errors.email?.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <label className="text-[#666] font-Poppins text-base font-normal leading-normal">
                            Your password
                        </label>
                        {!hide ? (
                            <div
                                className="flex gap-2 cursor-pointer"
                                onClick={() => {
                                    setHide(!hide);
                                }}
                            >
                                <EyeOff />
                                <span>Hide</span>
                            </div>
                        ) : (
                            <div
                                className="flex gap-2 cursor-pointer"
                                onClick={() => {
                                    setHide(!hide);
                                }}
                            >
                                <Eye />
                                <span>Unhide</span>
                            </div>
                        )}
                    </div>
                    <input
                        type={!hide ? 'password' : 'text'}
                        {...register('password')}
                        name="password"
                        className="w-full border border-[#d7d7d7] rounded-xl h-14 px-2"
                    />
                    {errors.password?.message && (
                        <p className="text-red-600">{errors.password?.message}</p>
                    )}
                </div>
            </div>
            <Link
                to={ROUTES.FORGET}
                className="text-[#111] text-right w-full font-Poppins text-base font-normal leading-normal underline"
            >
                Forget your password
            </Link>
            <Button
                type="submit"
                variant="contained"
                className="bg-[#c3c3c3] rounded-3xl w-full py-4 text-white font-Poppins text-2xl font-medium leading-normal opacity-70"
            >
                Log in
            </Button>
        </form>
    );
};

export default LoginPageForm;
