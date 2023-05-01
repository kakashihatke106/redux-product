import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productid } from './app/reducer/counterSlice';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Product() {
  const [val, setval] = useState([]);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      // handle success
      setval(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  },[]);
  function searchcategory(category){
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(function (response) {
      // handle success
      setval(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
    
}

  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">

        <Button className='fw-bold ' onClick={handleShow}>
            category
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
      <div className='container'>  
        <div className='row'>
          {
          val.map((x)=>{
            return(
            <>
              <div className='col-3 my-3' >
                    <Link to="single" onClick={()=> dispatch(productid(x.id))}>
                      <img className='w-100 h-100' src={x.image}></img>
                    </Link>
                  </div>
                  <div className='col-6 text-start my-3'>
                      <span className='d-block h5'>{x.title}</span>
                      <span className='d-block'>{x.description}</span>
                      <span className='h5 d-block'>{x.rating.rate}</span>
                      <span> Available products{x.rating.count}</span>
                  </div>
                  <div className='col-3 my-3'>
                      <span className='d-block h3'>₹{x.price}</span>
                      <span className='fs-13'>Free delivery</span>
                  </div>
            </>
            )
          }

          )
        }
        </div>
      </div>
    </div>
  );
}

export default Product;
