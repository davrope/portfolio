import React from 'react'
import tshirt from '../images/tshirt.jpg';
import productivityimg from '../images/productivity.jpg'


const Projects = () => {
    return (
        <div id = 'projects' style={{background: 'black', position: 'relative', display: 'flow-root'}}>
            <h2>
                Here you can see some of my web developer projects:
            </h2>

            <div className='row'>

                <div className='column'>
                    <div className='card'>
                    <img src={tshirt} alt="Jane" style={{width:100}}/>
                    <div className='container'>
                        <h2>My Size</h2>
                        <p className='description' style={{color:'white'}}>
                            Front end created with react and the pose-detection API from Tensorflow. It helps you to decide which size of clothes would be the better fit considering the store database
                        </p>
                        <p><button className='button'>Live Demo</button> </p>
                    </div>
                    
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                    <img src={productivityimg} alt="Jane" style={{width:100}}/>
                    <div className='container'>
                        <h2>Productivity app</h2>
                        <p className='description'>
                            Track the time of your projects with a simple but effective productivity app that includes a to-do list
                        </p>
                        <p><button className='button'>Live Demo</button> </p>
                    </div>
                     
                    </div>
                </div>

            </div>


            

            

        </div>
    )
}






export default Projects