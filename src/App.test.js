import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import App from './App';

configure({adapter: new Adapter()});

let wrapper;

it('expect to render App component', ()=>{
    wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot();
})