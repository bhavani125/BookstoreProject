import Enzyme,{ shallow} from 'enzyme'
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17'


import LoginIn from "../Components/Login/Login";

Enzyme.configure({ adapter: new Adapter() })

const shallowMountLogin = shallow(<LoginIn />);


describe('test loginpage is loading Successfully ', () => {

    it("test if loginpage  is laoded", () => {
		expect(shallowMountLogin.find('.LoginContainer').exists()).toBe(true);
	});

	it('test if email is loading', () => {
		expect(shallowMountLogin.find('#outlined-basic').exists()).toBe(true);
	});

	it('test if password is loading', () => {
		expect(shallowMountLogin.find('#outlined-basic').exists()).toBe(true);
	});

    it("test if loginpage  is laoded", () => {
		expect(shallowMountLogin.find('.LoginContainers').exists()).toBe(false);
	});

	it('test if email is loading', () => {
		expect(shallowMountLogin.find('.outlined-basic').exists()).toBe(false);
	});

	it('test if password is loading', () => {
		expect(shallowMountLogin.find('.outlined-basic').exists()).toBe(false);
	});


});

