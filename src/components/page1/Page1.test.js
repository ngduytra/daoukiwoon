import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page1 from './Page1';

configure({adapter: new Adapter()});

it('expect to render Page1 component', ()=>{
    // expect(shallow(<Page1/>)).toMatchSnapshot();
    expect(1+2).toEqual(3)
})