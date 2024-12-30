import { ArrowDownIcon } from "@heroicons/react/16/solid"
import ButtonSecondary from "./ButtonSecondary"
import Label from "./Label"

export default function HomeDetails() {
	return (
		<div className="flex justify-between items-end w-full container py-4">
			<div className="flex flex-col space-y-2 max-w-[70%]">
				<Label>Bali, Indonesia</Label>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
			</div>
			<ButtonSecondary href={"#"}>
				<p>Explore more</p>

                <ArrowDownIcon className="w-6" />
            </ButtonSecondary>
		</div>
	)
}
