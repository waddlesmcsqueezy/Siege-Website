var operatorFilePath = "assets/operators.json";
var recruitImagePath = "assets/recruit";
var attackersImagePath = "assets/Attackers";
var defendersImagePath = "assets/Defenders";

function load() {
  var request = new XMLHttpRequest();
  request.open("GET", operatorFilePath, false);
  request.send(null);
  var operators = JSON.parse(request.responseText);
  return operators;
}

var operators = load();

function getRandomOperatorNumber() {
  return Math.floor((Math.random() * operators.attackers.length) + 1);
}

function buttonAction(isAttacker) {
  if (isAttacker) {
    var randomOperator = getRandomOperatorNumber();
    document.getElementById("operator-image").src = attackersImagePath.concat("/" + operators.attackers[randomOperator-1].name.toLowerCase() + "/" + operators.attackers[randomOperator-1].name.toLowerCase() + ".png");
    document.getElementById("op-name").innerHTML = operators.attackers[randomOperator-1].name;
  } else {
    var randomOperator = getRandomOperatorNumber();
    document.getElementById("operator-image").src = defendersImagePath.concat("/" + operators.defenders[randomOperator-1].name.toLowerCase() + "/" + operators.defenders[randomOperator-1].name.toLowerCase() + ".png");
    document.getElementById("op-name").innerHTML = operators.defenders[randomOperator-1].name;
  }
}
