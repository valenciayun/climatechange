function make_plot(csv_data) {

    //setting up two traces of bar graphs
    let data = [{
        x: csv_data.map(d => d.Countries),
        y: csv_data.map(d => d.Urban),
        type: 'bar',
	      orientation: 'v',
        text: csv_data.map(d => d.Countries),
        // textposition: 'auto',
        opacity: 0.8,
        marker: {
          // color: 'rgb(158,202,225)'
          color: '#513d25'
        }
    }]


    //Graph design features
    var layout = {
        title: 'Urban Land Area, 2010',

        font: {
          family: 'Montserrat, sans-serif',
          size: 18,
          color: '#000000'
        },


        xaxis: {
          title: 'Country',
        },

        yaxis: {
          title: 'Urban land area (sq. km)',
        }

      };
      
    //Setting up interaction features
    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false
    };

    //Generating new plot
    Plotly.newPlot('urban-graph', data, layout, config);
}


//Defining .csv file being used and loading the data
Plotly.d3.csv("urban-land-area.csv", make_plot);