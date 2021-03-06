import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import backGround from '../../Images/background.jpg'

export const HeroContainer =styled.div`
    background-image: url(${backGround});
    background-size: 105%;
    backface-visibility: 90%;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const HeroH1 = styled.h1`
    margin-top: 100px;
    margin-left: 140px;
    display: flex;
    border: 15px;
    border-radius: 15px 50px;
    border-style: solid;
    /* border-color: white; */
    background-color: rgba(106, 179, 188, 0.75);
    color: #00008B;
    font-size: 48px;
    padding: 40px;
    text-align: center;

    @media screen and(max-width: 768px){
        font-size: 32px;
    } 
`
export const HeroP = styled.p`
margin-top: 24px;
color: #00008B;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and(max-width: 768px){
        font-size: 24px;
}

@media screen and(max-width: 480px){
        font-size: 18px;
}
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

