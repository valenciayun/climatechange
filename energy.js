function make_plot(csv_data) {

    //setting up two traces of bar graphs
    let data = [{
        x: csv_data.map(d => d.Countries),
        y: csv_data.map(d => d.Energy),
        type: 'bar',
	      orientation: 'v',
        text: csv_data.map(d => d.Energy),
        // textposition: 'auto',
        opacity: 0.8,
        marker: {
          // color: 'rgb(158,202,225)'
          color: '#3a2a19'
        }
    }]

    //Graph design features
    var layout = {
        title: 'Energy Use Per Person, 2019',
        
        font: {
          family: 'Montserrat, sans-serif',
          size: 18,
          color: '#000000'
        },

        xaxis: {
          title: 'Country',
        },

        yaxis: {
          title: 'Energy per capita (kWh)',
        }
      };
      
    //Setting up interaction features
    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false
    };

    //Generating new plot
    Plotly.newPlot('myPlot', data, layout, config);
}


//Defining .csv file being used and loading the data
Plotly.d3.csv("energy-per-capita.csv", make_plot);