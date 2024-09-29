import React from 'react'
import styles from './form.module.css'
import cn from "clsx";

type FormProps = React.ComponentProps<'form'>
type FormItemsProps = React.ComponentProps<'div'>
type FormControlProps = React.ComponentProps<'div'>
type FormLabelProps = React.ComponentProps<'label'>
type FormDescriptionProps = React.ComponentProps<'p'>
type FormMessageProps = React.ComponentProps<'p'>


export function Form({ children, className, ...props }: FormProps) {
  return (
    <form {...props} className={cn(styles['form'], className)}>
      {children}
    </form>
  )
}

export function FormItems({ children, className, ...props }: FormItemsProps) {
  return (
    <div {...props} className={cn(styles['form-items'], className)}>
      {children}
    </div>
  )
}

export function FormControl({ children, className, ...props }: FormControlProps) {
  return (
    <div {...props} className={cn(styles['form-control'], className)}>
      {children}
    </div>
  )
}

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label {...props} className={cn(styles['form-label'], className)}>
      {children}
    </label>
  )
}

export function FormDescription({ children, className, ...props }: FormDescriptionProps) {
  return (
    <p {...props} className={cn(styles['form-description'], className)}>
      {children}
    </p>
  )
}

export function FormMessage({ children, className, ...props }: FormMessageProps) {
  return (
    <p {...props} className={cn(styles['form-message'], className)}>
      {children}
    </p>
  )
}
