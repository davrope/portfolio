import React from 'react'
import tshirt from '../images/tshirt.jpg'
import cv2022 from '../images/cv2022.pdf'

// const AboutLab = () => {
//     return (
//         <div id = 'about' style={{background: 'black', position: 'relative', display:'flow-root', height:'100vh', width:'100vw'}}>
//             <Boxess>
//                 <Boxx>
//                     Hola jeje este es un texto muy largo que sirve de prueba para ver de qué se trata esto
//                 </Boxx> 
//                 <Boxx>
//                     <img src={tshirt}  alt="..."/>
//                 </Boxx>
//             </Boxess>
//         </div>
//     )
// }



// export const AboutLab = () => {
//     return (
//         <div id = 'about'style={{height:'100vh', width:'100vw'}}>

//             <myRow>
//                 <myCol>
//                     Esto es una prueba aún más grande para ver si el tamaño del texto importa a la hora de renderizar esto jeje
//                 </myCol>
//                 <myCol>
//                     <img src={tshirt} className="rounded mx-auto d-block"  alt="..."/>
//                 </myCol>
//             </myRow>
//         </div>
//     )
// }


// export default AboutLab


// const Boxess = styled.div`
//     display: grid;
//     grid-template-columns: 3fr 1 fr;
//     grid-auto-rows: 10px;
//     grid-gap: 5px;
    
    

//     @media screen and (max-width:570px){
//         grid-template-columns: 1fr;
//     }
// `

// const Boxx = styled.div`
//     padding:1em;
//     border: 1px solid black;
//     width: 50%;
//     height: 100%;

// `

// const myRow = styled.div`
//     display: 'flex';


// `

// const myCol = styled.div`
//     flex:50%;
    

//     @media screen and (max-width: 600px) {
//     width: 100%;
//     align-items: center;
//     justify-content: center;
// }

// `
// const myImg = styled.img`
//     height: 400px;
//     width: 600px;
    

//     @media screen and (max-width: 600px) {
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//     max-height: fit-content;
// }

// `


const About = () => {
    return (
        <div className='container col-xxl-8 px-4 py-5' id= 'about'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-10 col-sm-8 col-lg-6'>
                    <img src = {tshirt} className='d-block mx-lg-auto img-fluid' alt='...' style={{width:'700', height:'500'}}/>
                </div>

                <div className='col-lg-6'>
                    <h1 className='display-5 fw-bold lh-1 mb-3'>About me</h1>
                    <p className='lead' style={{color:'GrayText'}}>Hi, I'm David and I'm a chemical engineer and an self taught developer. My dream is to create scalable technologies that enables people to live and grow in a sustainable world.</p>
                    <div className='d-grip gap-2 d-md-flex justify-content-md-start'>
                        <a href={cv2022} download ="DavidRodriguezResume.pdf" className='btn btn-primary btn-lg px-4 me-md-2' style={{background:'#27d594'}}>Download my CV</a>
                        {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
