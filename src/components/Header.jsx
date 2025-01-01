import { useEffect, useRef, useState } from "react"
import HamburgerIcon from "./HamburgerIcon"
import NavigationMenu from "./NavigationMenu"

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev)
    }
    
    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
				closeMenu()
			}
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [menuOpen])

	return (
		<header className="top-0 left-0 w-full h-12 bg-transparent flex justify-between items-center px-[5%] relative">
			{/* logo */}
			<a href="">
				<h1 className="text-3xl text-white font-sourGummy">Wanderlust</h1>
			</a>

			{/* Menu */}
			<NavigationMenu isOpen={menuOpen} closeMenu={closeMenu} menuRef={menuRef} />

			{/* hamburger */}
			<button onClick={toggleMenu} ref={buttonRef}>
				<HamburgerIcon isOpen={menuOpen} />
			</button>
		</header>
	)
}
