import axios from "axios"

export const httpsService = ({ method = null, path = '', data = null, params = null, success = () => { }, error = () => { } }) => {
    const token = localStorage.getItem('accessToken')
    axios({
        baseURL: 'http://35.177.56.74:3002',
        url: path,
        method: method,
        data,
        params,
        headers: {
            Authorization: 'bearer ' + token
        }
    }).then(res => {
        success(res?.data)
    }).catch(e => {
        error(e)
    })

}
export const httpsService1 = ({ method = null, path = '', data = null, params = null, success = () => { }, error = () => { } }) => {
    // const token = localStorage.getItem('accessToken')
    axios({
        baseURL: 'http://35.177.56.74:3002/user/',
        url: path,
        data,
        method: method,
        params,
        // headers: {
        //     Authorization: 'bearer '+token
        // }
    }).then(res => {
        success(res?.data)
    }).catch(e => {
        error(e)
    })

}
