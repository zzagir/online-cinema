import { FC } from 'react'
import styles from './SearchList.module.scss'
import { IMovie } from '@/shared/types/movie.types'
import Link from 'next/link'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={getMovieUrl(movie.slug)} key={movie._id}>
						<Image
							src={movie.poster || ''}
							width={50}
							height={50}
							alt={movie.title}
							draggable={false}
							style={{
								width: '50px',
								height: '50px',
								objectFit: 'cover',
								objectPosition: 'top',
							}}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
