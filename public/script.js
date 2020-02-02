
console.log("loading")


$(function(){
$(document).on("click", "#submit", (event) =>{
    event.preventDefault()
    console.log("clicking")
    console.log($("#burger").val().trim())

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false
    };
    console.log(newBurger);
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        })
})

$(".eat-burger").on("click",  (event) => {
    // event.preventDefault()
    console.log("click")
    var value = $(this).attr("info")
    console.log(value);
})

$(document).on("click", ".delete-burger", (event) => {
    event.preventDefault()
    console.log("click")
    console.log($(this).attr("value"))
})
});