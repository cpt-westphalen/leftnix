import { Header } from "../Header";
import { MovieGalleries } from "./MovieGalleries";

// Lista de filmes mora aqui.

import { POPULAR_API_URL } from "../../utils/api"; // Query do TMDB
import { fetchMoviesFromTmdbApi } from "../../utils/api";
import { useEffect, useState } from "react";
import { MovieTypes } from "../../types";

export const Gallery = () => {
	const [movieLists, setMovieLists] = useState<MovieTypes[][]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const promises = POPULAR_API_URL.map((url) => {
			return fetchMoviesFromTmdbApi(url);
		});

		Promise.all(promises)
			.then((lists) => {
				setMovieLists((prevState) => {
					setLoading(false);
					return lists;
				});
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	return (
		<div className='bg-dark-50 min-h-screen flex flex-col'>
			<Header />
			{loading
				? "Loading..."
				: movieLists.map((movieList) => (
						<MovieGalleries
							movies={movieList}
							key={"list-" + movieList[0].title}
						/>
				  ))}
		</div>
	);
};
