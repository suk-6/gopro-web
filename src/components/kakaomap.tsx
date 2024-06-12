"use client";

import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Slide, ToastContainer } from "react-toastify";
import { Road } from "./road";
import { DataModel } from "@/models/data";

import "react-toastify/dist/ReactToastify.min.css";

const KakaoMap = () => {
	const [map, setMap] = useState<kakao.maps.Map | null>(null);
	const [data, setData] = useState<DataModel | null>(null);

	useEffect(() => {
		if (!map) return;

		fetch(process.env.NEXT_PUBLIC_DATA_URL)
			.then((res) => res.json())
			.then((data) => {
				return setData(data);
			});
	}, [map]);

	return (
		<>
			<Map
				center={{ lat: 37.55930390626646, lng: 127.04323445018552 }}
				className=" w-full h-full"
				level={5}
				onCreate={(m) => {
					setMap(m);
				}}
			>
				<ToastContainer />
				{data && <Road points={data.points} />}
			</Map>
		</>
	);
};

export default KakaoMap;
