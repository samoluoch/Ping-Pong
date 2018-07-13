$jQuery(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numbers(number);
    $("#result").text(result);
  });
});
var number = function(number){
  if ((number%3)===0){
    return "Ping";
  }
  else if ((number%5)===0){
    return "Pong";
  }
  else if ((number%15)===0){
    return "Ping Pong";
  }
  else {
    return number;
  }
};
