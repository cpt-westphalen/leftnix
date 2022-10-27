import { BiSearch } from "react-icons/bi";

export const Search = () => {
	return (
		<div className='flex flex-row items-center gap-2 m-2'>
			<button onClick={() => console.log("Search clicked!")}>
				<BiSearch size={30} />
			</button>
			<input
				type='text'
				className='search-expanded'
			/>
		</div>
	);
};
