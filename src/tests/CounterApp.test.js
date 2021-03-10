import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Basic tests from CounterApp', () => {

    let value;
    let wrapper;

    beforeEach( () => {
        
         value = 100;
         wrapper = shallow( <CounterApp value={ value } /> );

    })
    
    test('Testin Basic CounterApp HTML Structure', () => {
        
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Testing CounterApp starting props value of 100', () => {
        
        

        const initialValue =  wrapper.find('h2').text().trim();
        expect(initialValue).toBe('100')

    })

    test('Should increase the counter in 1 after click', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const initialValue =  wrapper.find('h2').text().trim();
        expect(initialValue).toBe('101');
    })

    test('Should substract 1 in the counter after click', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const initialValue =  wrapper.find('h2').text().trim();
        expect(initialValue).toBe('99');
    })

    test('Should reset the counter to default value after click', () => {
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const initialValue =  wrapper.find('h2').text().trim();
        expect(initialValue).toBe(value.toString());
    })
    

})
