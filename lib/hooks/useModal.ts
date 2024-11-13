import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, openModal, closeModal };
}
