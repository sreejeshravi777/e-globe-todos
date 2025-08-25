import React from "react";
import "../styles/header.css";

interface HeaderProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ value, onChange }: HeaderProps) => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark header-navbar">
            <div className="container-fluid">
              <a className="navbar-brand header-brand" href="/dashboard">
                <b>ToDo</b>
              </a>
              <div className="">
                <form className="d-flex header-search-form" role="search">
                  <input 
                    className="form-control header-search-input" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    value={value} 
                    onChange={onChange}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;