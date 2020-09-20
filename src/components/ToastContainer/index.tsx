import React from 'react';
import { Container } from './styles';
import {useTransition} from 'react-spring'
import {ToastMessage, useToast} from '../../hooks/ToastContext'
import Toast from './Toast/index'
interface ToastContainerMessages {
    messages: ToastMessage[]
}
const ToastContainer: React.FC<ToastContainerMessages> = ({messages}) => {

    const messagesWidthTransictions = useTransition(messages, message => message.id, {
        from: { right: '-120%'},
        enter: {right: '0%'},
        leave: {right: '-120%'}
    })

    return (
        <Container>
            {messagesWidthTransictions.map(({item, key, props})=>{
                return <Toast key={key}
                    message={item}
                    style={props}
                />

            })}
        </Container>
    );
}

export default ToastContainer;