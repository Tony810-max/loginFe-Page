/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminTable from './components/AdminTable';

const AdminPage = () => {
    return (
        <div className="flex justify-center min-h-screen ">
            <AdminSidebar />
            <AdminTable />
        </div>
    );
};

export default AdminPage;
