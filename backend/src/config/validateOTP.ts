import { OTP } from "../data/models/OTP.model";

type OTPError = "notFound" | "expired" | true;

/* Validar token OTP */
export const validateOTP = async (
  token: string,
  email: string
): Promise<OTPError> => {
  // Buscar token OTP en base de datos
  const OTPResult = await OTP.findOne({
    where: {
      token,
      userEmail: email,
    },
  });

  // Validar si existe token
  if (!OTPResult) {
    return "notFound";
  }

  // Validar si el token está expirado
  if (new Date() > OTPResult.dataValues.expiresAt) {
    return "expired";
  }

  return true;
};