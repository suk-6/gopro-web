import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
	return (
		<>
			<Map
				center={{ lat: 37.55930390626646, lng: 127.04323445018552 }}
				className=" w-full h-full"
				level={5}
			></Map>
		</>
	);
};

export default KakaoMap;
