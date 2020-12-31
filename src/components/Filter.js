import React, { useEffect, useContext } from 'react'
import styled from 'styled-components';
import { Store } from '../Store';

const StyledFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const StyledSearch = styled.input`
    padding: .5rem 1rem .5rem 2rem;
    box-shadow: none transparent inset !important

`
const Filter = () => {
    const { state } = useContext(Store);
    useEffect(() => { }, [state.theme]);

    return (
        <StyledFilter>
            <StyledSearch type='text'/>
            <select>
                <option>Whatever</option>
            </select>
        </StyledFilter>
    )
}

export default Filter
