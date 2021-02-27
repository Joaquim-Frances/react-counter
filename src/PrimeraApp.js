import { Fragment } from "react";



const PrimeraApp = ( {saludo = "Hola, soc en  Quim Francès."}) => {

    

    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p>Mi primera app</p>
        </Fragment>
    )

}
    



export default PrimeraApp;