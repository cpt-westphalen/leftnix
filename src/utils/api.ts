//The Movies Database API Utils
import { API_KEY } from '../env';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p';

export const POPULAR_API_URL =
	`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=true&page=1&primary_release_date.gte=2000-01-01&vote_count.gte=10000&vote_average.gte=7&sort_by=popularity.desc`;

export async function fetchMoviesFromTmdbApi(url : string) {
	const data = await fetch(url)
		.then((res) => {
			if (res.ok) return res.json();
			else throw new Error('Bad API Response');
		})
		.then(({ results }) => {
			return results;
		})
		.catch((e) => {
			console.log('Data failed to load, error: ', e);
		});
	return data;
}