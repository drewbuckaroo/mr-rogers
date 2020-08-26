//business logic
function talkRobo(input){
 let roboArray = [];
  for (let i=0; i <= input; i++) {
    if (i.toString().includes("3")) {
      roboArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      roboArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      roboArray.push("Beep!");
    } else {
        roboArray.push(i);
    }
  }
  return roboArray;
}

//UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let input = parseInt($("#number").val());
    let roboArray = talkRobo(input).toString();
    $("#result").text(roboArray);
    $("#result").show();
    $("#formOne").show();
  });
});

