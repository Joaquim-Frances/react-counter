import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Basic tests from CounterApp', () => {
    
    test('Testin Basic CounterApp HTML Structure', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value } /> );

        expect(wrapper).toMatchSnapshot();

    })
    
    test('Testin CounterApp starting propas value of 100', () => {
        
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value } /> );

        const initialValue =  wrapper.find('h2').text().trim();
        expect(initialValue).toBe('100')

    })


})
