/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button, Divider, Input, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SelectComponet from '../../../../components/SelectComponet';
import ButtonCard from '../../../../components/ButtonCard';

import imgFB from '../../../../assets/images/SignUp/imgFB.webp';
import imgGG from '../../../../assets/images/SignUp/imgGG.webp';
import ROUTES from '../../../../types/routes';

import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DATA_DEFAULT = [
    {
        id: 1,
        value: 'English (UK)',
    },
    {
        id: 2,
        value: 'Viet Name (VN)',
    },
];

const schema = yup
    .object()
    .shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
    })
    .required();
const SignUpForm = () => {
    const [value, setValue] = useState(DATA_DEFAULT[0].value);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const handleChange = event => {
        setValue(event.target.value);
    };

    const onSubmit = async data => {
        try {
            const reponse = await axios.post('http://localhost:3001/api/user/create', data);
            if (reponse) {
                toast.success(reponse.data.message);
            }
        } catch (error) {
            if (error) {
                toast.error(error.response.data.error);
            }
        }
    };

    return (
        <div className="bg-white p-52 relative flex flex-col">
            <ToastContainer />
            <SelectComponet
                data={DATA_DEFAULT}
                value={value}
                onSetAge={setValue}
                handle={handleChange}
                custom={'absolute z-10 top-6 right-10'}
            />
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <span className="text-black font-Poppins text-2xl font-extrabold leading-9 tracking-wide">
                    Create Account
                </span>
                <div className="flex justify-between gap-4 mt-10">
                    <ButtonCard
                        name={'Signup with Google'}
                        image={imgGG}
                        classButton={'rounded-md border border-[#F3F3F3] gap-4 py-3 px-3'}
                        ClassSpan={
                            'text-black font-Poppins text-xs font-light leading-9 tracking-wide normal-case'
                        }
                    />
                    <ButtonCard
                        name={'Signup with Facebook'}
                        image={imgFB}
                        classButton={'rounded-md border border-[#F3F3F3] gap-4 py-3 px-3'}
                        ClassSpan={
                            'text-black font-Poppins text-xs font-light leading-9 tracking-wide normal-case'
                        }
                    />
                </div>
                <Divider className="mt-[3.8rem]">OR</Divider>
                <Input
                    {...register('name')}
                    name="name"
                    placeholder="Full Name"
                    className="py-1 px-2 mt-10"
                />
                {errors?.name?.message && <p className="text-red-600">{errors?.name?.message}</p>}
                <Input
                    {...register('email')}
                    name="email"
                    placeholder="Email"
                    className="py-1 px-2 mt-10"
                />
                {errors?.email?.message && <p className="text-red-600">{errors?.email?.message}</p>}
                <Input
                    type="password"
                    {...register('password')}
                    name="password"
                    placeholder="Password"
                    className="py-1 px-2 mt-10"
                    endAdornment={
                        <InputAdornment position="end">
                            <Lock />
                        </InputAdornment>
                    }
                />
                {errors?.password?.message && (
                    <p className="text-red-600">{errors?.password?.message}</p>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    className="bg-[#1F485B] text-white font-Poppins text-base font-extrabold leading-9 tracking-normal capitalize mt-14 "
                >
                    Create Account
                </Button>
                <span className="text-[#BEBCBC] font-Poppins text-base font-medium leading-9 mt-10">
                    Already have an account?
                    <Link
                        to={ROUTES.LOGIN}
                        className="text-[#1F485B] font-Poppins text-base font-medium leading-9"
                    >
                        Log In
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default SignUpForm;
