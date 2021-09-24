
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, h:mm a"));

$(".saveBtn").on("click", storeData);

function storeData() {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".col-md").val();
  localStorage.setItem(key, value);
}

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));


function setColor() {

    var currentTime = today.hours();

    for (var i = 0; i < $(".time-block").length; i++) {
        
        var targetId = $(".time-block")[i].id;
        var el = $(".time-block")[i];
        console.log(targetId);
        console.log(currentTime);

        if (targetId < currentTime ) {
            el.classList.add("past");
        } else if (targetId == currentTime ) {
            el.classList.remove("past");
            el.classList.remove("future");
            el.classList.add("present");
        } else {
            el.classList.add("future");
            el.classList.remove("past")
            el.classList.remove("present")
        }
    }
}

setColor();