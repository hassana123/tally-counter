import { useState, useEffect } from "react";

function getSavedValue(key, initialVal) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialVal instanceof Function) return initialVal();

  return initialVal;
}

const useCustomHook = (key, initialVal) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};

export default useCustomHook;
