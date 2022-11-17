import { MovieTypes } from "../../../../types";
import { BASE_IMG_URL } from "../../../../utils/api";

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

	return (
		<div className='p-3 max-h-96 bg-dark flex flex-col justify-start items-start flex-shrink-0 flex-grow-0 basis-52 rounded-sm overflow-hidden'>
			<img
				className='h-64 w-full object-cover object-top'
				src={imgPath}
			/>
			<h3 className='whitespace-pre'>
				<span className='text-sm'>{superTitle}</span>
				{"\n"}
				<p className='text-2xl whitespace-normal'>{title}</p>
			</h3>
			{/* <p>{movie.overview}</p> */}
			<div>--slider--</div>
		</div>
	);
};
