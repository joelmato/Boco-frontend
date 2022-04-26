import axios from 'axios'

const EDIT_USER_API_BASE_URL = 'http://localhost:8080/api/products/product/{productid}/edit';
const CATEGORIES_API_BASE_URL = 'http://localhost:8080/api/products/category';

export default {
    getCategories() {
        return axios.get(CATEGORIES_API_BASE_URL);
    },
    edit(productId, title, description, address, price, unlisted, availableFrom, availableTo, userId, category){
        const productToEdit = { productId: productId, title: title, description: description, address: address, price: price, unlisted: unlisted, availableFrom: availableFrom, availableTo: null, userId: userId, category: category };
        return axios.put(EDIT_USER_API_BASE_URL, productId, productToEdit);
    }
}