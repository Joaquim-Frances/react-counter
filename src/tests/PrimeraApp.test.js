import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import { shallow } from 'Enzyme'


describe('Pruebas en PrimeraApp', () => {
    
    // test('Debe mostrar el titulo "Hola soy Krilin"', () => {
        
    //     const saludo = "Hola, soy Krilin!";

    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo='Hola caracola';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    })
    
    
})
