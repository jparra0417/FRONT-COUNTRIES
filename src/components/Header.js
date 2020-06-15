import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Store } from '../Store';
import { Dark } from "../consts/Dark";
import { Light } from "../consts/Light";

const StyledContainer = styled.div`
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.backgroundHeader};
        color: ${props => props.theme.color};
        
    `
const StyledTitle = styled.div`
        font-weight: bold;
        font-size:1.5rem;
    `
const StyledButton = styled.div`
        font-weight: 600;
        cursor:pointer;
        border: 0;
        background: none;
        font-size:1rem;        
    `

const Header = () => {
    const { state, dispatch } = useContext(Store);
    useEffect(() => { }, [state.theme]);

    const toggleTheme = () => {
        dispatch({ type: 'CHANGE_THEME', payload: state.theme.name !== 'light' ? Light : Dark })
    }
    return (
        <StyledContainer className='container' theme={state.theme}>
            <StyledTitle>Where in the world?</StyledTitle>
            <StyledButton onClick={() => toggleTheme()}>
                <i className='fa fa-moon-o'></i>&nbsp;&nbsp;Dark Mode
            </StyledButton>
        </StyledContainer>
    )
}


export default Header
