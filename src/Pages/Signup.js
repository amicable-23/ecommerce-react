import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <form className="container p-5  ">
        <div className="row ">
          <div className="col-md-6 ">
            <label htmlFor="" className="form-label ">Firstname</label>
            <input type="text" className="form-control " />
          </div>

          <div className="col-md-6 ">
            <label htmlFor="" className="form-label ">Lasttname</label>
            <input type="text" className="form-control " />
          </div>

          <div className="col-md-6 ">
            <label htmlFor="" className="form-label ">Email</label>
            <input type="text" className="form-control " />
          </div>

          <div className="col-md-6 ">
            <label htmlFor="" className="form-label ">Password</label>
            <input type="text" className="form-control " />
          </div>

          <button className="btn btn-md  ">Signup</button>
        </div>
      </form>

    </div>
  )
}

export default Signup