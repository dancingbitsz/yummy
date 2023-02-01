import { useEffect, useState } from "react";
const useDebounce = (value, debounceTime = 2000) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setState(value);
    }, debounceTime);
    return () => clearTimeout(id);
  }, [value, debounceTime]);
  return state;
};

export default useDebounce;
