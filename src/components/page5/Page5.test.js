import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page5 from './Page5';

configure({adapter: new Adapter()});

it('expect to render Page5 component', ()=>{
    expect(shallow(<Page5/>)).toMatchSnapshot();
})