import { useState, useEffect } from "react"
import Header from "../components/Header"
import HomeDetails from "../components/HomeDetails"

const HeroData = [
	{
		location: "Bali, Indonesia",
		images: "src/assets/img/hero/pantai-kelingking.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
	},
	{
		location: "Papua, Indonesia",
		images: "src/assets/img/hero/raja-ampat.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
	},
	{
		location: "Jawa Timur, Indonesia",
		images: "src/assets/img/hero/bromo-tengger-semeru.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
	},
]

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isFading, setIsFading] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFading(true) // Memulai animasi fade out
			setTimeout(() => {
				// Berpindah ke gambar berikutnya setelah fade out selesai
				setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length)
				setIsFading(false) // Mulai animasi fade in
			}, 1000) // Durasi fade out
		}, 7000) // Interval antar transisi gambar

		return () => clearInterval(interval) // Bersihkan interval saat komponen unmount
	}, [])

	return (
		<section className="relative section bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center text-white">
			<Header />
			{/* Container untuk gambar latar belakang */}
			<div className="absolute inset-0 -z-10 w-full h-screen">
				{HeroData.map((data, index) => (
					<div key={index} className={`h-svh absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`} style={{ backgroundImage: `url(${data.images})` }}></div>
				))}
			</div>
			<h1 className="text-center text-4xl container">Begin your dream journey with our expert guidance and support</h1>
			<HomeDetails location={HeroData[currentIndex].location} description={HeroData[currentIndex].description} />
		</section>
	)
}
