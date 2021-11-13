import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Card from './Card';

configure({adapter: new Adapter()});

it('expect to render Card component', ()=>{
    expect(shallow(<Card data={{title: 'Test', subtitle: 'Test', price: 'Test', currency: 'Test'}}/>)).toMatchSnapshot();
})

