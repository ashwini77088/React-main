import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        re_enter: ""
    })

    const [nameErr, setNameErr] = useState()
    const [emailErr, setEmailErr] = useState()
    const [mobileErr, setMobileErr] = useState()
    const [passwordErr, setPasswordErr] = useState()
    const [repasswordErr, setRePasswordErr] = useState()

    const captureformvalues = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    
return <>
    <div className="container mt-5">
        <pre>{JSON.stringify(values)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-info">
                        <h1>Registration Form</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input type="text" name='name' className='form-control' placeholder='Name' onChange={captureformvalues} />
                                <span className='text-danger'></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name='email' className='form-control' placeholder='Email' onChange={captureformvalues} />
                            </div>
                            <div className="form-group">
                                <input type="number" name='mobile' className='form-control' placeholder='Mobile Number'onChange={captureformvalues} />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' className='form-control' placeholder='Password' onChange={captureformvalues}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name='re-enter' className='form-control' placeholder='Re-enter Password' onChange={captureformvalues}/>
                            </div>
                            <input type="button" value="Submit" className='btn btn-warning' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
}

export default RegistrationForm