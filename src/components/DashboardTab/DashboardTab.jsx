import React from 'react';
import "../DashboardTabs/DashboardTabs.scss";

const Tab = ( {children, ...props} ) => {
    const { id } = props;

    return (
        <div className="tabs__tab" id={id}>
            {children}
        </div>
    );
};

export default Tab;