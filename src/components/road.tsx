import { Point } from "@/models/data";
import { RoadSegment } from "./roadSegment";

interface RoadProps {
	points: Point[];
}

export const Road = ({ points }: RoadProps) => {
	const result: { [key: string]: any[] } = {};

	for (const point of points) {
		const video = point.video;
		if (!result[video]) result[video] = [];
		result[video].push(point);
	}

	return (
		<>
			{Object.keys(result).map((key) => {
				return (
					<RoadSegment key={key} points={result[key]} video={key} />
				);
			})}
		</>
	);
};
