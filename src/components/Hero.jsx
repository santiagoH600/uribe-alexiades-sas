import "./Hero.css";

const Hero = () => {
    return (
        <section id="Hero" className="hero_content">
        {/* Barras decorativas */}
            <div className="bar"></div>

            <div className="sub_bar">
                <p id="tittle" className="tittle">S E R V I C I O S</p>

                <div id="tittle1" className="tittle">
                <span className="font-normal">E S P E C I A L E S</span>
                <span className="font-normal">DE</span>
                </div>

                <p id="tittle2" className="tittle">E N F E R M E R Í A</p>

                <div id="tittle3" className="tittle">
                <span>A</span>
                <span>D O M I C I L I O</span>
                </div>
            </div>

            <div className="bar"></div>
            <button href="#about" className="button-hero">
                MÁS SOBRE NOSOTROS
            </button>
        </section>
    )
}

export default Hero;