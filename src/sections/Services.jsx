import Section from "./Section"

const ServiceData = [
	{
		title: "Comprehensive Travel Support",
		description: "24/7  customer service to assist you before, during and after your trip",
		image: "src/assets/img/services/rinjani.jpg",
	},
	{
		title: "Comprehensive Travel Support",
		description: "24/7  customer service to assist you before, during and after your trip",
		image: "src/assets/img/services/bali.webp",
	},
	{
		title: "Comprehensive Travel Support",
		description: "24/7  customer service to assist you before, during and after your trip",
		image: "src/assets/img/services/danau-toba.webp",
	},
]

export default function Services() {
	return (
		<Section id={"services"} title={"our services"} description={"Explore endless option with out services"}>
			<p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reiciendis?</p>
			<div className="flex flex-col gap-6">
				{ServiceData.map((service, index) => (
                    <div key={index} className="bg-cover bg-no-repeat bg-center rounded-xl h-80 text-white p-4 flex flex-col justify-end" style={{ backgroundImage: `url(${service.image})` }}>
                        <h4 className="text-2xl font-medium">{service.title}</h4>
                        <p className="text-sm">{service.description}</p>
                    </div>
				))}
			</div>
		</Section>
	)
}
