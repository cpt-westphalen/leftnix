export const Slider = ({ rating }: { rating: number }) => {
	const ratingAdjust = parseInt((rating * 10).toString().slice(1));

	const rate = rateText(ratingAdjust);

	return (
		<div className='flex flex-col justify-center items-center gap-1'>
			<input
				className='w-[90%]'
				type={"range"}
				readOnly
				min={0}
				max={10}
				value={ratingAdjust}
			/>
			<p className='font-bold tracking-wider'>{rate}</p>
		</div>
	);
};

const rateText = (rating: number) => {
	const rate = parseInt(rating.toPrecision(1));

	switch (rate) {
		case 0:
		case 1:
			return "EXTRA COMMIE";
		case 2:
			return "COMMUNIST";
		case 3:
			return "LIBERAL LEFTIST";
		case 4:
			return "LIBERAL";
		case 5:
			return "DISPUTED";
		case 6:
			return "OLDSCHOOL HOLLYWOOD";
		case 7:
			return "CONSERVATIVE";
		case 8:
			return "REACTIONARY";
		case 9:
			return "NEOLIBERAL";
		case 10:
			return "STRAIGHT UP FASCIST";
		default:
			return "Not enough votes yet!";
	}
};
