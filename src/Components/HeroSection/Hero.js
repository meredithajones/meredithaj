import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, 
HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {
    const [hover, setHover] =useState(false) 

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id ="home">
            <HeroBg>
                <HeroContent>
                    <HeroH1>Hi! I'm Meredith, Developer & UX Designer</HeroH1>
                        <HeroP>
                          I create online spaces to help solve problems!  
                        </HeroP>
                        <HeroBtnWrapper></HeroBtnWrapper>
                        <Button to="signup" onMouseEnter= {onHover}
                        onMouseLeave= {onHover}> 
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    

                </HeroContent>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection