import React from 'react'
import styled from 'styled-components'
import Video from '../videos/video.mp4'


const HeroSection = () => {
    return (
        <HeroContainer id= "home">
            <HeroBg>
            {/* <VideoBg autoPlay loop muted >  */}
                <VideoBg autoPlay loop muted style={{height:'auto',width:'100%'}}> 
                    <source src = {Video} type = 'video/mp4'></source>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <h1 >Welcome to my web developer portfolio!</h1>
                <p >
                    This is a portfolio text
                </p>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection


const HeroContainer = styled.body`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px;
    height: 800 px; */
    position: static;
    z-index: 1;
    height: 100%;
    width: 100%;

    @media screen {
     -o-object-fit   :cover ;
    }

`

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

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    /* position: static; */
    object-fit: cover;
    background: #232a34;
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: purple; */
    

`