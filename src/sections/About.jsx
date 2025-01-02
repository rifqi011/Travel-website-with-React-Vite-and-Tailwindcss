import Section from "../components/Section"

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
		{
			quantity: 10,
			text: "Years of Experience",
		},
	]

	return (
		<Section id="about" title={"about us"} className="md:flex-row gap-8 items-center" subtitle={"We are passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with best travel experiences"}>
			<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex-1">
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
