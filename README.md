# CSV-JSON-HTTP-Poster

## Overview
CSV-JSON-HTTP-Poster is a simple script used to convert CSV data to JSON format and then post this data to a specified HTTP endpoint.
## Features
- **Convert CSV to JSON:** Easily convert CSV files into JSON format.
- **Post JSON Data:** Automatically post converted JSON data to a specified HTTP endpoint.
- **Error Logging:** Includes error logging to troubleshoot potential issues during the conversion or posting process.

## Installation
To use CSV-JSON-HTTP-Poster, you need Node.js and npm installed on your system. If you don't have Node.js and npm installed, download and install them from [Node.js website](https://nodejs.org/).

After installing Node.js and npm, clone this repository to your local machine:

```bash
git clone https://github.com/[your-username]/CSV-JSON-HTTP-Poster.git
cd CSV-JSON-HTTP-Poster
```

## Usage
Prepare Your CSV File: Place your CSV file in the project directory and modify the csvFilePath variable in the script to match your file's name.

Set the HTTP Endpoint: Change the URL variable to your desired HTTP endpoint where the JSON data will be posted.

Install the necessary dependencies:
```bash
npm install
```

## Run the Script: Usage

Prepare Your CSV File: Place your CSV file in the project directory and rename it to dataMag.csv, or modify the csvFilePath variable in the script to match your file's name.

Set the HTTP Endpoint: Change the url variable to your desired HTTP endpoint where the JSON data will be posted.

Run the Script: Execute the script using Node.js:

```bash
node [your-script-name].js
```

This will first convert the CSV data to JSON and save it in output.json, then post each entry to the specified HTTP endpoint.

## Check the Output:
The converted JSON data will be saved in output.json, and the responses from the HTTP endpoint will be logged in the console. Watch for any error messages in case of issues.

## Contributing
Contributions to CSV-JSON-HTTP-Poster are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request
