import ButtonPrimary from "./ButtonPrimary";

export default function Form({ children }) {
    return (
		<form className="border border-white rounded-[2rem] p-2 backdrop-blur-md bg-white/10 flex">
			{children}

			<ButtonPrimary onClick={(e) => e.preventDefault()}>
				<p className="font-medium">Subscribe</p>
			</ButtonPrimary>
		</form>
	)
}
