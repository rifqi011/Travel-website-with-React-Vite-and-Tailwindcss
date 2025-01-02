import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Form from "../components/Form"
import BaliImage from "./../assets/img/footer/bali.jpg"

const FooterMenu = [
	{
		title: "Company",
		links: ["About", "Blog", "Contact", "Career"],
	},
	{
		title: "Support",
		links: ["FAQ", "Support Center", "Security"],
	},
	{
		title: "More",
		links: ["Become Member", "Events", "Terms & Condition"],
	},
]

export default function Footer() {
    // get year
    const date = new Date()
    const year = date.getFullYear()

	return (
		<section id="footer" className="w-full flex flex-col text-white gap-4 pt-8">
			<div className="bg-center bg-cover flex flex-col justify-center items-center gap-8 h-[60svh] mx-[5%] rounded-2xl lg:h-[80vh]" style={{ backgroundImage: `url(${BaliImage})` }}>
				<h1 className="text-center text-4xl container md:text-6xl">Don't wait any longer! Start your adventure and explore new experiences today</h1>

				<Form>
					<input type="email" placeholder="Drop your email address" className="bg-transparent outline-none placeholder-white font-light flex-1 min-w-[200px] pl-3 md:min-w-[300px]" />
				</Form>
			</div>

			<footer className="w-full bg-black flex flex-col px-[5%] py-10 gap-8">
				<div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-32">
					{/* footer content */}
					<div className="flex flex-col gap-6 flex-1">
						<a href="">
							<h1 className="text-3xl text-white font-sourGummy">Wanderlust</h1>
						</a>

						<p>Experience personalized healthcare from the comfort of your home with our advanced telemedicine services.</p>

						{/* social media */}
						<div className="flex gap-4 text-xl">
							<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500">
								<FontAwesomeIcon icon={faWhatsapp} />
							</a>
						</div>
					</div>

					{/* footer menu */}
					<div className="flex flex-col gap-6 flex-1 md:flex-row md:justify-between">
						{FooterMenu.map((menu, index) => (
							<div key={index} className="flex flex-col gap-3">
								<h4 className="text-lg">{menu.title}</h4>
								<ul className="flex flex-col gap-2">
									{menu.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<a href="">{link}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<hr />

				<div className="">
					<p>&copy; Wanderlust, {year} All right reserved.</p>
				</div>
			</footer>
		</section>
	)
}
