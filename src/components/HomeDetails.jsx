import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import ButtonSecondary from "./ButtonSecondary"
import Label from "./Label"

export default function HomeDetails({ location, description }) {
	return (
		<div className="flex justify-between items-end w-full container py-4">
			<div className="flex flex-col space-y-2 max-w-[70%]">
				<Label>{location}</Label>
				<p>{description}</p>
			</div>
			<ButtonSecondary href={"#about"}>
				<p>Explore more</p>

				<FontAwesomeIcon icon={faChevronDown} />
			</ButtonSecondary>
		</div>
	)
}
