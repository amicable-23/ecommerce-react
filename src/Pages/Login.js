import React from 'react'

function Login() {

function handleSubmit(e){
  e.preventDefault()
  
  let form = new FormData(e.currentTarget)

  alert(form.get("username"))
  alert(form.get("password"))

}

  return (
    <div className="login container p-5">
      <form onSubmit={(e) =>handleSubmit(e)} className=" m-auto  ">
        
          <div className="row ">

            <div className="col-md-6">
              <label htmlFor="" className="form-label ">Username</label>
              <input name="username" type="text" className="form-control " />
            </div>

            <div className="col-md-6">
              <label htmlFor="" className="form-label ">Password</label>
              <input name="password" type="password" className="form-control " />
            </div>

          </div>
          
          <button className="btn btn-md btn-danger mt-4 w-25 ">Login</button>

       
      </form>

    </div>
  )
}

export default Login