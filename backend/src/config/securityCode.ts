export const generateCode = () => {
    const length = 6;
    const otp = Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))
    );
    return otp.toString();
  };