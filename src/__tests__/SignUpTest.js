import Enzyme,{ shallow } from 'enzyme'
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17'

import SignUp from "../Components/SignUp/SignUp";

Enzyme.configure({ adapter: new Adapter() })

const shallowMountSignUp = shallow(<SignUp />);


describe('test SignUppage is loading Successfully ', () => {

    it("test if SignUppage  is laoded", () => {
		expect(shallowMountSignUp.find('.SignUpContainer').exists()).toBe(true);
	});

    it('test if fullName is loading', () => {
		expect(shallowMountSignUp.find('#outlined-basics').exists()).toBe(true);
	});

	it('test if email is loading', () => {
		expect(shallowMountSignUp.find('#outlined-basics').exists()).toBe(true);
	});

	it('test if password is loading', () => {
		expect(shallowMountSignUp.find('#outlined-basics').exists()).toBe(true);
	});

    it('test if MobileNumber is loading', () => {
		expect(shallowMountSignUp.find('#outlined-basics').exists()).toBe(true);
	});


});

