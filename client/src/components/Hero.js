import React from 'react'
import tshirt from '../images/tshirt.jpg';
import styled from 'styled-components'

const Hero = () => {
    return (
        <div style={{ alignItems:'center', height:'100vh', width:'100vw'}}>
            <body className='d-flex h-100 text-center text-white bg-dark' style={sectionStyle}>
                
                <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                    <main className='px-3'>
                        
                        <h1>Cover your page</h1>
                        <p className='lead'>Cover is a one page template for building simple and beautiful home pages. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </main>
                    
                </div>
            </body>
        </div>
    )
}

export default Hero

var sectionStyle = {
    backgroundImage: `url(${tshirt})`,
    backgroundSize: 'cover'

}

const HeroBg = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    /* position: static; */
    object-fit: cover;
    background: #232a34;
`