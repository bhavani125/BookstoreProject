import axios from "axios";


let configObjForBooks = {
    headers: {
        // "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
    },
}
export const GetBooks = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response
}
export const GetCartBooks = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items")
    return response
}

export const AddBooks = async (id) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, null)
    return response
}

export const InCrementBookItems = async (id, data) => {
    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`, data)
    return response
}
export const DeleteBooks = async (id) => {
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`)
    return response
}
export const CustomerDetailsEdit = async (obj) => {
    let response = await axios.put("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user", obj)
    return response

}
export const OrderedBookItems = async (obj) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order", obj)
    return response
}

export const AddBooksToWishlist = async (id) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, null)
    return response
}
export const GetWishlistBooks = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items")
    return response
}
export const DeleteWishlistBooks = async (id) => {
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`)
    return response
}

