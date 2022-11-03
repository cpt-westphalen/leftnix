import { MovieCard } from "./MovieCard";

import * as Mock from "../../../utils/mocks";

export const MovieGalleries = () => {
	return (
		<div>
			<MovieCard movie={Mock.movie} />
		</div>
	);
};
