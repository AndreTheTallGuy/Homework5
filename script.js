$(document).ready(function() {
  var d = new Date();
  d.getHours();
  //   console.log(d.getHours());

  var event = $(".description");

  $.each($("*[data-value]"), function(index, element) {
    var test = $(element).attr("data-value");
    var arr = test.split(", ");
    console.log(arr);
    if (arr == d.getHours()) {
      this.classList.add("present");
    } else if (arr < d.getHours()) {
      this.classList.add("past");
    } else {
      this.classList.add("future");
    }
  });

  $("*[data-value]").each(function() {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-value")));
  });

  $("*[data-value]").on("keyup", function(itm) {
    localStorage.setItem("item-" + $(this).attr("data-value"), $(this).val());
  });
});
