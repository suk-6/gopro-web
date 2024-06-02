import { Point } from "@/models/data";
import { Polyline } from "react-kakao-maps-sdk";

interface RoadSegmentProps {
	points: Point[];
	video: string;
}

export const RoadSegment = ({ points, video }: RoadSegmentProps) => {
	const brightColors = [
		"#FF5733", // Vivid Red
		"#3498DB", // Bright Blue
		"#2ECC71", // Emerald Green
		"#9B59B6", // Amethyst Purple
		"#F1C40F", // Sunflower Yellow
		"#E67E22", // Carrot Orange
		"#1ABC9C", // Turquoise
		"#E74C3C", // Crimson Red
		"#8E44AD", // Wisteria Purple
		"#27AE60", // Nephritis Green
	];

	const randomIndex = Math.floor(Math.random() * brightColors.length);
	const randomColor = brightColors[randomIndex];

	const path = points.map((point: Point) => ({
		lat: point.lat,
		lng: point.lng,
	}));

	return (
		<Polyline
			path={path}
			strokeWeight={5}
			strokeColor={randomColor}
			strokeOpacity={0.8}
			onClick={() => {
				console.log(video);
			}}
		/>
	);
};
