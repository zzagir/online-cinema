import { FC } from 'react'
import { IButton } from './form.interface'
import cn from 'clsx'
import styles from './Form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return <button className={cn(styles.button, className)}>{children}</button>
}
export default Button
