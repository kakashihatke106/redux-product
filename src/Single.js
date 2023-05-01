import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Single(){
    const [val, setval] = useState([]);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${count}`)
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
    return(
        <>
        <div className="container mt-4">
                <div className='row'>
                    <div className='col-5'>
                            <img src={val.image} className='h-100 w-100'></img>
                        <div className='text-center mt-5'>
                            <button className='m-1 btn btn-warning btn-lg'>ADD TO CART</button>
                            <button className='m-1 btn btn-danger btn-lg'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='col-7 '>
                        <p className='h3'>{val.title}</p>
                        
                        
                        <p>+ ₹29 Secured Packaging Fee</p>
                      
                        <p className='fw-bold'>Available offers</p>
                        <p className='text-success m-0'><span className='text-black'> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</span></p>
                        
                        <p className='text-success m-0'><span className='text-black'> Partner OfferPurchase now & get 1 surprise cashback coupon till November 2023Know More</span></p>
                        <sapn>Description:-</sapn><p>{val.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Single;