$jQuery(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input1 = parseInt($("input#input1").val());
    var result = numbers(input1);
    $("#result").text(result);
  });
});
var input1 = function(input1){
  if ((input1%3)===0){
    return "Ping";
  }

}
