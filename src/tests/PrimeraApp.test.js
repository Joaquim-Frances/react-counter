import { getByText, render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';


describe('Pruebas en PrimeraApp', () => {
    
    test('Debe mostrar el titulo "Hola soy Krilin"', () => {
        
        const saludo = "Hola, soy Krilin!";

        const { getByText } = render( <PrimeraApp saludo={ saludo }/>);

        expect(getByText(saludo)).toBeInTheDocument();

    })
    
})
