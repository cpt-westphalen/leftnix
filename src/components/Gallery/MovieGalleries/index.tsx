import { MovieCard } from "./MovieCard";

import { MovieTypes } from "../../../types";

type MovieGalleriesProps = {
	movies: MovieTypes[];
};

export const MovieGalleries = ({ movies }: MovieGalleriesProps) => {
	return (
		<div className='flex flex-row overflow-x-auto'>
			{movies.map((movie) => (
				<MovieCard
					movie={movie}
					key={movie.title}
				/>
			))}
		</div>
	);
};
