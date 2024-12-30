export default function ButtonSecondary({ children, href, onClick, ...rest }) {
	if (href) {
		return (
			<a href={href} className="text-white border border-white py-2 px-4 rounded-3xl flex items-center gap-2 whitespace-nowrap" {...rest}>
				{children}
			</a>
		)
	} else {
		return (
			<button onClick={onClick} className="text-white border border-white py-2 px-4 rounded-3xl flex items-center gap-2 whitespace-nowrap" {...rest}>
				{children}
			</button>
		)
	}
}
