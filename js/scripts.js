$(document).ready(function() {
  $("#btn").click(function() {
    var favecolor = $("input:radio[name=color]:checked").val();

    if (favecolor === "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (favecolor === "yellow") {
      document.body.style.backgroundColor = "yellow";

    } else if (favecolor === "red") {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "black";
    }



    event.preventDefault();
    });
  });