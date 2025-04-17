import { get } from "env-var";
import fs from 'fs';
import dotenv from 'dotenv';

if (fs.existsSync('.env')) {
    dotenv.config();
    console.log('.env existsand variables are loaded');
} else {
    console.error('.env file does not exist');
}



export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PGDATABASE: get('PGDATABASE').required().asString(),
    PGUSER: get('PGUSER').required().asString(),
    PGPASSWORD: get('PGPASSWORD').required().asString(),
    PGHOST: get('PGHOST').required().asString(),
    PGPORT: get('PGPORT').required().asIntPositive(),
    JWT_SEED: get('JWT_SEED').required().asString(),
    BREVO_SMTP_PORT: get('BREVO_SMTP_PORT').required().asIntPositive(),
    BREVO_USER: get('BREVO_USER').required().asString(),
    BREVO_API_KEY: get('BREVO_API_KEY').required().asString(),
    BREVO_SMTP_HOST: get('BREVO_SMTP_HOST').required().asString()
}

console.log('🔍 Variables de entorno cargadas');
