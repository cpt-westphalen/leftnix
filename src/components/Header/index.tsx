import { Search } from "./Search";

export const Header = () => {
	return (
		<header className='bg-dark py-3 px-4 flex flex-row items-center justify-between max-w-full'>
			<span className='font-logo text-4xl font-bold tracking-wide text-red-neon'>
				LEFTNIX
			</span>
			<Search />
		</header>
	);
};
