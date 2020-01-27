// import styled from 'styled-components'
import styled, { css } from 'styled-components'

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: ${props => props.debugging ? 'red' : 'none'};
`

export const ContentContainer = styled.div`
    position: relative;
    background-color: ${props => props.debugging ? 'blue' : 'none'};
    margin: 0px calc(10px + 1vw);
    
    // desktop
    @media (min-device-width: 1224px) {
        position: absolute;
        left: ${ props => props.offsetLeft};
        right: ${ props => props.offsetRight};
        height: 100vh;
        max-width: 350px;
        background-color: ${ props => props.debugging ? 'blue' : 'none'};
    }

`

export const LeftCol = styled(ContentContainer)`
    @media (min-device-width: 1224px) {
        right: 50%;
    }

    // desktop
    @media (min-device-width: 1224px) {
        ${props => props.unfocus && css`
            right: 70%;
            transition: color 0.5s ease;
        `};
    }


`

export const RightCol = styled(ContentContainer)`
    @media (min-device-width: 1224px) {
        left: 50%;
    }

    // desktop
    @media (min-device-width: 1224px) {
        ${props => props.unfocus && css`
            left: 35%;
            transition: color 0.5s ease;
        `};
    }
`


// ${props =>
//     props.unfocus &&
//     css`
//     background: palevioletred;
//     color: white;
// `};

export const SVGIconContainer = styled.div`
background: ${ props => props.debugger ? "red" : "none"};
display: flex;
flex-align: center;
justify-content: center;
`



export const TopicContainer = styled.div`
background: ${ props => props.debugger ? "red" : "none"};
margin: 10px 0px;
`