import React, { useState, useEffect} from 'react'
import Results from './Results'
import useBreedList from './useBreedList';

const ANIMALS = ['dog', 'cat', 'parrot', 'donkey', 'bird'];


const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  

  useEffect(() => {
    requestPets()
  }, [])

  const requestPets = async () => {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const response = await res.json();
    setPets(response.pets);
  };
  return (
    <div className='search-params'>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets()
      }}>
        <label htmlFor='location'>
          Location 
          <input
          id='location' 
          type="text" 
          value={location}
          placeholder='Location'
          onChange={(e) => setLocation (e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
            {ANIMALS.map((animal) => (
            <option value={animal} key={animal.index}>
              {animal}
            </option>
            ))}
            
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select 
          id="breed" 
          value={breed} 
          onChange={(e) => setBreed(e.target.value)}
          disabled={breeds.length === 0}
          >

            {breeds.map((breed) => (
            <option value={breed}key={breed.index}>
              {breed}
              </option>
            ))}
            
          </select>
        </label>
        <button>Submit</button>
      </form>
      < Results pets={pets }/>
    </div>
  )
}

export default SearchParams;
