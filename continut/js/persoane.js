function incarcaPersoane() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      tabelPersoane(this);
    }
  };
  xhttp.open("GET", "/resurse/persoane.xml", true);
  xhttp.send();
}
function tabelPersoane(xml) {
  var table = document.getElementById("tabelPers");
  var xmlDoc = xml.responseXML;
  var x, y;
  var text = "";
  let newRow = table.insertRow(0);
  newRow.insertCell().innerHTML = "<strong>Nume</strong>";
  newRow.insertCell().innerHTML = "<strong>Prenume</strong>";
  newRow.insertCell().innerHTML = "<strong>Vârstă</strong>";
  newRow.insertCell().innerHTML = "<strong>Adresa</strong>";
  newRow.insertCell().innerHTML = "<strong>Facultate</strong>";
  newRow.insertCell().innerHTML = "<strong>Profil</strong>";
  newRow.insertCell().innerHTML = "<strong>An studiu</strong>";
  newRow.insertCell().innerHTML = "<strong>Job</strong>";
  x = xmlDoc.documentElement;
  y = x.childNodes;
  for (var i = 0; i < y.length; i++) {
    var row = table.insertRow();
    var rowTwo = table.insertRow();
    console.log(i);
    for (var j = 0; j < y[i].childNodes.length; j++) {
      // console.log(i);
      if (y[i].childNodes[j].nodeType == Node.ELEMENT_NODE) {
        text = xmlDoc.getElementsByTagName(y[i].childNodes[j].nodeName)[i - 1]
          .childNodes[0].nodeValue;
        row.insertCell().innerHTML = text;
        if (
          xmlDoc.getElementsByTagName(y[i].childNodes[j].nodeName)[i] != null
        ) {
          texttwo = xmlDoc.getElementsByTagName(y[i].childNodes[j].nodeName)[i]
            .childNodes[0].nodeValue;
          rowTwo.insertCell().innerHTML = texttwo;
        }
      }
    }
  }
}
