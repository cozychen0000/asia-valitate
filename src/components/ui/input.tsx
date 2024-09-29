import React from 'react'
import cn from "clsx";
import styles from './input.module.css'
type InputProps = React.ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
    return (
        <input {...props} className={cn(styles['input'], className)} />
    )
}

