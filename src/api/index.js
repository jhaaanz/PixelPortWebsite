import axios from 'axios'

export const sendEmail = async (values) => {
    const res = await axios.post(`https://y9y1awo7t7.execute-api.ap-southeast-1.amazonaws.com/prod/contactus`, values)
    return res
}