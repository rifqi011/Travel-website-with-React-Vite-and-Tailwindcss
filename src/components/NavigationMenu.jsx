import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faInfoCircle, faBook, faSuitcase, faMapMarkerAlt, faBlog } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"

const Menu = [
	{ name: "Home", link: "/", icon: faHouse },
	{ name: "About us", link: "/about", icon: faInfoCircle },
	{ name: "Our services", link: "/services", icon: faBook },
	{ name: "Packages", link: "/packages", icon: faSuitcase },
	{ name: "Destinations", link: "/destination", icon: faMapMarkerAlt },
	{ name: "Blog", link: "/blog", icon: faBlog },
]

export default function NavigationMenu({ isOpen, closeMenu, menuRef }) {
	const location = useLocation()

	return (
		<div ref={menuRef} className={`fixed w-full max-w-[640px] mx-auto top-12 left-0 p-5 transition-all duration-500 ease-in-out ${isOpen ? "-translate-y-[0%]" : "-translate-y-[120%]"} sm:left-[50%] sm:translate-x-[-50%] lg:relative lg:-translate-y-0 lg:max-w-full lg:top-0 lg:p-0 lg:w-auto lg:m-0 lg:left-auto lg:translate-x-0`}>
			<div className="grid grid-cols-3 text-center bg-white/10 backdrop-blur-sm gap-y-4 gap-x-4 p-4 rounded-[2rem] lg:flex lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:justify-end">
				{Menu.map((menu, index) => {
					// active
                    const isActive = location.pathname === menu.link
                    
					return (
						<a key={index} href={menu.link} onClick={closeMenu} className="relative w-full h-24 flex flex-col items-center justify-center bg-white/25 rounded-2xl gap-3 group lg:bg-transparent lg:h-auto lg:w-auto lg:gap-0">
							<FontAwesomeIcon className="text-2xl lg:hidden" icon={menu.icon} />
							{menu.name}
                            <span className={`hidden absolute bottom-[-1px] rounded-full bg-white h-[2px] transition-all duration-200 ease-in group-hover:w-8 lg:block ${isActive ? "w-8" : "w-0"}`}></span>
						</a>
					)
				})}
			</div>
		</div>
	)
}
