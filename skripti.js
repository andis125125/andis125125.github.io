$(document).ready(function() {
  $("#click").click(function() {
    var thing = $("#selection").val();
    document.cookie = "thing=" + thing;
  });
});

$(document).ready(function() {
  $("#edit").submit(function(event) {
    event.preventDefault();
    $("#TODOlist").append("<li>" + $("#edit input[name = 'TODO']").val() +
      '<input class="check" type="checkbox" name="hello" value="yes">' +  "</li>")
  });
});

$(document).on('click', '.check', function(event) {
    alert("this works");
    $(this).parent().css('text-decoration', 'line-through');
});
