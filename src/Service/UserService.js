import axios from "axios";


export const UserLoginIn = async (obj) => {
    // console.log("hii")
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', obj)
    return response
}
export const UserSignUp = async (obj) => {
    // console.log("hii")
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', obj)
    return response
}
