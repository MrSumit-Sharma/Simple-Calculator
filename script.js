function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastChar() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function appendCharacter(character) {
    document.getElementById("result").value += character;
  }
  
  function calculate() {
    let result = document.getElementById("result").value;
    let answer = eval(result);
    document.getElementById("result").value = answer;
  }
  