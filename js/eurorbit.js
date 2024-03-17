var jsonData = {
    "product": "civillight",
    "init": "2024031706",
    "dataseries": [{
            "date": 20240317,
            "weather": "cloudy",
            "temp2m": {
                "max": 9,
                "min": 5
            },
            "wind10m_max": 2
        },
        {
            "date": 20240318,
            "weather": "pcloudy",
            "temp2m": {
                "max": 10,
                "min": 2
            },
            "wind10m_max": 2
        },
        {
            "date": 20240319,
            "weather": "clear",
            "temp2m": {
                "max": 11,
                "min": 2
            },
            "wind10m_max": 2
        },
        {
            "date": 20240320,
            "weather": "cloudy",
            "temp2m": {
                "max": 10,
                "min": 3
            },
            "wind10m_max": 3
        },
        {
            "date": 20240321,
            "weather": "lightsnow",
            "temp2m": {
                "max": 3,
                "min": -1
            },
            "wind10m_max": 3
        },
        {
            "date": 20240322,
            "weather": "lightsnow",
            "temp2m": {
                "max": 4,
                "min": -2
            },
            "wind10m_max": 3
        },
        {
            "date": 20240323,
            "weather": "lightsnow",
            "temp2m": {
                "max": 4,
                "min": -1
            },
            "wind10m_max": 2
        }
    ]
};

// Access and log the JSON data
console.log(jsonData.product); // Output: civillight
console.log(jsonData.init); // Output: 2024031706

jsonData.dataseries.forEach(function(data) {
    console.log("Date: " + data.date);
    console.log("Weather: " + data.weather);
    console.log("Max Temperature: " + data.temp2m.max);
    console.log("Min Temperature: " + data.temp2m.min);
    console.log("Max Wind Speed: " + data.wind10m_max);
});
