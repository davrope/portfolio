import React from 'react'
import tshirt from '../images/tshirt.webp'
import cv2022 from '../images/cv2022.pdf'


const About = () => {
    return (
        <div className='container col-xxl-8 px-4 py-5' id= 'about'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-10 col-sm-8 col-lg-6'>
                    <img src = {tshirt} className='d-block mx-lg-auto img-fluid' alt='...' style={{width:'700', height:'500'}}/>
                </div>

                <div className='col-lg-6'>
                    <h1 className='display-5 fw-bold lh-1 mb-3'>About me</h1>
                    <p className='lead' style={{color:'GrayText'}}>Hi, my name is David and I'm a Chemical engineer and an self taught developer. My dream is to create scalable technologies that enables people to live and grow in a sustainable world.
                        <br></br>
                        In order to make my dreams a reality I've been diving into Web Development with React and Machine Learning.
                    </p>
                    <div className='d-grip gap-2 d-md-flex justify-content-md-start'>
                        <a href={cv2022} download ="DavidRodriguezResume.pdf" className='btn  btn-lg px-4 me-md-2' style={{background:'#27d594', color:'white'}}>Download my CV</a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
