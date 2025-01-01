import Section from "../components/Section"
import Card from "../components/Card"
import ButtonSecondary from "../components/ButtonSecondary"
import Label from "../components/Label"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { Pagination } from "swiper/modules"

const PackageData = [
	{
		title: "All-Inclusive Packages",
		description: "These include everything from flights to accomodation, meals, and activities",
		image: "src/assets/img/packages/honeymoon.png",
		duration: "5 days, 4 nights",
		link: "/all-inclusive",
	},
	{
		title: "Cultural Packages",
		description: "Focus on cultural experiences such as heritage tours and local performances",
		image: "src/assets/img/packages/tari-pendet.jpg",
		duration: "5 days, 4 nights",
		link: "/cultural",
	},
	{
		title: "Adventure Packages",
		description: "Tailored for thrill-seekers, offering activities like hiking, diving, or extreme sports",
		image: "src/assets/img/packages/diving.jpg",
		duration: "5 days, 4 nights",
		link: "/adventure",
	},
]

export default function Packages() {
	return (
		<Section id={"package"} title={"our package"} description={"Discover our exceptional selection of travel packages and destinations"} className="text-center">
			<div className="flex gap-3 overflow-x-auto mt-4 relative">
				<Swiper
					spaceBetween={20}
					slidesPerView="auto"
					loop={false}
					pagination={{
						clickable: true,
						el: ".swiper-pagination", // Ensure pagination element is correctly targeted
					}}
					modules={[Pagination]} // Add Pagination module
					className="relative"
				>
					{PackageData.map((data, index) => (
						<SwiperSlide key={index}>
							<Card
								title={data.title}
								description={data.description}
								image={data.image}
								label={<Label>{data.duration}</Label>}
								button={
									<ButtonSecondary href={data.link}>
										<p className="text-xs">Choose Package</p>
									</ButtonSecondary>
								}
								className={"justify-between"}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Pagination */}
				<div className="swiper-pagination"></div>
			</div>
		</Section>
	)
}
