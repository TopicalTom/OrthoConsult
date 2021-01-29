import React from 'react';
import "./DashboardSection.scss";

const DashboardSection = ( {children, ...props} ) => {
    const { scroll, className } = props;
    const hasScroll = scroll ? " withScroll" : "";

    return (
        <section className={`${className} section ${hasScroll}`}>
            {children}
        </section>
    );
}

export default DashboardSection;