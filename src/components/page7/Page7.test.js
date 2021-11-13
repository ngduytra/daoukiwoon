import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Page7 from './Page7';

configure({adapter: new Adapter()});

it('expect to render Page7 component', ()=>{
    expect(shallow(<Page7/>)).toMatchSnapshot();
})