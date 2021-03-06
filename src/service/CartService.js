import axios from "axios";
import { Alert } from "../components/UI/Alert/Alert";
import { VAR_ENCODE_TOKEN } from "../utils/Routes";



/**The method is used to increment the quantity of cart */
const UpdateCartService = async (stateQuantity, _id) => {
    try {
        let data = [];
        const res = await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: stateQuantity
            }
        }, {
            headers: {
                authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
            }
        });
        if (res.status === 200) {
            data = [...res.data.cart];
            Alert("success", "Done!!!.");
        }

        return data;
    } catch (err) {
        Alert("error", "Something went wrong!! try again.");
        return [];
    }
}

export { UpdateCartService }