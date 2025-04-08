import { get } from "env-var";
import fs from 'fs';

if (fs.existsSync('.env')) {
    process.loadEnvFile();
    console.log('.env exists')
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
