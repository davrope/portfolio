import React from 'react'
import tshirt from '../images/tshirt.jpg';
import abstraction1 from '../images/abstraction1.jpg'
import styled from 'styled-components'

const Hero = () => {
    return (
        <div style={{ alignItems:'center', height:'100vh', width:'100vw'}}>
            <body className='d-flex h-100 text-center text-white bg-dark' style={sectionStyle}>
                {/* <div  style= {{margin: 0, position:'relative', top:'5%'}}> */}
                <div  style= {{alignItems:'center'}}>
                
                    <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                        <main className='px-3'>
                            
                            <MyH1>Cover your page</MyH1>
                            <MyP className='lead'>Cover is a one MyPage template for building simple and beautiful home pages. </MyP>

                        </main>
                        
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Hero

var sectionStyle = {
    backgroundImage: `url(${abstraction1})`,
    backgroundSize: 'cover',
    alignItems:'center'

}

// var aligncenter = {
//     alignItems:'center'
// }

const MyH1 = styled.h1`
    font-size: 120px;
    font-family: fantasy;
    

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
