import React, { useContext } from "react";
import { SetSelectedMovieContext } from "../..";
import { MovieTypes } from "../../../../types";
import { BASE_IMG_URL } from "../../../../utils/api";
import { Slider } from "./Slider";

function useHeroTitle(title: string): [string | null, string] {
	const heroTitleIndex =
		(title.toLowerCase().includes("harry potter and") ? 16 : 0) ||
		title.indexOf(":") + 1;
	const superTitle = title.slice(0, heroTitleIndex).trim() || null;

	if (!!heroTitleIndex) {
		title = title.slice(heroTitleIndex).trim();
	}
	return [superTitle, title];
}

export const MovieCard = ({ movie }: { movie: MovieTypes }) => {
	const imgPath = `${BASE_IMG_URL}/w300${movie["poster_path"]}`;
	const [superTitle, title] = useHeroTitle(movie.title);

	const setSelectedMovie = useContext(SetSelectedMovieContext);

	function handleClick(event: React.MouseEvent) {
		if (setSelectedMovie) setSelectedMovie(movie);
	}

	return (
		<div
			onClick={handleClick}
			className='m-2 p-3 h-86 bg-dark flex flex-col justify-start items-center flex-shrink-0 flex-grow-0 basis-56 rounded-sm overflow-hidden hover:cursor-pointer transition hover:shadow hover:shadow-red'>
			<div className='w-full relative'>
				<img
					className='h-64 w-full object-cover object-top'
					src={imgPath}
				/>
				<div className='absolute top-[50%] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent' />
				<h3 className='whitespace-pre absolute bottom-0 left-0 right-0 p-1'>
					<span className='text-sm'>{superTitle}</span>
					{"\n"}
					<p className='text-2xl whitespace-normal'>{title}</p>
				</h3>
			</div>
			<div className='py-1 flex-1 flex justify-center items-end'>
				<Slider rating={movie.vote_average} />
			</div>
		</div>
	);
};
