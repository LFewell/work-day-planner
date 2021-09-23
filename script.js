
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Mo, h:mm a"));

$(".saveBtn").on("click", storeData);

function storeData() {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".col-md").val();
  localStorage.setItem(key, value);
}

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));

function colorChange() {
    var currentTime = today.hours();
    var divTime = parseInt($(".time-block").attr("id"));
    console.log(divTime);
    console.log(currentTime);    
    if (divTime < currentTime) {
        $(".time-block").addClass("past");
        
    } else if (divTime === currentTime) {
        $(".time-block").removeClass("past");
         $(this).removeClass("future");
         $(this).addClass("present");
    }
}

colorChange();
