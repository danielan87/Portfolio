  $(document).ready(function() {
    $("#main-navbar a").click(function() {
      $("#main-navbar li").removeClass("active");
      $(this).parent("li").addClass("active");
    });
    $("body").attr("id", "body");
  });