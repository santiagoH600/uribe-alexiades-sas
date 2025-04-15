import { useState } from "react";
import axios from 'axios';
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/send', formData);
            if (response.data.success) {
                alert("Mensaje enviado con éxito");
                setFormData({ name: "", subject: "", message: ""});
            }
        } catch (err) {
            console.error(err);
            alert('Hubo un error al enviar el mensaje');
        }
    };
    

    return (
        <section id="ContactForm" className="contact-form">
            <h2 className="title-form">Remítanos su mensaje</h2>
            <form onSubmit={handleSubmit} className="form-container1">
                <div className="form-container">
                <p>NOMBRE:</p><input
                    className="info-form"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                    <p>EMAIL:</p><input
                        className="info-form"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <p>MENSAJE:</p><textarea
                    className="info-form"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                 <button className="btn-enviar" type="submit" >
                    ENVIAR
                    <img src="/public/img/Sobre-carta.svg" alt="" width="50" />
                </button>
            </form>
           
            
        </section>
    );
};

export default ContactForm;