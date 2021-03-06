import React from 'react';

// Components
import Option from "../../components/Option/Option";
import OptionGroup from "../../components/Option/OptionGroup";
import Selection from "../../components/Selection/Selection";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import ScrollView from "../../components/ScrollView/ScrollView";
import Toggle from "../../components/Toggle/Toggle";
import UploadFile from "../../components/UploadFile/UploadFile";
import CanvasPad from "../../components/CanvasPad/CanvasPad";

const EvaluationFields = (props) => { 
    
    const { layout, options, type, path, group, data, callback, name } = props;

    switch (type) {
        
        // Populates Fields for
        case "radios":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    {options && options.map((item) => {
                        return (
                            <Option 
                                name={name}
                                callback={callback}
                                check="CHECK_FIELD"
                                data={data}
                                id={item.id}
                                label={item.label}
                                value={item.value}
                                details={item.details}
                                initialPreview={item.initialPreview}
                                selectedPreview={item.selectedPreview}
                                group={group}
                                path={path}
                                type={type}
                            />
                        )
                    })}
                </div>
            )
        
        // Populates Fields for 
        case "checkbox":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    {options && options.map((item) => {
                        return (
                            <OptionGroup 
                                name={item.name}
                                callback={item.callback}
                                check="CHECK_FIELDS"
                                id={item.id}
                                label={item.label}
                                value={item.value}
                                details={item.details}
                                initialPreview={item.initialPreview}
                                selectedPreview={item.selectedPreview}
                                group={group}
                                path={path}
                            />
                        )
                    })}
                </div>
            )   
        
        // Populates Fields for Patient Info Question
        case "info":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    <div className="evaluation__split evaluation__split--left">
                        {options && options.slice(0,3).map((item) => {
                            return (
                                <Input
                                    name={item.name}
                                    label={item.label}
                                    type={item.type}
                                    criteria={item.criteria}
                                    callback={item.callback}
                                    placeholder={item.placeholder}
                                    check={item.check}
                                    value={item.value}
                                    group={group}
                                    path={path}
                                />
                            )
                        })}
                        <Selection 
                            label={options[3].label}
                            name={options[3].name}
                            type="radio"
                            callback="STORE_AS_NESTED_DATA"
                            orientation="horizontal"
                            data={options[3].data}
                            list={options[3].list}
                            group={group}
                            path={path}
                        />
                    </div>
                    <div className="evaluation__split evaluation__split--right">
                        {options && options.slice(4,5).map((item) => {
                            return (
                                <Selection 
                                    label={item.label}
                                    name={item.name}
                                    type="radio"
                                    callback="STORE_AS_NESTED_DATA"
                                    orientation="vertical"
                                    data={item.data}
                                    list={item.list}
                                    group={group}
                                    path={path}
                                />
                            )
                        })}
                    </div>
                </div>
            )   
        
        // Populates Fields for Ethnicity Question
        case "ethnicity":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    <Selection 
                        label={options[0].label}
                        name={name}
                        type="radio"
                        callback="STORE_AS_NESTED_DATA"
                        orientation="vertical"
                        data={data}
                        list={options[0].list}
                        group={group}
                        path={path}
                    />
                </div>
            )   
        
        // Populates Fields for Treatment Concerns Question
        case "concerns":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    {options && options.map((item) => {
                        return (
                            <TextArea 
                                label={item.label}
                                name={item.name}
                                type="text"
                                callback="STORE_AS_NESTED_DATA"
                                check="CHECK_TEXT"
                                placeholder={item.placeholder}
                                value={item.value}
                                group={group}
                                path={path}
                            />
                        )
                    })}
                </div>
            )    
        
        // Populates Fields for Calculation Questions
        case "calculations":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    {options && options.map((item) => {
                        return (
                            <Input
                                name={item.name}
                                label={item.label}
                                type="number"
                                help={item.help}
                                criteria={item.criteria}
                                callback="STORE_AS_NESTED_DATA"
                                check="CHECK_NUMBER"
                                value={item.value}
                                group={group}
                                path={path}
                            />
                        )
                    })}
                </div>
            )  
            
        // Populates Fields for Treatment Question
        case "draw":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    <CanvasPad />
                </div>
            )
        
        // Populates Fields for Treatment Question
        case "treatment":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    {options &&
                        <> 
                        <Selection 
                            label={options[0].label}
                            name={options[0].name}
                            type="radio"
                            callback="STORE_AS_NESTED_DATA"
                            orientation="vertical"
                            data={options[0].data}
                            list={options[0].list}
                            group={group}
                            path={path}
                        />
                        <TextArea
                            label={options[1].label}
                            name={options[1].name}
                            type="text"
                            callback="STORE_AS_NESTED_DATA"
                            check="CHECK_TEXT"
                            placeholder={options[1].placeholder}
                            value={options[1].value}
                            group={group}
                            path={path}
                        />
                        </>
                    }
                </div>
            )

        // Populates Fields for Treatment Question
        case "upload":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    <UploadFile />
                    {options && options.map((item) => {
                        return (
                            <Toggle
                                name={item.name}
                                id={item.id}
                                callback="STORE_DATA"
                                label={item.label}
                                value={item.value}
                            />
                        )
                    })}
                </div>
            )

        // Populates Fields for Treatment Question
        case "review":
            return (
                <div className={`evaluation__fields evaluation__fields--${layout}`}>
                    <ScrollView />
                    {options && options.map((item) => {
                        return (
                            <Toggle
                                name={item.name}
                                id={item.id}
                                callback="STORE_DATA"
                                label={item.label}
                                link={item.link}
                                value={item.value}
                            />
                        )
                    })}
                </div>
            )

        default:
            return <div className={`evaluation__fields`}></div>;
    }
};

export default EvaluationFields;