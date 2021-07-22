const fetch = require("node-fetch")
    
    
    const baseURL =  "https://superheroapi.com/api/1392066367839334"
    const accesstoken = 1392066367839334
    const getPhoto =  async function(id){
        response = await fetch(baseURL+`/${id}/image`)
        if (response.ok){
            const data = await response.json() 
            return data.url 
        }
    }

    module.exports = {getPhoto}
