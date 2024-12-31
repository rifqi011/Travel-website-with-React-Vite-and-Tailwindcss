import Section from "./Section"

export default function About() {
	const AboutData = [
		{
			quantity: 2000,
			text: "Happy Customers",
		},
		{
			quantity: 70,
			text: "Top Hotels",
		},
		{
			quantity: 200,
			text: "Experienced Guide",
		},
	]

	return (
		<Section id="about" title={"about us"} description={"We are passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with best travel experiences"}>
			<div className="flex justify-between items-center pt-4">
				{AboutData.map((data, index) => (
					<div key={index} className="text-center">
						<h4 className="text-2xl">{data.quantity}+</h4>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</Section>
	)
}
