import { FC } from 'react'
import { IMovieList } from './movie-list.interface'

import styles from './MovieList.module.scss'
import MovieItem from './MovieItem'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem movie={movie} key={movie._id} />
			))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
