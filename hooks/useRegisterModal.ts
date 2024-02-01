import { atom, useAtom } from "jotai";

const check = atom(false);

const useRegisterModal = () => {
  const [isOpen, setIsIpen] = useAtom(check);
  function loginOpen() {
    setIsIpen(true);
  }
  function loginClose() {
    setIsIpen(false);
  }
  return { isOpen, loginClose, loginOpen };
};

export default useRegisterModal;
