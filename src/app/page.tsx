import dynamic from "next/dynamic";
const KakaoMap = dynamic(() => import("@/components/kakaomap"), { ssr: false });

export default function Home() {
	return (
		<main className=" w-screen h-screen">
			<KakaoMap />
		</main>
	);
}
