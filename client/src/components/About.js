import React from 'react';


const About = () => {
    return (
        <div id = 'about' style={{background: 'black', position: 'relative', display: 'flow-root'}}>
            <div className='d-flex justify-content-center'>
                <h2>Hi, there!</h2>
                
            </div>
            <div className= "d-flex justify-content-center" style={{alignItems:'center'}}>
                <h4>Welcome to my Website! My name is David.</h4>
            </div>

            <div >
                <p>
                    I'm passionate about technology and building solutions for people, that's why I do freelance web development services. 
                
                    I'm also a chemical engineer and my curiosity and love for math lead me to learn about Machine Learning.
                    So my solutions include fullstack applications that uses Machine Learning models.
                </p>

            </div>

        </div>
    )
}

export default About