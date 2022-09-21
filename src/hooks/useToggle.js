import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((state) => !state);
  };

  return [toggle, handleToggle];
};

export default useToggle;
