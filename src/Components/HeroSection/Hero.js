import React from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, 
HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {
    return (
        <HeroContainer id ="home">
            <HeroBg>
                <HeroContent>
                    <HeroH1>Hi! I'm Meredith, Developer & UX Designer</HeroH1>
                        <HeroP>
                          I create online spaces to help solve problems!  
                        </HeroP>
                        <HeroBtnWrapper></HeroBtnWrapper>
                        <Button to="signup"> 
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    

                </HeroContent>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection