import React, {createContext, useCallback, useContext, useState} from 'react';
import ToastContainer from '../components/ToastContainer/index'
import {uuid} from 'uuidv4'
interface ToastConextData {
    removeToast(id: string):void;
    addToast(message: Omit<ToastMessage, 'id'>):void;
}

export interface ToastMessage {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}
const ToastContext = createContext<ToastConextData>({} as ToastConextData)

const ToastProvider: React.FC = ({children}) => {

    const [messages, setMessages] = useState<ToastMessage[]>([])

    const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>)=>{
        const id = uuid();
        const toast = {
            id, 
            type, 
            title,
            description
        }
        setMessages(oldMessages => {
            return [...oldMessages, toast]
        })
    }, [])

    const removeToast = useCallback((id:string)=>{
        setMessages((state)=>{
            return state.filter(message => message.id !== id)
        })
    }, [])

    return (
        <ToastContext.Provider value={{addToast, removeToast}}>
            {children}
            <ToastContainer messages={messages}/>
        </ToastContext.Provider>
    )
}

function useToast() {
    const context = useContext(ToastContext)

    if (!context)
        throw new Error('UseToast mus be used within a ToastProvider')

    return context
}

export {
    ToastProvider, useToast, 
}