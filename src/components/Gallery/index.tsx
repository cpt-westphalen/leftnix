import { Header } from "../Header";
import { MovieGalleries } from "./MovieGalleries";

// Lista de filmes mora aqui.

import { POPULAR_API_URL } from "../../utils/api"; // Query do TMDB
import { fetchMoviesFromTmdbApi } from "../../utils/api";
import { createContext, useEffect, useMemo, useState } from "react";
import { MovieTypes } from "../../types";

export const SearchContext = createContext<React.Dispatch<
	React.SetStateAction<string>
> | null>(null);

export const Gallery = () => {
	const [movies, setMovies] = useState<MovieTypes[]>([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const promises = POPULAR_API_URL.map((url) => {
			return fetchMoviesFromTmdbApi(url);
		});

		Promise.all(promises)
			.then((lists) => {
				setMovies((prevState) => {
					// [ [ lista1 ], [ lista2 ], [ lista3 ] ]
					const singleList = [].concat(...lists);
					setLoading(false);
					return singleList;
				});
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const organizeGalleries = () => {
		const filteredMovies = search
			? movies.filter((movie) => {
					return movie.title
						.toLowerCase()
						.includes(search.toLowerCase());
			  })
			: movies;

		if (filteredMovies.length > 10) {
			let res = [];
			for (let i = 0; i < filteredMovies.length; i += 10) {
				const page = filteredMovies.slice(i, i + 10);
				res.push(page);
			}
			return res as MovieTypes[][];
		} else {
			return [filteredMovies];
		}
	};

	const movieGalleriesArray = useMemo(() => {
		const galleriesArray = organizeGalleries();
		return galleriesArray.map((list, index) => {
			return (
				<MovieGalleries
					movies={list}
					key={`gallery-${index}`}
				/>
			);
		});
	}, [movies, search]);

	return (
		<div className='bg-dark-50 min-h-screen flex flex-col'>
			<SearchContext.Provider value={setSearch}>
				<Header />
				<div className='shadow-inner shadow-red pt-3'>
					{loading ? "Loading..." : movieGalleriesArray}
				</div>
			</SearchContext.Provider>
		</div>
	);
};
