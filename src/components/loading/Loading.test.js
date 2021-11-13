import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Loading from './Loading.component';

configure({adapter: new Adapter()});

it('expect to render Loading component', ()=>{
    expect(shallow(<Loading/>)).toMatchSnapshot();
})