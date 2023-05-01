import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Header(){
    const [data, setdata] = useState()
    function searchcategory(category){
            axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(function (response) {
              // handle success
              setdata(response.data)
              console.log(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
          
            
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">

        <Button className='fw-bold ' onClick={handleShow}>
            categary
            </Button>
        <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                    <Button className='my-1 w-50' onClick={()=> searchcategory("electronics")}>electronics</Button><br></br>
                    <Button className='my-1 w-50' onClick={()=> searchcategory("jewelery")}>jewelery</Button><br></br>
                    <Button className='my-1 w-50' onClick={()=> searchcategory("men's clothing")}>men's clothing</Button><br></br>
                    <Button className='my-1 w-50' onClick={()=> searchcategory("women's clothing")}>women's clothing</Button><br></br>
                </Offcanvas.Body>
            </Offcanvas>
            <p className="navbar-title text-white fw-bold me-3">PRODUCTS </p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
            <form class="d-flex">
                <input class="form-control me-2 rounded-0" type="search " placeholder="Search"></input>
                <button class="btn text-primary fw-bold btn-light rounded-0" type="">Login</button>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link fw-bold text-white active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="#">About</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
        </>
    )
}
export default Header;