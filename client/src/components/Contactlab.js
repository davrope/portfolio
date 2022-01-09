import React from 'react'

const Contactlab = () => {
    return (
        <div id = 'contact' style={{background: 'black', height:'100vh', width:'100vw'}}>
            <div style= {{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div className='d-flex justify-content-center'>
                    <h2>Contact</h2>
                </div>
                < div className='d-flex justify-content-center'>
                    <h4>Let's work together</h4>
                </div>

                <form>
                    <div className='d-flex justify-content-center'>
                        <div className='form-group'>
                            <label for = "Name">Name</label>
                            <input type = 'string' className='form-control' id = 'name' aria-describedby="namehelp" placeholder="What's your name?"/>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='form-group'>
                            <label for = "inputEmail">Email address</label>
                            <input type = 'email' className='form-control' id = 'inputEmail' aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id = "emailhelp" className=' form-text text-muted'>I'll never share your email</small>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>

                </form>
            </div>    

        </div>
    )
}

export default Contactlab
