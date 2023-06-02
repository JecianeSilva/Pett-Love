import PropTypes from 'prop-types';

import './styles.scss';

import Heart  from '../../assets/heart.png';

function ListPetsPair({ pet1, pet2 }) {
    return(
        <div className='pets-pair-container d-flex flex-column justify-content-center align-items-center'>
            <div className='pets-pair-photo d-flex position-relative mb-3'>
                <div className='rounder-circle'><img src={pet1.image} /></div>
                <div className='position-absolute h-100 w-100 d-flex align-items-center justify-content-center'><img src={Heart} /></div>
                <div className='rounder-circle'><img src={pet2.image} /></div>
            </div>
            <div className='pets-pair-name'>
                <p>{`${pet1.name} e ${pet2.name}`}</p>
            </div>
        </div>
    )
}

ListPetsPair.propTypes = {
    pet1 : PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }),
    pet2 : PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }),
}
export default ListPetsPair;