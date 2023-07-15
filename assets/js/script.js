// Will load HTML and CSS first before running the JS
$(document).ready(function () {

      // Assigns the saveBtn click listener for user input
      // Get row id and saves it to local storage
      $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // Save text in local storage
        localStorage.setItem(time, text);
      });
});