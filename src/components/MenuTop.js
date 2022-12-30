import logo from './../assets/logo.png'
import user from './../assets/post/dw.jpg'
import { 
  Dropdown,
  Button,
 } from 'react-bootstrap'; 
 import { HiOutlineSearch } from "react-icons/hi";
export function MenuTop() {
  return(
    <nav className="navbar navbar-light fixed-top">
    <div className="container">
      <img src={logo} alt="" />
      <div className="d-flex">
      <div className="input-group me-2">
          <input type="Search" className="form-control" placeholder="Search"/>
          <span className="input-group-text" id="basic-addon1"><HiOutlineSearch/></span>
        </div>
        <Button>Create</Button>
        <div className='ms-2'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <div className="avatar">
            <img src={user} className='img-fluid'/>
          </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    </div>
  </nav>
  );
}