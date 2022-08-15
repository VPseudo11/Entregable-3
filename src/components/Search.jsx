import React, { useState } from 'react'
import styled from 'styled-components'

const Search = ({ onSearchChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchChange(e.target.search.value)
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputSearch id='search' type="number" placeholder='Type a location Id (1 - 126)' />
            <ButtonSearch><i className="fa-solid fa-magnifying-glass"></i></ButtonSearch>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    height: 60px;
    background-color: rgba(38, 53, 75, 0.3);
`
const InputSearch = styled.input`
    width: 350px;
    height: 30px;
    border: 1px solid  rgba(38, 53, 75, 1);
    border-radius: 5px;
    background-color: rgba(38, 53, 75, 0.6);
    color: var(--color-14);
    text-align: center;
    font-size: .8rem;

    &::placeholder {
        color: var(--color-14);
        opacity: .9;
        font-size: .8rem;
    }
    &:focus::placeholder {
        opacity: 0;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
    }
`
const ButtonSearch = styled.button`
    width: 50px;
    height: 35px;
    font-size: 1.5rem;
    color: var(--color-14);
    background: none;
    border-radius: 5px;
    border: 1px solid rgba(38, 53, 75, 1);
    margin-left: 5px;

    &:hover {
        background: rgba(38, 53, 75, 1);
    }
`

export default Search