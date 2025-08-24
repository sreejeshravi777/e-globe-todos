import React from "react";
interface InputTextProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Header = ({  value, onChange }: InputTextProps) => {
    
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#00b7eb"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/dashboard"><b>ToDo</b></a>
    <div className="" id="">
    
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={onChange}/>
        {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;