d3.csv('death-rates-from-disasters.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

       var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'Code'),
            z: unpack(rows, 'Deaths - Exposure to forces of nature - Sex: Both - Age: All Ages (Rate)'),
            text: unpack(rows, 'Entity'),
            // colorscale: 'YlOrRd',
            colorscale: [
                [0, '#3a2a19'], [0.2, '#6d4423'],
                [0.4, '#995c2e'], [0.6, '#cc8952'],
                [0.8, '#e8a47e'], [1, '#ffe1c5']
            ],
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: '#ba763e',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            zmax: 0.8,
            dtick: 1000,
            colorbar: {
                autotic: false,
                tickpsuffix: 'Annual number of deaths per 100,000 people',
                title: 'Death rate'
            }
      }];

      var layout = {
          title: 'Death Rate from Natural Disasters 2019<br>Source: <a href="https://ourworldindata.org/grapher/death-rates-from-disasters">Our World in Data</a>',
          font: {
            family: 'Montserrat, sans-serif',
            size: 18,
            color: '#000000'
          },
          geo:{
              showframe: false,
              showcoastlines: false,
              projection:{
                  type: 'mercator'
              }
          }
      };
      Plotly.newPlot("myDiv", data, layout, {showLink: false, responsive: true});
});


