import Header from "../components/Header"
import HomeDetails from "../components/HomeDetails"
import HomeBackground from "./../assets/img/home-background.jpg"

export default function Home() {
    return (
        <section className="section bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center text-white" style={{ backgroundImage: `url(${HomeBackground})` }}>
            <Header />
            <h1 className="text-center text-4xl container">Begin your dream journey with our expert guidance and support</h1>
            <HomeDetails />
        </section>
    )
}
