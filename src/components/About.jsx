import "./About.css"

const About = () => {
    return (
        <section id="about" className="about">
            <p className="sub-about">Más de 45 años de experiencia cuidando a pacientes en sus residencias y lugares de tratamiento.</p>
            <br />
            <br />
            <br />
                <div className="container">    
                    <p className="title">Nos dirigimos a pacientes:</p>
                    <div className="bar-1"></div>
                        <ul className="patient-list">
                            <li>Postoperatorios inmediantos, hasta su recuperanción.</li>
                            <li>Enfermedades crónicas.</li>
                            <li>Acompañamiento y cuidados paliativos.</li>
                        </ul>
                </div>
        </section>
    );
};

export default About;