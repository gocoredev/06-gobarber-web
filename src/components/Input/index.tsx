import React, {InputHTMLAttributes, useEffect, useRef, useState, useCallback} from 'react'
import {IconBaseProps} from 'react-icons'
import { FiAlertCircle} from 'react-icons/fi'
import {useField} from '@unform/core'
import * as S from './styles'
import Tolltip from '../Tooltip/index'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

    const {fieldName, defaultValue, error, registerField} = useField(name)
    const [isFocused, setIsFocused] = useState(false) 
    const [isFilled, setIsFilled] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputFocus = useCallback(() =>  {
        setIsFocused(true);
    }, [])

    const handleInputBlur = useCallback(() =>  {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value)
    }, [])

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])


    return (
    <>
    <S.Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef} 
        defaultValue={defaultValue} 
        {...rest} />
        {error && <S.Error title={error}>
                <FiAlertCircle color="#c53030" size={20} />
            </S.Error>}
    </S.Container>
    
    </>)
}


export default Input;