import { useEffect, useState } from "react";

export default function Toaster({ message, type, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  const color =
    type === "error"
      ? "bg-red-500"
      : type === "success"
      ? "bg-green-500"
      : "bg-blue-500";

  return (
    <div
      className={`${color} text-white fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg animate-slideIn`}
    >
      {message}
    </div>
  );
}
