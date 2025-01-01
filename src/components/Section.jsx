export default function Section({ children, id, title, description, className, ...rest }) {
	return (
		<section id={id} className={`container py-8 flex flex-col gap-4 ${className}`}>
			<div className="flex flex-col gap-2 md:flex-1">
				<h2 className="uppercase text-blue text-lg font-medium"># {title}</h2>
                <p className={`text-2xl font-light ${id === "about" ? "md:text-3xl" : "md:text-4xl lg:text-5xl"}`}>{description}</p>
			</div>
			{children}
		</section>
	)
}
