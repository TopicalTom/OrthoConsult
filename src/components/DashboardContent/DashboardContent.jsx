import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardContent = () => {
    const location = useLocation(); 
    const { currentUser } = useAuth();

    return (
        <section className="dashboard__content" >

        </section>
    );
};

export default DashboardContent;