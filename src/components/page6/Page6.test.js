import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page6 from './Page6';

configure({adapter: new Adapter()});

it('expect to render Page6 component', ()=>{
    expect(shallow(<Page6/>)).toMatchSnapshot();
})