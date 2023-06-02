import PropTypes from 'prop-types';

import  './styles.scss';

function CardImage({ image }) {
    return(
        <div  className="card-container position-relative">
            <img className="position-absolute w-100 h-100" src={image} alt="card-image" />
            <div className='position-absolute h-100 w-100 z-n1 mt-3 mx-3 card-background' />                       
        </div>    
    )
}

CardImage.propTypes = {
    image: PropTypes.string,
}

export default CardImage;