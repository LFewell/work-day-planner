var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Mo, h:mm a"));

$(".saveBtn").on("click", storeData);

function storeData() {
  var key = $(".col-md").parent().attr("id");
  var value = $(".col-md").val();
  localStorage.setItem(key, value);
}

$("#9").val(localStorage.getItem("9"));
