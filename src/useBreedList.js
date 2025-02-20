import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
            setStatus('unloaded');
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
            setStatus('loaded');
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('loading');
            try {
                const res = await fetch(
                    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
                );
                const json = await res.json();
                localCache[animal] = json.breeds || [];
                setBreedList(localCache[animal]);
                setStatus('loaded');
            } catch (error) {
                console.error("Failed to fetch breed list:", error);
                setStatus('error');
            }
        }
    }, [animal]);

    return [breedList, status];
}
