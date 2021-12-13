import axios from "axios";
let configObjForBooks = {
    headers: {
        // "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),


    },
}
export const GetBooks = async () => {
    let response = await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book", configObjForBooks)
    return response
}
export const GetCartBooks = async () => {
    let response = await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items", configObjForBooks)
    return response
}

export const AddBooks = async (id) => {
    let response = await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/${id}`, null, configObjForBooks)
    return response
}

export const InCrementBookItems = async (id, data) => {
    let response = await axios.put(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${id}`,data, configObjForBooks)
    return response
}
export const DeleteBooks = async (id) => {
    let response = await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${id}`,configObjForBooks)
    return response
}
export const CustomerDetailsEdit = async (obj)=>{
    let response = await axios.put("https://new-bookstore-backend.herokuapp.com/bookstore_user/edit_user" ,obj,configObjForBooks)  
    return response

}
