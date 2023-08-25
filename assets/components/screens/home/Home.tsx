import { FC } from 'react'
import styles from './Home.module.scss'
import { IHome } from './home.interface'
import Layout from '../../layout/Layout'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Heading
			title="Watch movies online"
			className="text-gray-300 mb-8 text-xl"
		/>
	)
}

export default Home
