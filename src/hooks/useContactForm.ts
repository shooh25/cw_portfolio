import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [emailStatusMessage, setEmailStatusMessage] = useState<string>("");
  const [isDisplayPopup, setIsDisplayPopup] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setEmailStatusMessage("メールが送信されました。返信をお待ち下さい。");
          setIsDisplayPopup(true);
        },
        (error) => {
          setEmailStatusMessage(
            "メール送信時にエラーが発生しました。お手数ですが再度送信してください。"
          );
          setIsDisplayPopup(true);
        }
      );

    setTimeout(() => {
      setIsDisplayPopup(false);
    }, 3000);
  };

  return { form, emailStatusMessage, sendEmail, isDisplayPopup };
};
