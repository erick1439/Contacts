import React from "react";
import  {Button, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './HomeNavbar.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add User
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" name="fullName" />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" name="city" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="password" className="form-control" placeholder="Enter phone number" name="phoneNumber" />
                </div>   
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
            <Button onClick={props.onHide}>Add User</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function HomeNavbar() {

    const location = useLocation();
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <h1 className="navbar-brand">Welcome {location.state.firstName}!</h1>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Button variant="link" onClick={() => setModalShow(true)}>Add user</Button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Logout</Link>
                        </li>
                    </ul>
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                </div>
            </div>
        </nav> 
    ) 
}
