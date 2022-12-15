import React, { SetStateAction, useContext, useState } from "react";
import ReactModal from "react-modal";
import { MovieTypes } from "../../types";
import { SetSelectedMovieContext } from "../Gallery";

type MovieModalProps = {
	movie: MovieTypes;
};

const body = document.getElementsByClassName("root");

export const MovieModal = ({ movie }: MovieModalProps) => {
	const setSelectedMovie = useContext(
		SetSelectedMovieContext
	) as React.Dispatch<SetStateAction<MovieTypes | null>>;

	const handleClose = () => {
		setSelectedMovie(null);
	};

	return (
		<ReactModal
			isOpen={true}
			overlayClassName='absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.9)]'
			className={
				"w-full h-full flex flex-col justify-center items-center"
			}
			appElement={body}
			onRequestClose={handleClose}>
			<div className='p-4 bg-dark-50 h-[90%] w-[98%] rounded-lg'>
				<div className='relative'>
					<h1 className='font-bold text-3xl lg:text-5xl pt-2 lg:pt-6'>
						{movie.title}
					</h1>
					<CloseButton onClose={handleClose} />
				</div>
			</div>
		</ReactModal>
	);
};

const CloseButton = ({ onClose }: { onClose: () => void }) => (
	<button
		onClick={onClose}
		className='absolute rounded right-0 top-0 px-2 py-1 border border-transparent bg-transparent transition hover:border hover:border-white group hover:bg-dark-100'>
		<p className='leading-none font-semibold'>
			<span className='font-medium transition opacity-0 group-hover:opacity-100 translate-x-8 group-hover:translate-x-0 mr-1'>
				Close
			</span>{" "}
			X
		</p>
	</button>
);
