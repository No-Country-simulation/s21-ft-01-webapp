import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import { envs } from '../../../config/envs';

interface messageAttributes {
    name: string;
    email: string;
    token: string;
  }
dotenv.config();

const transporter = nodemailer.createTransport({
  host: envs.BREVO_SMTP_HOST,
  port: Number(envs.BREVO_SMTP_PORT),
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: envs.BREVO_USER, // Usuario de tu cuenta Brevo
    pass: envs.BREVO_API_KEY, // API Key de Brevo
  },
});

/* Crear y enviar mensaje de verificación al email del usuario */
export const sendOTPtoEmail = async ({
  name,
  email,
  token,
}: messageAttributes) => {
  try {
      const fromEmail = "capibank84@gmail.com";
      const info = await transporter.sendMail({
          from: fromEmail,
          to: email,
          subject: "Verificación de cuenta",
          html: `
          <html>
              <body>
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                      <h2>¡Hola ${name}!</h2>
                      <p>Gracias por registrarte. Para completar el proceso de registro, por favor ingresa el siguiente código de verificación:</p>
                      <div style="background-color: #f8f8f8; padding: 10px 15px; border: 1px solid #ddd; font-size: 18px; font-weight: bold; display: inline-block; margin-bottom: 20px;">
                          ${token}
                      </div>
                      <p>Este código es válido solo por 10 minutos. Si no solicitaste este registro, por favor ignora este correo.</p>
                      <p>¡Bienvenido!</p>
                      <footer style="margin-top: 20px; font-size: 12px; color: gray; text-align: center;">
                          <p>Saludos,<br>El equipo de Capibank</p>
                      </footer>
                  </div>
              </body>
          </html>
          `,
      });

      console.log("✅ Correo enviado con éxito:");
  } catch (error) {
      console.error("❌ Error al enviar el correo:", error);
  }
};