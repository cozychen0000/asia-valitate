import React from 'react'
import styles from './select.module.css'
import cn from "clsx";

type SelectProps = React.ComponentProps<'select'>
type OptionProps = React.ComponentProps<'option'>

export function Select({ children, className, ...props }: SelectProps) {
    return (
        <select {...props} className={cn(styles['select'], className)}>
            {children}
        </select>
    )
}

export function Option({ children, className, ...props }: OptionProps) {
    return (
      <option className={cn(styles["option"], className)} {...props}>
        {children}
      </option>
    );
  }

