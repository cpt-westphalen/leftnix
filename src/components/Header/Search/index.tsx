import "./styles.css";
import { BiSearch } from "react-icons/bi";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../Gallery";

export const Search = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);
	const setSearch = useContext(SearchContext) as React.Dispatch<string>;

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		if (!event.target.value.trim()) {
			setIsExpanded(false);
			setSearch("");
		} else {
			setSearch(event.target.value.trim());
		}
	}

	function handleExpandToggle(event: React.MouseEvent<HTMLButtonElement>) {
		if (!isExpanded) {
			setIsExpanded(true);
			setTimeout(() => {
				searchRef.current?.focus();
			}, 100);
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key == "Enter") {
			event.preventDefault();
			if (event.currentTarget.value) {
				if (setSearch) setSearch(event.currentTarget.value);
				else
					console.error(
						"Something went wrong with the search component"
					);
			}
		}
	}

	return (
		<div className={`search-${isExpanded ? "expanded" : "collapsed"}`}>
			<button
				className=''
				tabIndex={0}
				onClick={handleExpandToggle}>
				<BiSearch size={24} />
			</button>
			{isExpanded && (
				<input
					ref={searchRef}
					type='text'
					className='bg-inherit w-full mx-1 outline-none'
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
				/>
			)}
		</div>
	);
};
