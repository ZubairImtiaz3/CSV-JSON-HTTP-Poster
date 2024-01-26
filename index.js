const csv = require('csvtojson');
const fs = require('fs').promises;
const axios = require('axios');

// Declare file name & Post Url 
const csvFilePath ='dataMag.csv';
const url = 'https://httpbin.org/post';

async function convertCSVtoJSON() {
    try {
        const jsonArray = await csv().fromFile(csvFilePath);
        await fs.writeFile('output.json', JSON.stringify(jsonArray, null, 2));
        console.log('Conversion completed!, Check Output.json');
    } catch (error) {
        logError('An error occurred in convertCSVtoJSON:', error);
    }
}

async function sendJSONData() {
    try {
        const data = await fs.readFile('output.json', 'utf8');
        const jsonArray = JSON.parse(data);

        // Add IsPublished property to each object
        jsonArray.forEach(item => {
            item.IsPublished = false;
        });

        for (const item of jsonArray) {
            try {
                const response = await axios.post(url, item);
                console.log(`Data sent successfully: ${JSON.stringify(item)}`);
                console.log(`Server response: ${JSON.stringify(response.data)}`);
            } catch (error) {
                logError('An error occurred in sendJSONData:', error);
            }
        }
        console.log('All data sent successfully');
    } catch (error) {
        logError('An error occurred in sendJSONData:', error);
    }
}

function logError(message, error) {
    console.error(`${message} ${error}`);
}

convertCSVtoJSON();
sendJSONData();