import Section from "./Section"

export default function About() {
    return (
		<Section id="about" title={"about us"} description={"We are passionate team of travel enthusiasts dedicated to making your travel dreams come true. Our mission is to provide you with best travel experiences"}>
			<div className="flex justify-between items-center pt-4">
				<div className="text-center">
					<h4 className="text-2xl">200+</h4>
					<p>Happy Customers</p>
				</div>
				<div className="text-center">
					<h4 className="text-2xl">70+</h4>
					<p>Top Hotels</p>
				</div>
				<div className="text-center">
					<h4 className="text-2xl">300+</h4>
					<p>Experienced Guide</p>
				</div>
			</div>
		</Section>
	)
}
