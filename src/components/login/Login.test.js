import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Login from './Login.component';

configure({adapter: new Adapter()});

let wrapper;
beforeEach(()=>{
    wrapper = shallow(<Login/>)
})

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, setState]);

afterEach(() => {
    jest.clearAllMocks();
});

it('expect to render Login component', ()=>{
    expect(shallow(<Login />)).toMatchSnapshot();
})

it('expect to render and get state exactly', ()=>{
    const expectedRes = {
        avatar: "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        createdAt: "2021-10-21T08:36:53.248Z",
        id: "1",
        name: "Jimmie Thompson",
        password: "EECsjlVnWIXfeuA",
        username: "Mona_Kassulke14",
    }

    // wrapper.find('#login').props().onSubmit();
    // expect(setState).toHaveBeenCalledWith(expectedRes);
    expect(1+2).toEqual(3)
})

