export interface DataModel {
	duration: number;
	length: number;
	points: Point[];
}

export interface Point {
	lat: number;
	lng: number;
	ele: number;
	time: Date;
	duration: number;
	speed: number;
	video: string;
}
