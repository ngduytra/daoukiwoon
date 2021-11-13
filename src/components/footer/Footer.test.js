import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from './Footer';

configure({adapter: new Adapter()});

it('expect to render Card component', ()=>{
    expect(shallow(<Footer/>)).toMatchSnapshot();
})