function draw(){
  var width = 1200,
    height = 600;

  var svg = d3.select(".chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  d3.[filetype]("file", function(error, data){
    var chart = svg.selectAll(" ")
      .data(data)
      .enter()
      .append(" ")
      .attr();

  })
}

$(document).ready(function(){
  draw();
})