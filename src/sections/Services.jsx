import Section from "../components/Section"
import Card from "../components/Card"

const ServiceData = [
	{
		title: "Comprehensive Travel Support",
		description: "24/7 customer service to assist you before, during and after your trip",
		image: "src/assets/img/services/rinjani.jpg",
	},
	{
		title: "Expert Travel Advice",
		description: "Tips and guide to enhance your travel experience",
		image: "src/assets/img/services/bali.webp",
	},
	{
		title: "Diverse Destinations",
		description: "Access to a wide range of domestic locations",
		image: "src/assets/img/services/danau-toba.webp",
	},
]

export default function Services() {
	return (
		<Section id={"services"} title={"our services"} description={"Explore endless option with our services"}>
			<p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis?</p>
			<div className="flex flex-col gap-3">
				{ServiceData.map((service, index) => (
					<Card key={index} title={service.title} description={service.description} image={service.image} className={"justify-end"} />
				))}
			</div>
		</Section>
	)
}
