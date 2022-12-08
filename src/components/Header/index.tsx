import { Search } from "./Search";

export const Header = () => {
	return (
		<header className='bg-dark mb-2 py-3 px-4 flex flex-row items-center justify-between max-w-full shadow-md shadow-red-neon'>
			<span className='font-logo text-4xl font-bold tracking-wide text-red-neon'>
				LEFTNIX
			</span>
			<Search />
		</header>
	);
};
