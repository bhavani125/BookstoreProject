import axios from 'axios'


// Add a request interceptor
axios.interceptors.request.use(function (config) {
   try{
    if (config.url.includes("cart")) {
        config.headers.token = localStorage.getItem("token")
    }
    else if (config.url.includes("edit")) {
        config.headers.token = localStorage.getItem("token")
    } else if (config.url.includes("add")) {
        config.headers.token = localStorage.getItem("token")
    } else if (config.url.includes("wishlist")) {
        config.headers.token = localStorage.getItem("token")
    }

    console.log(config)
    return config;
   }
   catch(error){
     console.log(error)
   }
});

axios.interceptors.response.use(function (response) {

    console.log(response)
    return response;

});