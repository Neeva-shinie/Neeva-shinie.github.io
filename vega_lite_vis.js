var vg_1 = "map.json";
var vg_2 = "bubbleplot.json";
vegaEmbed("#choropleth_map", vg_1),("bar_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
