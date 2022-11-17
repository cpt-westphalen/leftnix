import { Header } from "../Header";
import { MovieGalleries } from "./MovieGalleries";

// Lista de filmes mora aqui.

import { POPULAR_API_URL } from "../../utils/api"; // Query do TMDB
import { fetchMoviesFromTmdbApi } from "../../utils/api";
import { useEffect, useState } from "react";
import { MovieTypes } from "../../types";

export const Gallery = () => {
	const [movieList, setMovieList] = useState<MovieTypes[]>([]);

	useEffect(() => {
		fetchMoviesFromTmdbApi(POPULAR_API_URL)
			.then((data) => {
				setMovieList(data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	return (
		<div className='bg-dark-50 min-h-screen flex flex-col'>
			<Header />
			<MovieGalleries movies={movieList} />
		</div>
	);
};
