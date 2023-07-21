const express = require("express");
const { getNumberData } = require("./helper/getNumbarData");
const { isValidURL } = require("./helper/validUrl");
const mergeSortedArrays = require("./helper/mergeSortedArrays");

const app = express();

app.get("/numbers",async (req,res) => {
    
    const urlList = req.query.url;

    const numberArray = await Promise.all(urlList.map((value,index) => {
        return getNumberData(value)
    }))

    const mergedResult = mergeSortedArrays(numberArray)

    res.send(mergedResult)
})

app.listen(3000,() => {
    console.log("App listening at port 3000");
})