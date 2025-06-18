import React from "react";

interface MovieCardProps {
	title: string;
	posterUrl?: string;
	year?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, year }) => {
	return (
		<div className="border rounded-lg overflow-hidden shadow-lg">
			{posterUrl && (
				<img src={posterUrl} alt={title} className="w-full h-48 object-cover" />
			)}
			<div className="p-4">
				<h3 className="font-bold text-lg">{title}</h3>
				{year && <p className="text-gray-600">{year}</p>}
			</div>
		</div>
	);
};

export default MovieCard;
