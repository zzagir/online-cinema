'use client'

import { usePathname } from 'next/navigation'
import { FC } from 'react'
import cn from 'clsx'
import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const asPath = usePathname()
	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
