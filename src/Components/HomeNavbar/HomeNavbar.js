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
          <h4>Add User</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
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
                            <Button variant="dark" onClick={() => setModalShow(true)}>Add user</Button>
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
