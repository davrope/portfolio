import React from 'react'
import tshirt from '../images/tshirt.jpg';
import abstraction2 from '../images/abstraction2.jpg'
import styled from 'styled-components'

const Hero = () => {
    return (
        <div style={{ alignItems:'center', height:'100vh', width:'100vw'}}>
            <div className='d-flex h-100 text-center text-white bg-dark' style={sectionStyle}>
                {/* <div  style= {{margin: 0, position:'relative', top:'5%'}}> */}
                <div  style= {{alignItems:'center'}}>
                
                    <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                        <main className='px-3'>
                            
                            <MyH1>Let's build an amazing future</MyH1>
                            <MyP className='lead'>Using science and technology to build smart solutions for people and industry. </MyP>

                        </main>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

var sectionStyle = {
    backgroundImage: `url(${abstraction2})`,
    backgroundSize: 'cover',
    alignItems:'center'

}

// var aligncenter = {
//     alignItems:'center'
// }

const MyH1 = styled.h1`
    font-size: 120px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    

    @media screen and (max-width:960px){
        font-size: 80px;
    }
`

const MyP = styled.p`
    font-size: 60px;
    /* font-family: fantasy; */
    

    @media screen and (max-width:960px){
        font-size: 40px;
    }
`
