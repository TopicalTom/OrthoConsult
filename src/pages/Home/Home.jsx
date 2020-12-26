import React from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import "../Dashboard/Dashboard.scss";

function Home() {
    const { currentUser } = useAuth();

    return (
        <section className="dashboard__content">
            Placeholder
        </section>
    );
};

export default Home;