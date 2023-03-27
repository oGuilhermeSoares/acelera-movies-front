import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:9000'
})



client.get('/movies')
.then(res => {
    console.log(res.data)
})
.catch(error => {
    console.log(error)
})