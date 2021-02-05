import React, {useState} from 'react';
import "./DashboardTabs.scss";

const DashboardTabs = ( {children, ...props} ) => {
    const { tabs, className } = props;
    const [ selected, setSelected ] = useState(tabs[0].title);

    const handleSelection = (tab) => {
        setSelected(tab);
    }

    return (
        <section className={`${className} tabs`}>
            <ul className="tabs__list">
                {tabs && tabs.map((tab, key) => {
                    return (
                        <li className="tabs__index" key={key}>
                            <div 
                                className={`tabs__item ${selected === tab.title ? "active" : "inactive"}`} 
                                onClick={() => handleSelection(tab.title)}>
                                <p 
                                    className={`tabs__title ${selected === tab.title ? "active" : "inactive"}`}>
                                    {tab.title}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {children && children.filter(tab => tab.props.id === selected)}
        </section>
    );
}

export default DashboardTabs;