export default function Card({ title, description, image, label, button, className }) {
	return (
		<div className={`bg-cover bg-no-repeat bg-center rounded-xl h-80 text-white p-4 flex flex-col flex-shrink-0 w-full ${className}`} style={{ backgroundImage: `url(${image})` }}>
			{label && <div className="mb-2">{label}</div>}

			<div className="flex flex-col gap-2">
				<h4 className="text-2xl font-medium">{title}</h4>
				<p className="text-sm">{description}</p>

				{button && <div>{button}</div>}
			</div>
		</div>
	)
}
