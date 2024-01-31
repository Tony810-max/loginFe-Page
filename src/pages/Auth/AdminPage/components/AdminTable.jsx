/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';

const AdminTable = () => {
    const [data, setData] = useState([]);
    const [originData, setOriginData] = useState([]);
    const fetchData = async () => {
        try {
            const reponse = await axios.get('http://localhost:3001/api/user');
            if (reponse) {
                setData(reponse.data);
                setOriginData(reponse.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async id => {
        try {
            const reponse = await axios.delete(`http://localhost:3001/api/user/delete/${id}`);
            if (reponse) {
                toast.success(reponse.data.message);
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const hadleSearchCustomer = value => {
        if (value === '') {
            setOriginData(data);
        } else {
            const filterData = data.filter(item =>
                item?.name.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filterData);
            setOriginData(filterData);
        }
    };

    const handleSearchEmail = value => {
        if (value === '') {
            setOriginData(data);
        } else {
            const filterData = data.filter(item =>
                item?.email.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filterData);
            setOriginData(filterData);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full bg-[#f8f8f8] py-14 px-10 ">
            <ToastContainer />
            <span className="text-black font-Poppins text-2xl font-normal leading-normal">
                Sales Information
            </span>
            <form className="flex gap-5 mt-6">
                <div className="flex flex-col gap-4">
                    <label>Customer</label>
                    <input
                        onChange={e => hadleSearchCustomer(e.target.value)}
                        placeholder="Enter Customer Name"
                        className="py-3 px-6 border border-[#cbcbcb]"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label>Email</label>
                    <input
                        onChange={e => handleSearchEmail(e.target.value)}
                        placeholder="Enter Email Value"
                        className="py-3 px-6 border border-[#cbcbcb]"
                    />
                </div>
            </form>
            <table className="w-full mt-10 bg-white">
                <tr className="border-b ">
                    <th className="text-left py-6 px-6">Id</th>
                    <th className="text-left py-6 px-6">Name</th>
                    <th className="text-left py-6 px-6">Email</th>
                    <th className="text-left py-6 px-6">Password</th>
                    <th className="text-left py-6 px-6">Date Create</th>
                    <th className="text-left py-6 px-6">Date Update</th>
                    <th className="text-left py-6 px-6"></th>
                </tr>
                {originData.map(item => (
                    <tr key={item._id} className="border-b ">
                        <td className="py-3 px-6">{item._id}</td>
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6">{item.email}</td>
                        <td className="py-3 px-6">{item.password}</td>
                        <td className="py-3 px-6">
                            {format(item.createdAt, 'dd/MM/yyy hh:mm:ss')}
                        </td>
                        <td className="py-3 px-6">
                            {format(item.updatedAt, 'dd/MM/yyy hh:mm:ss')}
                        </td>
                        <td className="flex gap-3 py-3 px-6">
                            <Button variant="contained" className="bg-[#76ff03] text-black">
                                Update
                            </Button>
                            <Button
                                variant="contained"
                                className="bg-red-600"
                                onClick={() => handleDelete(item?._id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default AdminTable;
