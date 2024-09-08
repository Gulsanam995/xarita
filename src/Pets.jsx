import React from 'react'
import { Link } from 'react-router-dom';


const Pets = (props) => {
  const { animal, name, images, id, breed, location} = props;
  
  let hero = `https://pets-images.dev-apis.com/pets/none.jpg`
  console.log(images)
  if (images === undefined) {
} else {
  hero = images [0]
}
 
  return <Link to={`/details/${id}`} className='pet'>
    <div className='images-container'>
      <img src={hero} alt={name} />
    </div>
    <div className='info'>
      <h1>{name}</h1>
      <h2>{`${animal} - ${breed} - ${location}`}</h2>
    </div>
  </Link>
  
  
}

export default Pets
