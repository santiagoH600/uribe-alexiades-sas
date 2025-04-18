import "./Location.css";

const Location = () => {
    return (
        <section id="Location" className="location">
            <div className="map-container">

                <div className="sub-title">
                    <h2 className=" title1">¿Quiénes somos?</h2>
                    <p className=" text-info">
                        Somos un equipo con más de 45 años de experiencia en el cuidado de pacientes en sus hogares y centros de tratamiento. Nuestro enfoque es ofrecer una atención personalizada, respetuosa y confiable, asegurando el bienestar y recuperación de cada persona. 
                    </p>
                </div>

                <div className="direccion">
                    <h2 className=" title1">Ubicación</h2>

                    <p>KRA 7 # 67 02 OF 701</p>
                </div>
                <iframe
                    title="Ubicacion de la empresa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6816181945183!2d-74.0582765!3d4.650755200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a4160a8e5cd%3A0x66773c69ba657153!2zQWsgNyAjNjctMiwgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744331431382!5m2!1ses!2sco"
                    width="800"
                    height="700"
                ></iframe>
                

            </div>
        </section>
    );
};

export default Location;