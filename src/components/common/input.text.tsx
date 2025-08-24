import React from "react";
import { Col } from "react-bootstrap";
import { Todo } from "../../types/type";
import '../styles/input.css'

interface InputTextProps {
    label: string;
    placeholder: string;
    type: string;
    id: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function InputText({ label, placeholder, type, id, name, value, onChange, className }: InputTextProps) {
    return (
        <div className="input-container">
            <input 
                placeholder={placeholder} 
                className={`input-field ${className || ''}`} 
                type={type} 
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id} className="input-label">{label}</label>
            <span className="input-highlight"></span>
        </div>

     
    );
};

export default InputText;