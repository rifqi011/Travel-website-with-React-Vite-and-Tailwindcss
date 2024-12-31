export default function Label({ children }) {
	return (
		<div>
			<p className="text-white border border-white backdrop-blur-md bg-white/10 py-1 px-4 rounded-3xl inline-block">{children}</p>
		</div>
	)
}
