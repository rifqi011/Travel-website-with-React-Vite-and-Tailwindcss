export default function Section({ children, id, title, description, ...rest }) {
	return (
		<section id={id} className="container py-8 flex flex-col space-y-2">
			<h2 className="uppercase text-blue text-lg font-medium"># {title}</h2>
			<p className="text-2xl font-light">{description}</p>
            {children}
		</section>
	)
}
