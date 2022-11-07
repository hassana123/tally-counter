import { useState } from "react";


const useCustomHook = (key, initialVal) => {
  const [value, setValue] = useState("");

  return [value, setValue];
};

export default useCustomHook;
