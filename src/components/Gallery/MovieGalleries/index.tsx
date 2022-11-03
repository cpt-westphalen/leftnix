import { MovieCard } from "./MovieCard";

import * as Mock from "../../../utils/mocks";

export const MovieGalleries = () => {
	return (
		<div className='flex flex-row overflow-x-auto gap-2'>
			<MovieCard movie={Mock.movie} />
			<MovieCard movie={Mock.movie} />
			<MovieCard movie={Mock.movie} />
		</div>
	);
};
