import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    span {
        width: 160px;
        background: #FF9000;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;

        position: absolute;
        bottom: calc(100% + 12px);
        color: #312e38;
        left: 50%;
        transform: translate(-50%);

        &::before {
            border-style: solid;
            border-color: #FF9000 transparent;
            border-width: 6px 6px 0px 6px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%);
            content: '';
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`