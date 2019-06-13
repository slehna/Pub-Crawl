$(document).ready(function() {

$("#beer-search").on("click", function(event){
    event.preventDefault();

    const searchterm = $("#searched-term").text()
    const searchtype = $("#search-type").val()

    console.log(searchterm + searchtype);

})

});
// .get("/api/beer", function(data) {
//     console.log(data);
//     if (data.length !== 0) {
  
//       for (var i = 0; i < data.length; i++) {
  
//         var row = $("<tr>");
//         row.addClass("beer");
  
//         row.append("<td>" + data[i].beer_name + "</td>");
//         row.append("<td>" + data[i].name + "</td>");
//         row.append("<td> " + moment(data[i].created_at).format("h:mma on dddd") + "</td>");
  
//         $("#all-beerlist").append(row);
  
//       }
  
//     }
  
//   });
// });