import React from 'react';
import "./Copy.scss";

// Components
import Button from '../Button/Button';

const Copy = (props) => {
    const { type, theme, header, subtitle, title, details, buttons} = props;

    return (
        <section className={`
            copy 
            copy--${type === "hero" ? "hero" : "marketing"}
            copy--${theme === "light" ? "light" : "dark"}`}>
            {type === "hero"
                ?   <h1 className="copy__header">
                        {header}
                    </h1>
                :   <>
                        <span className={`
                            copy__subtitle
                            copy__subtitle--${theme === "light" ? "light" : "dark"}`}>
                            {subtitle}
                        </span>
                        <h2 className={`
                            copy__title
                            copy__title--${theme === "light" ? "light" : "dark"}`}>
                            {title}
                        </h2>
                    </>
            }
            <p className={`
                copy__details 
                copy__details--${type === "hero" ? "half" : "full"}
                copy__details--${theme === "light" ? "light" : "dark"}`}>
                {details}
            </p>
            <div className="copy__actions">
                {buttons && buttons.map((item) => {
                    const { type, link, authLink, text, authText, icon } = item
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
                {type === "hero" &&
                    <div></div>
                }
            </div>   
        </section>
    );
};

export default Copy;