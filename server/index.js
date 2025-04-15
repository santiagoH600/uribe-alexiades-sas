// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'infocorreos895@gmail.com',
    to: 'clemenciauribe@hotmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);

    res.status(200).json({
      success: true,
      message: '✅ Tu mensaje fue enviado con éxito. ¡Gracias por escribirnos!',
    });
  } catch (error) {
    console.error('❌ Error al enviar el correo:', error);
    res.status(500).json({
      success: false,
      alert: message: '❌ Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.',
      error: error.message,
    });
  }
});

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name:
})

// ✅ Aquí fuera del bloque del endpoint
app.listen(5000, () => {
  console.log(`Servidor corriendo en puerto 5000`);
});

