import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Header from './Header';

configure({adapter: new Adapter()});

it('expect to render Header component', ()=>{
    expect(shallow(<Header/>)).toMatchSnapshot();
})