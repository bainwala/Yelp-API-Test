import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer EcuYPOS7_xQztQoxid9f6H-eq3zJAyROEa-dNDH8yj_BPGYPQYo7mm6i7q1Cr2gIjT9B-TzTu7sfSc4Jj8tcgYTEFfJB8j2C-um9a2R5NM70TS1Qp24W7D7nZc_qX3Yx'
    }
})