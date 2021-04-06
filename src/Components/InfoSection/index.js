import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    TopLine, Heading, SubTitle, BtnWrap, Img, ImgWrap } from './InfoElements'

const InfoSection = () => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button to="home" >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                    
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection
