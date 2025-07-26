import { useState, useEffect } from "react";
import { FormDataRegister } from "../schemas/register.schema";

const STORAGE_KEY = "demoUserProfile";

export const useUserProfile = () => {
  const [userData, setUserData] = useState<FormDataRegister | null>(null);

  const fetchUserData = () => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUserData(JSON.parse(stored));
    } else {
      setUserData({
        name: "Capy",
        last_name: "Bank",
        email: "demo@capybank.com",
        birth_date: "1990-01-01",
        phone: "541112345678",
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateUserProfile = (data: FormDataRegister) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUserData(data);
  };

  return { userData, updateUserProfile };
};
