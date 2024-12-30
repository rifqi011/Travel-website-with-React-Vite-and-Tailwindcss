import HamburgerIcon from "./HamburgerIcon";

export default function Header() {
	return (
		<header className="top-0 left-0 w-full h-12 bg-transparent flex justify-between items-center px-[5%] relative">
			{/* logo */}
            <a href="">
                <h1 className="text-3xl text-white font-sourGummy">Wanderlust</h1>
            </a>

            {/* hamburger */}
            <HamburgerIcon />
        </header>
	)
}

