import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
import axios from "axios"


function Details() {

const { id } = useParams()
const [detail, setDetail]=useState([null])

useEffect(() =>{
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((rat) =>setDetail(rat.data))
  .catch((err) => console.log(err))

},[])

  return (
    <div>
      <img src={detail?.image} alt="" />
      <h4>{detail?.title}</h4>
      <h4 >{detail?.price}</h4>
      <h4>{detail?.category}</h4>
      <h4>{detail?.description}</h4>
      <h4>{detail?.rating?.rate}</h4>
      
    </div>
  )
}

export default Details