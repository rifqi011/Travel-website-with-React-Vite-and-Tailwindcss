import { ArrowDownIcon } from "@heroicons/react/16/solid"
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

				<ArrowDownIcon className="w-6" />
			</ButtonSecondary>
		</div>
	)
}
