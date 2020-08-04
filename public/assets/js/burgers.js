// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = {
            devoured: true
        }
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            id: id
        }).then(
            function () {
                console.log("Devoured Burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
