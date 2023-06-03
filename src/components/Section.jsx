import React from 'react'
import styled from 'styled-components'

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
            {console.log(backgroundImg)}
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                custom order
            </LeftButton>
            <RightButton>
                existing inventory
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
    
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`} ;
    display: flex;
    flex-direction: column; //alttakilerin farklı olma sebebi bu kısım
    justify-content: space-between; // vertical
    align-items: center; // horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`

`