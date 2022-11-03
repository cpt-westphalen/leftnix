import { Header } from "../Header";
import { MovieGalleries } from "./MovieGalleries";

export const Gallery = () => {
	return (
		<div className='bg-dark-50 min-h-screen flex flex-col'>
			<Header />
			<MovieGalleries />
		</div>
	);
};
