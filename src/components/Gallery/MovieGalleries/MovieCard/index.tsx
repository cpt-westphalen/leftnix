import { MovieTypes } from "../../../../types";
import { BASE_IMG_URL } from "../../../../utils/api";

function useHeroTitle(title: string): [string | null, string] {
	const heroTitleIndex =
		title.indexOf(":") + 1 ||
		(title.toLowerCase().includes("harry potter and") ? 16 : 0);

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
		<div className='flex flex-col justify-start items-start p-3'>
			<img src={imgPath}></img>
			<h3 className='whitespace-pre'>
				<span className='text-red'>{superTitle}</span>
				{"\n"}
				{title}
			</h3>
			<p>{movie.overview}</p>
			<div>--slider--</div>
		</div>
	);
};
