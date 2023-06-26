# Frontend-2-Contest-2-June
Project Overview
Task

    To fetch data from an api using .then and async await.
    The link for the GET api is https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
    This will return an array of 10 objects, each containing a name,id,image,symbol, current_price,total_volume
    Render all of them in the form of a table as given in the UI.
    Handle the promise using both methods, .then and using async await.
    Create a search button which allows the user to search and filter the data based on the input.
    Create a sort button which allows the user to sort the data based on market cap and percentage change.

Relevant Links:

Figma Link- https://www.figma.com/file/KakMh6wbYt0kgeUpp6HoPZ/Untitled?node-id=0%3A1&t=MOtLKh9GMDGIKHJw-1
Marking Scheme

    Fetch data from an API using .then and async/await (15 marks)
    Proper implementation of fetching data using .then
    Proper implementation of fetching data using async/await
    API endpoint and parameters (5 marks)
    Correct use of the provided API endpoint
    Proper inclusion of the required parameters in the API request
    Data structure and properties (10 marks)
    Proper handling and parsing of the API response
    Extraction and inclusion of the required properties (name, id, image, symbol, current_price, total_volume) from each object in the response array
    Rendering data in a table (20 marks)
    Creation of a table structure using HTML
    Proper inclusion of table headers
    Iterating over the data array and dynamically populating the table rows and cells with the retrieved data
    Handling promises using .then and async/await (10 marks)
    Proper implementation of handling promises using .then
    Proper implementation of handling promises using async/await
    Search functionality (20 marks)
    Proper implementation of the search functionality to filter the data based on user input
    Dynamic rendering of the filtered data in the table
    Sort buttons for market cap and percentage change (15 marks)
    Proper implementation of buttons to sort the data by market cap
    Proper implementation of buttons to sort the data by percentage change
    Deployment (5 marks)
