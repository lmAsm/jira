import {useEffect, useState} from "react";

const isFalsy = value => value === 0 ? false : !value;

export const cleanObject = object => {
    const result = { ...object };
    Object.keys(result).forEach(item => {
       if (isFalsy(result[item])) {
           delete result[item];
       }
    });
    return result;
};

export const useMount = (callback) => {
  useEffect(() => {
      callback();
  }, []);
};

export const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debounceValue;
};