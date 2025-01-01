import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faInfoCircle, faBook, faSuitcase, faMapMarkerAlt, faBlog } from "@fortawesome/free-solid-svg-icons"

const Menu = [
	{ name: "Home", link: "/", icon: faHouse },
	{ name: "About us", link: "/about", icon: faInfoCircle },
	{ name: "Our services", link: "/services", icon: faBook },
	{ name: "Packages", link: "/packages", icon: faSuitcase },
	{ name: "Destinations", link: "/destination", icon: faMapMarkerAlt },
	{ name: "Blog", link: "/blog", icon: faBlog },
]

export default function NavigationMenu({isOpen, closeMenu, menuRef}) {
	return (
		<div ref={menuRef} className={`fixed w-full max-w-[600px] mx-auto top-12 left-0 p-5 transition-all duration-500 ease-in-out ${isOpen ? "-translate-y-[0%]" : "-translate-y-[120%]"}`}>
			<div className="grid grid-cols-3 text-center bg-white/10 backdrop-blur-sm gap-y-4 gap-x-4 p-4 rounded-[2rem]">
				{Menu.map((menu, index) => (
					<a key={index} href={menu.link} onClick={closeMenu} className="w-full h-24 flex flex-col items-center justify-center bg-white/25 rounded-2xl gap-3">
						<FontAwesomeIcon className="text-2xl" icon={menu.icon} />
						{menu.name}
					</a>
				))}
			</div>
		</div>
	)
}
