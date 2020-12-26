import React from 'react';
import "./Copy.scss";

// Components
import Button from '../Button/Button';

const Copy = (props) => {
    const { type, theme, header, subtitle, title, details, buttons} = props;

    const toggleBacking = (theme === "light" ? "light" : "dark");
    const toggleWidth = (type === "hero" ? "half" : "full");

    return (
        <section className={`copy copy--${type} copy--${toggleBacking}`}>
            {header
                ?   <h1 className="copy__header">
                        {header}
                    </h1>
                :   <>
                        <span className={`copy__subtitle copy__subtitle--${toggleBacking}`}>
                            {subtitle}
                        </span>
                        <h2 className={`
                            copy__title
                            copy__title--${theme === "light" ? "light" : "dark"}`}>
                            {title}
                        </h2>
                    </>
            }
            <p className={`copy__details copy__details--${toggleWidth} copy__details--${toggleBacking}`}>
                {details}
            </p>
            <div className="copy__actions">
                {buttons && buttons.map((item) => {
                    const { type, link, authLink, text, authText, icon } = item;
                    return (
                        <Button 
                            theme={theme}
                            type={type}
                            link={link} 
                            authLink={authLink}
                            text={text}  
                            authText={authText}
                            icon={icon}
                        />
                    )
                })}
            </div>   
        </section>
    );
};

export default Copy;