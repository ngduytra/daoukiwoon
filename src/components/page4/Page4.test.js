import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page4 from './Page4';

configure({adapter: new Adapter()});

it('expect to render Page4 component', ()=>{
    expect(shallow(<Page4/>)).toMatchSnapshot();
})