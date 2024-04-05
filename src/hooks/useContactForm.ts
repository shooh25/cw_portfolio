import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const sendEmail: SubmitHandler<Inputs> = (data) => {
    
    const templateParams = {
      personalName: data.personalName,
      companyName: data.companyName,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSubmitted(true);
        },
        (_error) => {
          alert("送信時にエラーが発生しました。もう一度お試しください。");
        }
      );
  };

  return {
    register,
    handleSubmit,
    sendEmail,
    isSubmitted,
    formState: { errors },
  };
};
