import "./About.css"

const About = () => {
    return (
        <section id="about" className="about">
            <p className="sub-about">Servicio fundado por su actual gerente, Clemencia Uribe de Alexiades, quien cuenta con más de 40 años de experiencia en el cuidado de pacientes en sus residencias y lugares de tratamiento.
            </p>
            <br />
            <br />
            <br />
                <div className="container">    
                    <p className="title">Nos dirigimos a pacientes:</p>
                    <div className="bar-1"></div>
                        <ul className="patient-list">
                            <li>Postoperatorios inmediatos, hasta su recuperanción.</li>
                            <li>Enfermedades crónicas.</li>
                            <li>Acompañamiento y cuidados paliativos.</li>
                        </ul>
                </div>
        </section>
    );
};

export default About;