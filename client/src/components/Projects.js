import React from 'react'
import tshirt from '../images/tshirt.jpg';
import productivityimg from '../images/productivity.jpg'

const Projects = () => {
    return (
        <div id ='projects'>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        {/* <h1 class="fw-light">Projects</h1> */}
                        <h1 className='display-5 fw-bold lh-1 mb-3'>Projects</h1>
                        <p class="lead text-muted">Here is a collection of my software development projects, including Machine Learning integration.</p>
                        
                    </div>
                </div>
            </section>


            <div className='album py-5 bg-light'>
                <div className='container'>

                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={tshirt} className="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 className='card-title'>My Size</h5>
                                <p class="card-text" style = {{color:'black'}}>Front end created with react and the pose-detection API from Tensorflow. It helps you to decide which size of clothes would be the better fit considering the store database.</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    {/* <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div> */}
                                    <a href="#" className="btn btn-primary" style={{background:'#27d594'}}>Live Demo</a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={productivityimg} className="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 className='card-title'>Productivity app</h5>
                                <p class="card-text" style = {{color:'black'}}>Track the time of your projects with a simple but effective productivity app that includes a to-do list.</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    <a href="#" className="btn btn-primary" style={{background:'#27d594'}}>Live Demo</a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='card shadow-sm'>
                            <img src={tshirt} className="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 className='card-title'>Experiment</h5>
                                <p class="card-text" style = {{color:'black'}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    <a href="#" className="btn btn-primary" style={{background:'#27d594'}}>Live Demo</a>
                                    
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
