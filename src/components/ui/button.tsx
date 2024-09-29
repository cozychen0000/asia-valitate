import React from 'react'
import cn from "clsx";
import styles from './button.module.css'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'validation' | 'remove' | 'add' | 'disabled' | 'default';
}

export function Button({ children, variant = 'default', className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(styles['button'], styles[variant], className)}>
      {children}
    </button>
  )
}
