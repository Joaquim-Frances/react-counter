import { Fragment as div } from "react";
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo }) => {

    return (
        <div>
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </div>
    )

}

PrimeraApp.propTypes = {

    saludo: PropTypes.string.isRequired,

}

PrimeraApp.defaultProps = {
    saludo: 'Hola World...',
    subtitulo: 'Hola soy un subtitulo pequeñin.',
}

export default PrimeraApp;