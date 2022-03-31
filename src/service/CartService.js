import axios from "axios";
import { useCart } from "../context/CartContext";



/**The method is used to increment the quantity of cart */
const UpdateCartService = async (stateQuantity, _id) => {
    try {
        console.log(stateQuantity, _id);
        let data = [];
        await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: stateQuantity
            }
        }, {
            headers: {
                authorization: localStorage.getItem("feetz")
            }
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                console.log(res);
                data=  [...res.data.cart];
            }
        }).catch((error) => {
            console.log(error.message);
        });
        return data;
    } catch (err) {
        console.log("error ", err.message);
        return [];
    }
}

export { UpdateCartService }