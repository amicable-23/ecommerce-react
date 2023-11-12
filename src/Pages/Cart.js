import React from 'react'
import { RiDeleteBin5Line} from "react-icons/ri"

function Cart() {
  return (
    <div className="cart">
        <div class="table-responsive container mt-4">
            <table class="table border ">
                <thead>
                    <tr className=' ' style={{borderBottom: "5px solid #000"}}>
                        <th scope="col">Image</th>
                        <th scope="col">Product Tittle</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td> <img src="./../../images/tennis-shoe.webp" alt="" /> </td>
                        <td>Shoe</td>
                        <td>#12000</td>
                        <td>1</td>
                        <td><RiDeleteBin5Line size={32}/></td>
                    </tr>
            

                    <tr class="">
                        <td> <img src="./../../images/bag.webp" alt="" /> </td>
                        <td>Bag</td>
                        <td>#7000</td>
                        <td>1</td>
                        <td><RiDeleteBin5Line size={32}/></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        <div className=' container '>
            <div class="">
              <div class="card-body">
                <h4 class="card-title">Subtotal: #19000</h4>
                <p class="card-text">taxes and shipping will calculate at checkout</p>
                <div className="my-5">
                <button className='btn btn-md btn-danger '>Continue Shopping</button>
                <button className="btn btn-md btn-danger mx-2 ">Proceed to Checkout</button>
                </div>
              </div>
            </div>

        </div>
        

    </div>
  )
}

export default Cart