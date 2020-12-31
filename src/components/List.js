import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Store } from '../Store';
import Filter from './Filter';


const StyledContainer = styled.div`
        padding-top: 1.7rem;
        padding-bottom: 1.7rem;        
        background-color: ${props => props.theme.backgroundContent};
        color: ${props => props.theme.color};        
    `
const List = () => {
    const { state } = useContext(Store);
    useEffect(() => { }, [state.theme]);

    return (
        <StyledContainer className='container' theme={state.theme}>
            <Filter></Filter>
        </StyledContainer>
    )
}

export default List
