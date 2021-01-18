import React from 'react';
import "../Dashboard/Dashboard.scss";

// Components 
import Table from '../../components/Table/Table';

function Payments() {

    return (
        <div className="dashboard__content">
            <section className="dashboard__section">
                <Table />
            </section>
        </div>
    );
};

export default Payments;