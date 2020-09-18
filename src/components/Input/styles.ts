import styled, { css} from 'styled-components'
import Tolltip from '../Tooltip/index'
interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
        background: #232129;
        border-radius: 10px;


        border: 2px solid #232129;
        color: #666360;

        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        
        & + div {
            margin-top: 8px;
        }
        ${props=> props.isErrored && css`
            border-color: #C53030;
        `}

        ${props=> props.isFocused && css`
            color: #FF9000;
            border-color: #FF9000;
            background: transparent;
        `}

        ${props=> props.isFilled && css`
            color: #FF9000;
        `}

        

        input {
            flex: 1;
            border: 0;
            background: transparent !important;
            color: #F4EDE8;
            &::placeholder {
                color: #666360;
            }

            
        }

        svg {
            margin-right: 16px;
        }
`

export const Error = styled(Tolltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`