// Assuming this is your existing JavaScript code
function displayForecast(data) {
    // Clear previous results
    document.getElementById("results").innerHTML = "";

    // Display forecast data
    var forecastTable = document.createElement("table");
    forecastTable.className = "table";

    // Create table header
    var headerRow = forecastTable.createTHead().insertRow(0);
    var headers = ["Timepoint", "Cloud Cover", "Seeing", "Transparency", "Precipitation Type"];
    headers.forEach(function(header) {
        var th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // Create table body
    var tbody = forecastTable.createTBody();
    data.forEach(function(entry) {
        var row = tbody.insertRow();
        row.insertCell(0).textContent = entry.timepoint;
        row.insertCell(1).textContent = entry.cloudcover;
        row.insertCell(2).textContent = entry.seeing;
        row.insertCell(3).textContent = entry.transparency;
        row.insertCell(4).textContent = entry.prec_type;
    });

    // Append table to results div
    document.getElementById("results").appendChild(forecastTable);
}

// New JSON data
var newData = [
    {
        "data": [
          {
            "timepoint": 3,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 4,
            "prec_type": "none"
          },
          {
            "timepoint": 6,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 5,
            "prec_type": "rain"
          },
          {
            "timepoint": 9,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 8,
            "prec_type": "rain"
          },
          {
            "timepoint": 12,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 8,
            "prec_type": "rain"
          },
          {
            "timepoint": 15,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 8,
            "prec_type": "rain"
          },
          {
            "timepoint": 18,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 8,
            "prec_type": "rain"
          },
          {
            "timepoint": 21,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 5,
            "prec_type": "none"
          },
          {
            "timepoint": 24,
            "cloudcover": 8,
            "seeing": 7,
            "transparency": 2,
            "prec_type": "none"
          },
          {
            "timepoint": 27,
            "cloudcover": 1,
            "seeing": 7,
            "transparency": 2,
            "prec_type": "none"
          },
          {
            "timepoint": 30,
            "cloudcover": 3,
            "seeing": 8,
            "transparency": 2,
            "prec_type": "none"
          },
          {
            "timepoint": 33,
            "cloudcover": 6,
            "seeing": 8,
            "transparency": 2,
            "prec_type": "none"
          },
          {
            "timepoint": 36,
            "cloudcover": 7,
            "seeing": 8,
            "transparency": 4,
            "prec_type": "none"
          },
          {
            "timepoint": 39,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 5,
            "prec_type": "none"
          },
          {
            "timepoint": 42,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 5,
            "prec_type": "none"
          },
          {
            "timepoint": 45,
            "cloudcover": 9,
            "seeing": 7,
            "transparency": 4,
            "prec_type": "none"
          },
          {
            "timepoint": 48,
            "cloudcover": 9,
            "seeing": 7,
            "transparency": 3,
            "prec_type": "none"
          },
          {
            "timepoint": 51,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 3,
            "prec_type": "rain"
          },
          {
            "timepoint": 54,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 3,
            "prec_type": "rain"
          },
          {
            "timepoint": 57,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 3,
            "prec_type": "none"
          },
          {
            "timepoint": 60,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 3,
            "prec_type": "none"
          },
          {
            "timepoint": 63,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 4,
            "prec_type": "none"
          },
          {
            "timepoint": 66,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 4,
            "prec_type": "none"
          },
          {
            "timepoint": 69,
            "cloudcover": 9,
            "seeing": 8,
            "transparency": 3,
            "prec_type": "none"
          },
          {
            "timepoint": 72,
            "cloudcover": 9,
            "seeing": 6,
            "transparency": 2,
            "prec_type": "none"
          }
        ]
      }
      
];

// Call the displayForecast function with the new JSON data
displayForecast(newData);
