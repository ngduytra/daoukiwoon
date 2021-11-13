import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page8 from './Page8';

configure({adapter: new Adapter()});

it('expect to render Page8 component', ()=>{
    expect(shallow(<Page8/>)).toMatchSnapshot();
})