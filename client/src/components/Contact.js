import React, {useState} from 'react';


const Contact = () => {
   const [status, setStatus] = useState("Submit")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("Sending...");
        const {name, email, message} = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers:{
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }

    return (
        <div id = 'contact' style={{background: 'black', height:'100vh', width:'100vw'}}>
            <div  style= {{margin: 0, position:'relative', top:'35%'}}>
                <div className='d-flex justify-content-center'>
                    <h2>Contact</h2>
                </div>
                < div className='d-flex justify-content-center'>
                    <h4>Let's work together</h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center'>
                        <div className='form-group'>
                            <label htmlFor = "name" style={{color:'grey'}}>Name: </label>
                            <input type = 'text' className='form-control' id = 'name' aria-describedby="namehelp" placeholder="What's your name?" required/>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='form-group'>
                            <label htmlFor = "email" style={{color:'grey'}}>Email address</label>
                            <input type = 'email' className='form-control' id = 'email' aria-describedby="emailHelp" placeholder="Enter email" required/>
                            {/* <small id = "emailhelp" className=' form-text text-muted'>I'll never share your email</small> */}
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='form-group'>
                            <label htmlFor = "message" style={{color:'grey'}}>Describe your idea</label>
                            <input type = 'string' className='form-control' id = 'message' aria-describedby="message" placeholder="Your idea" required/>
                            
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-primary'>{status} </button>
                    </div>

                </form>
            </div>    

        </div>
    )
}

export default Contact
