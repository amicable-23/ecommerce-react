import React, {useEffect, useState} from 'react'
import {FaSearch} from "react-icons/fa"
import Productcard from '../Common/Productcard'
import axios from "axios"


function Home() {
  const [products, setProducts]= useState([])

  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
     .then((res)=> setProducts(res.data))

  }, [])

   function calculate(){
    let a = 15;
    let b = 36;
    let c = a +b;
    // alert(c)
     
    }
    // const products = [
    //   {id:1, title: "Shoe", price: 12000, img: "./../../images/tennis-shoe.webp"},
    //   {id:2, title: "Bag", price: 7000, img: "./../../images/bag.webp"},
    //   {id:3, title: "Laptop", price: 40000, img: "./../../images/laptop.jpg"},
    // ]
    

  return(
    <div>
    <div className='banner'>
      <form className='w-50 d-flex '>
        <input type="text" className='form-control p-2 ' />
        <button type="button" onDoubleClick={() => calculate()} className="btn  btn-dark  "><FaSearch/></button>
      </form>
    </div>
    <div className='products container p-5'>
      <h4 className='h1'>hot offer</h4>

      <div className='row mt-5 g-4 '>

        {products.map((item) =>(
          <div key={item.id} className='col-md-4'>
          <Productcard data={item}/>
          </div>
        ))}
        
        
      </div>

    </div>
  </div>
  )

}
export default Home