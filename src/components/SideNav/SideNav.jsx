import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./SideNav.scss";

const SideNav = props => {
    const { links } = props;

    return (
        <div className="sidenav" >
            <h3 
                className="sidenav__header">
                Quick links
            </h3>
            <ul className="sidenav__links">
                {links && links.map(link => {
                    return (
                        <li>
                            <Link
                                activeClass="active"
                                to={link.url}
                                spy={true}
                                className="sidenav__link"
                                smooth={true}
                                offset={-240}
                                duration={500}
                                //onSetActive={handleSetActive}
                                >
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SideNav;