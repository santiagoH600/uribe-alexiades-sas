import "./Hero.css";

const Hero = () => {
    return (
        <section id="Hero" className=" hero_content text-center py-20 bg-green-100">
            {/* Barras decorativas */}
            <div className="bar "></div>
            <div className="text-2xl sm:text-3xl md:text-4xl italic space-y-2 leading-snug tracking-widest">
                <p id="tittle" className=" tittle text-2xl font-semibold italic">
                S E R V I C I O S <br />
                </p>
                <p id="tittle1" className="tittle">
                <p className="font-normal">E S P E C I A L E S</p>
                <p className="font-normal">DE</p>
                </p>
                <p id="tittle2" className="tittle">
                    E N F E R M E R Í A
                </p>
                <p id="tittle3" className="tittle flex felx-col items-center md:flex-row md:justify-center md:gap-2">
                    <span>A</span> 
                    <span>D O M I C I L I O</span></p>
            </div>    
            <div className="bar"></div>
            <br />
            {/* Boton */}
            <button href="#about" className=" button-hero">
                MÁS SOBRE NOSOTROS
            </button>

        </section>
    )
}

export default Hero;