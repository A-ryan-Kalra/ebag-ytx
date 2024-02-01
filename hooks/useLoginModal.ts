import { atom, useAtom } from "jotai";

const check = atom(false);

const useLoginModal = () => {
  const [isOpen, setIsIpen] = useAtom(check);
  function loginOpen() {
    setIsIpen(true);
  }
  function loginClose() {
    setIsIpen(false);
  }
  return { isOpen, loginClose, loginOpen };
};

export default useLoginModal;
