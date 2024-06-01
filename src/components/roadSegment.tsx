import { Point } from "@/models/data";
import { Polyline } from "react-kakao-maps-sdk";

interface RoadSegmentProps {
	points: Point[];
	video: string;
}

export const RoadSegment = ({ points, video }: RoadSegmentProps) => {
	const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
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
