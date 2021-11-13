import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page3 from './Page3';

configure({adapter: new Adapter()});

it('expect to render Page3 component', ()=>{
    expect(shallow(<Page3/>)).toMatchSnapshot();
})