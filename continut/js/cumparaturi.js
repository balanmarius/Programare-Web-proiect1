function Produs(nume, cantitate) {
  this.nume = nume;
  this.cantitate = cantitate;
}
var i = 1;
function adaugaProdus() {
  var myWorker = new Worker("/js/worker.js");
  var n = document.getElementById("numeProdus").value;
  var c = document.getElementById("cantitate").value;
  var table = document.getElementById("lista");
  var newItem = new Produs(n, c);

  if (newItem.nume && newItem.cantitate) {
    localStorage.setItem(newItem.nume, newItem.cantitate);

    myWorker.onmessage = function (event) {
      let newRow = table.insertRow();
      let zeroCell = newRow.insertCell();
      zeroCell.innerHTML = i + ".";
      let firstCell = newRow.insertCell();
      firstCell.innerHTML = newItem.nume;
      let secondCell = newRow.insertCell();
      secondCell.innerHTML = newItem.cantitate;
      i++;
    };
  }

  myWorker.onerror = function (event) {
    console.error("Error!", event);
    var result = document.getElementById("divlista");
    result.innerHTML = "Error!";
  };

  myWorker.postMessage(null);
}
