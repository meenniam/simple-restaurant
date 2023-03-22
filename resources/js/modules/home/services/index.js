import axios from '../../../client/axios'

export const getRestaurants = async (search = "Bang sue") => {
    try {
        const res = await axios.get('/api/get-restaurants', { params: { search } });
        return res?.data?.data;
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getDetail = async (placeId) => {
    try {
        const res = await axios.get(`/api/place-detail/${placeId}`);
        return res?.data?.data;
    } catch (e) {
        throw new Error(e.message)
    }
}
