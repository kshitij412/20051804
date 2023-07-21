const axios = require("axios")

async function getNumberData(str){

    try {
        const result = await axios.get(str);
        return result.data.numbers;   
    } catch (error) {
        console.log(error)
        return [];
    }
}

module.exports = {getNumberData}