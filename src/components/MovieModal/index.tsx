import React, { SetStateAction, useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { MovieTypes } from "../../types";
import { SetSelectedMovieContext } from "../Gallery";
import { API_KEY, BASE_VIDEO_URL } from "../../utils/api";
import { Slider } from "../Gallery/MovieGalleries/MovieCard/Slider";

type MovieModalProps = {
	movie: MovieTypes | null;
};

export const MovieModal = ({ movie }: MovieModalProps) => {
	const [video, setVideo] = useState<string | null>(null);

	const setSelectedMovie = useContext(
		SetSelectedMovieContext
	) as React.Dispatch<SetStateAction<MovieTypes | null>>;

	const handleClose = () => {
		setSelectedMovie(null);
	};

	useEffect(() => {
		ReactModal.setAppElement("#root");
		document.body.classList.add("overflow-hidden");
		let isMounted = true;
		if (movie)
			fetch(
				`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
			)
				.then((res) => res.json())
				.then((json) => {
					if (isMounted) {
						const videoObject =
							json.results.filter((video: any) => {
								return (video?.name as string).includes(
									"Trailer"
								);
							})[0] || null;
						if (!videoObject) setVideo(null);
						const trailer = `${BASE_VIDEO_URL}${videoObject.key}`;
						setVideo(trailer);
					}
				})
				.catch((e) => {
					console.warn(e);
				});

		return () => {
			document.body.classList.remove("overflow-hidden");
			isMounted = false;
		};
	}, []);

	return (
		<div>
			{movie && (
				<ReactModal
					isOpen={true}
					overlayClassName='flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.9)]'
					className={
						"p-4 bg-dark-50 h-[90%] w-[98%] rounded-lg overflow-y-auto"
					}
					preventScroll
					shouldCloseOnOverlayClick
					onRequestClose={handleClose}>
					<div className='relative md:px-8'>
						<div className='flex justify-between items-start'>
							<h1 className='font-bold text-3xl lg:text-5xl pt-2 lg:pt-6'>
								{movie.title}
							</h1>
							<CloseButton onClose={handleClose} />
						</div>
						<div className='flex flex-wrap py-6 gap-6 md:gap-16'>
							{video ? (
								<div className='w-full lg:max-w-[1080px] max-h-[720px]'>
									<iframe
										className='w-full aspect-video'
										// width="1080"
										// height="720"
										src={video}
										title='YouTube video player'
										allow='accelerometer; autoplay; encrypted-media;'
										allowFullScreen></iframe>
								</div>
							) : (
								"Movie trailer is not available"
							)}
							<div className='flex-1 border-t border-b py-6'>
								<p>{movie.overview}</p>
							</div>
						</div>
						<div className='flex-1 flex gap-4 flex-row flex-wrap justify-center items-stretch'>
							<div className='min-w-[340px] flex flex-col justify-center items-stretch'>
								<Slider rating={movie.vote_average} />
							</div>
							<button className='self-center w-32 h-12 rounded bg-red font-semibold text-xl tracking-wider'>
								VOTE
							</button>
						</div>
					</div>
				</ReactModal>
			)}
		</div>
	);
};

const CloseButton = ({ onClose }: { onClose: () => void }) => (
	<button
		onClick={onClose}
		// className='absolute rounded right-0 top-0 px-2 py-1 border border-transparent bg-transparent transition hover:border hover:border-white group hover:bg-dark-100'
		className='absolute right-0 inline-block rounded px-2 py-1 border border-transparent bg-transparent transition hover:border hover:border-white group hover:bg-dark-100'>
		<p className='leading-none font-semibold'>
			<span className='font-medium transition opacity-0 group-hover:opacity-100 translate-x-8 group-hover:translate-x-0 mr-1'>
				Close
			</span>{" "}
			X
		</p>
	</button>
);
