import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import { shallow } from 'Enzyme'


describe('Pruebas en PrimeraApp', () => {
    

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo='Hola caracola';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtítulo enviado por props', () => {
        
        const saludo='Hola caracola';
        const subtitulo = 'Hey soy el subtítulo más molón';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo ={ subtitulo }
            />
        );

        const textParrafo = wrapper.find('p').text();
        expect(textParrafo).toBe(subtitulo);
    })
    
})
