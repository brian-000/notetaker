// used to write to files
const fs = require("fs");
//used to create paths between files
const path = require("path");

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.title) {
        filteredResults = filteredResults.filter(animals => animals.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(animal => animal.text === query.text);
    }
    
    return filteredResults;
    
}




module.exports = {
    filterByQuery
};