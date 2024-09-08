 import Pets from './Pets'

 const Results = ({ pets }) => {
    return (
        <div className='search'>
            {!pets.length === 0 ? (
                <h1>No Pets found</h1>
            ) : (
                pets.map((pet) =>(
                <Pets
                animal={pet.animal}
                name={pet.name}
                breed={pet.breed}
                images={pet.images}
                location={pet.location}
                key={pet.id}
                id={pet.id}

                
                />
                ))
            )}
            

        </div>
    )
 }

 export default Results;