import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page2 from './Page2';

configure({adapter: new Adapter()});

it('expect to render Page2 component', ()=>{
    expect(shallow(<Page2/>)).toMatchSnapshot();
})