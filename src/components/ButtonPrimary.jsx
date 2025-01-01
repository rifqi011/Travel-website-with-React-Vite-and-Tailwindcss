export default function ButtonPrimary({ children, href, onClick, className }) {
	if (href) {
		return (
            <a href={href} className={`text-black bg-white py-2 px-4 rounded-3xl items-center gap-2 self-auto whitespace-nowrap inline-flex ${className}`}>
				{children}
			</a>
		)
	} else {
		return (
			<button onClick={onClick} className={`text-black bg-white py-2 px-4 rounded-3xl items-center gap-2 self-auto whitespace-nowrap inline-flex ${className}`}>
				{children}
			</button>
		)
	}
}
