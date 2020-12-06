$(document).ready(function() {
    $('#burgerForm').on('submit', (event) => {
        event.preventDefault();

        const burgerName = $('#burger_name').val();

        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: {burger_name: burgerName}
        }).then(response => {
            location.reload();
        })
    })

    $(".devour-btn").on('click', function(event) {
        const devourBtn = $(this);
        const id = devourBtn.data("id");

        $.ajax({
            type: "PUT",
            url: "/api/burgers/" + id,
            data: {devoured: "true"}
        }).then(() => {
            location.reload();
        })
    })
})