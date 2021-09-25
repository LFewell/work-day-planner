// Displays the current time and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, h:mm a"));

// Runs the local storage function when the save button is clicked
$(".saveBtn").on("click", storeData);
// Local storage function
function storeData() {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".col-md").val();
  localStorage.setItem(key, value);
}

// Grabs any locally stored data and displays it under the correct time
$("#9 > textarea").val(localStorage.getItem("9"));
$("#10 > textarea").val(localStorage.getItem("10"));
$("#11 > textarea").val(localStorage.getItem("11"));
$("#12 > textarea").val(localStorage.getItem("12"));
$("#13 > textarea").val(localStorage.getItem("13"));
$("#14 > textarea").val(localStorage.getItem("14"));
$("#15 > textarea").val(localStorage.getItem("15"));
$("#16 > textarea").val(localStorage.getItem("16"));
$("#17 > textarea").val(localStorage.getItem("17"));

// Function for adding and removing the css classes that change the color based on the current time
function setColor() {
  var currentTime = today.hours();

  for (var i = 0; i < $(".time-block").length; i++) {
    var targetId = $(".time-block")[i].id;
    var el = $(".time-block")[i];
    console.log(targetId);
    console.log(currentTime);

    if (targetId < currentTime) {
      el.classList.add("past");
    } else if (targetId == currentTime) {
      el.classList.remove("past");
      el.classList.remove("future");
      el.classList.add("present");
    } else {
      el.classList.add("future");
      el.classList.remove("past");
      el.classList.remove("present");
    }
  }
}
// Calls the function for color change
setColor();
