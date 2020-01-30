
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
    $(ul).append(newBurger)

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        })
})

// $(document).on("click", ".eat-burger", (event) => {
//     // event.preventDefault()
//     console.log("click")
//     console.log($(this));
//     var value = $(this).attr("data-id")
//     console.log(value);
// })

$(document).on("click", ".delete-burger", (event) => {
    event.preventDefault()
    console.log("click")
    console.log($(this).attr("value"))
})
});