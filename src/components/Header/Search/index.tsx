import "./styles.css";
import { BiSearch } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";

export const Search = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		if (!event.target.value.trim()) {
			setIsExpanded(false);
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

	return (
		<div className={`search-${isExpanded ? "expanded" : "collapsed"}`}>
			<button
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
				/>
			)}
		</div>
	);
};
