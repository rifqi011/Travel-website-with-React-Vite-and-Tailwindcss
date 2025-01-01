export default function ButtonSecondary({ children, href, onClick, className }) {
	if (href) {
		return (
            <a href={href} className={`text-white border border-white backdrop-blur-md bg-white/10 py-2 px-4 rounded-3xl items-center gap-2 self-auto whitespace-nowrap inline-flex ${className}`}>
				{children}
			</a>
		)
	} else {
		return (
			<button onClick={onClick} className={`text-white border border-white backdrop-blur-md bg-white/10 py-2 px-4 rounded-3xl flex items-center gap-2 self-auto whitespace-nowrap ${className}`}>
				{children}
			</button>
		)
	}
}
