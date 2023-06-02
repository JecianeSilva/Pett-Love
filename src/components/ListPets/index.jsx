import ListPetsPair from '../ListPetsPair';

import './styles.scss';
import { petsPar } from './pets';


function ListPets() {
    return(
        <div className='list-pets-container d-flex align-items-center flex-column gap-4'>
            <div className='d-flex row'>
                { petsPar &&  petsPar.map((item ) => (
                    <div className="col-xl-4 col-lg-6 col-md-10" key={item.id}>
                        <ListPetsPair  pet1={item.pet1} pet2={item.pet2}/>
                    </div>
                ))}
           </div>
        </div>
    )
}

export default ListPets;