import { useState } from "react"
import Section from "../components/Section"

const FAQsData = [
	{
		title: "How do i book trip with your travel service?",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias nesciunt sed animi laboriosam, incidunt nam sapiente vel necessitatibus unde?",
	},
	{
		title: "What payment methods do you accept?",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias nesciunt sed animi laboriosam, incidunt nam sapiente vel necessitatibus unde?",
	},
	{
		title: "Are the tourist destinations only for the Indonesian region?",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias nesciunt sed animi laboriosam, incidunt nam sapiente vel necessitatibus unde?",
	},
	{
		title: "How can I cancel or reschedule my booking?",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias nesciunt sed animi laboriosam, incidunt nam sapiente vel necessitatibus unde?",
	},
	{
		title: "Are customers covered by insurance?",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias nesciunt sed animi laboriosam, incidunt nam sapiente vel necessitatibus unde?",
	},
]

export default function FAQs() {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<Section id={"faqs"} title={"FAQ"} subtitle={"Frequently Asked Questions"} description={"We believe in power of collective action to address the urgent environmental challenges facing our planet"} className={"lg:flex-row"}>
			<div className="flex flex-col mt-4 gap-3 lg:flex-1">
				{FAQsData.map((data, index) => (
					<div key={index} onClick={() => toggleFAQ(index)} className="border border-gray-600 p-3 flex flex-col rounded-2xl">
						<h5 className="font-medium text-lg">{data.title}</h5>
						<div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
							<p className="mt-2">{data.content}</p>
						</div>{" "}
					</div>
				))}
			</div>
		</Section>
	)
}
