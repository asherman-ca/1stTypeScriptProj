import { useEffect, useState } from 'react';

// the type is passed as an argument when this is called in App.tsx. See documentation for generics https://www.typescriptlang.org/docs/handbook/2/generics.html
export const useLocalStorage = <T>(
	key: string,
	initialValue: T | (() => T)
) => {
	// the type variable is passed into usestate to type the default value
	const [value, setValue] = useState<T>(() => {
		const jsonValue = localStorage.getItem(key);
		if (jsonValue == null) {
			if (typeof initialValue === 'function') {
				return (initialValue as () => T)();
			} else {
				return initialValue;
			}
		} else {
			return JSON.parse(jsonValue);
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue] as [T, typeof setValue];
};
