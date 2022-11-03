import { Header } from "../Header";

export const Gallery = () => {
	return (
		<div className='bg-dark-50 min-h-screen flex flex-col'>
			<Header />
			<MovieGalleries />
		</div>
	);
};
const MovieGalleries = () => {
	return <div></div>;
};
