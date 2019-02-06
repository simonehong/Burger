$(".devour").on("submit", function(event) {
  event.preventDefault();

  var burger_id = $(this)
    .children(".burger_id")
    .val();
  console.log("this is the id", burger_id);
  $.ajax("/burgers" + burger_id, {
    type: "DELETE"
  }).then(function() {
      console.log("deleted id" + burger_id);
    location.reload();
  });
});
