import React from "react";
import { Button, Col } from "react-bootstrap";
import { Todo } from "../../types/type";
import '../styles/input.css'

interface InputTextProps {
    label: string;
    variant: string;
    id: string;
    name?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

function ButtonComponent({ label, variant, id, name, onClick, className }: InputTextProps) {
    return (
        <div className="input-container">
            <Button 
                className={`input-field ${className || ''}`} 
                variant={variant} 
                id={id}
                name={name}
                onClick={onClick}
            />
            <label htmlFor={id} className="input-label">{label}</label>
            <span className="input-highlight"></span>
        </div>

     
    );
};

export default ButtonComponent;