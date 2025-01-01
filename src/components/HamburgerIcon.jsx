export default function HamburgerIcon({ isOpen }) {
	return (
		<div className="flex flex-col space-y-2 justify-center items-center">
			<div className={`h-[2px] bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[.6rem] w-8" : "w-8"}`}></div>
			<div className={`h-[2px] bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`}></div>
			<div className={`h-[2px] bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[.6rem] w-8" : "w-4"}`}></div>
		</div>
	)
}
