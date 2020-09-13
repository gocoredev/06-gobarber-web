import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.button`
    background: #FF9000;
    border-radius: 10px;
    border: 0;

    padding: 16px;
    width: 100%;
    height: 56px;
    font-weight: 500;
    margin-top: 16px;
    color: #312E38;
    transition: background 0.2s;
    &:hover {
        background: ${shade(0.2, '#FF9000')};
    }
`