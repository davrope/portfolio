import React from 'react'
import tshirt from '../images/tshirt.jpg';
import productivityimg from '../images/productivity.jpg'
import logotang from '../images/logotang.png'
import mirrorsize from '../images/mirrorsize.PNG'
import reactlogo from '../images/logo192.png'
import javascript from '../images/javascript.png'
import node from '../images/node.png'
import mongo from '../images/mongodb.png'
import redux from '../images/redux.png'
import tflogo from '../images/tf.png'
import py from '../images/pylogo.png'


const Projects = () => {
    return (
        <div id ='projects'>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        {/* <h1 class="fw-light">Projects</h1> */}
                        <h1 className='display-5 fw-bold lh-1 mb-3'>Projects</h1>
                        <p className="lead text-muted">My learning method includes practicing by creating projects. Here is a collection of my software development projects.<br></br> My technology stack:.</p>
                    </div>
                    <div>
                        <img className='imglogos' src={reactlogo} alt="react logo" width="50px" height="50px"/>
                        <img className='imglogos' src={javascript} alt="javascript logo" width="50px" height="50px"/>
                        <img className='imglogos' src={node} alt="node logo" width="44px" height="50px"/>
                        <img className='imglogos' src={mongo} alt="mongodb logo" width="186px" height="50px"/>
                        <img className='imglogos' src={redux} alt="redux logo" width="52px" height="50px"/>
                        <img className='imglogos' src={py} alt="python logo" width="50px" height="50px"/>
                        <img className='imglogos' src={tflogo} alt="tensorflow logo" width="47px" height="50px"/>
                        

                    </div>
                </div>
            </section>


            <div className='album py-5 bg-light'>
                <div className='container'>

                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={mirrorsize} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Mirror Size</h5>
                                <p className="card-text" style = {{color:'black'}}>Front end created with react and the pose-detection API from Tensorflow. It helps you to decide which size of clothes would be the better fit considering the store database.</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div> */}
                                    <a href="https://davrope.github.io/MirrorSize/" className="btn" style={{background:'#27d594', color: 'white'}}>Live Demo</a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={productivityimg} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Productivity app</h5>
                                <p className="card-text" style = {{color:'black'}}>Track the time of your projects with a simple but effective productivity app that includes a to-do list.</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="https://projectsdav.herokuapp.com/" className="btn" style={{background:'#27d594', color: 'white'}}>Live Demo</a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={logotang} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Tangerine: a expenses tracker</h5>
                                <p className="card-text" style = {{color:'black'}}>Create budgets and track your expenses, you can download your transactions and visualize them on a dashboard</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="https://tangerine-app.herokuapp.com/" className="btn" style={{background:'#27d594', color: 'white'}}>Live Demo</a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Projects
