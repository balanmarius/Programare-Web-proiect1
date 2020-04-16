function afisareDetalii() {
  if (this.document.getElementById("data") != null) {
    let currentdate = new Date();
    document.getElementById("data").innerHTML =
      "Data actuală " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      "  cu ora actuală: " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds() +
      ".";
    let currentBrowser = navigator.appName;
    document.getElementById("browser").innerHTML = currentBrowser;
    let versionBrowser = navigator.appVersion;
    document.getElementById("version_browser").innerHTML = versionBrowser;
    let URL = location.hostname;
    document.getElementById("URL").innerHTML = URL;
    let locationURL = window.location;
    document.getElementById("locationURL").innerHTML = locationURL;
    let os = navigator.platform;
    document.getElementById("os").innerHTML = os;
    let loc = navigator.geolocation.getCurrentPosition(coords);
  }
}
function coords(position) {
  document.getElementById("loc").innerHTML =
    "Latitudine: " +
    position.coords.latitude +
    "<br>Longitudine:  " +
    position.coords.longitude;
}

function loto() {
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let c4 = document.getElementById("c4").value;
  let c5 = document.getElementById("c5").value;
  let c6 = document.getElementById("c6").value;
  let c7 = document.getElementById("c7").value;
  let c8 = document.getElementById("c8").value;

  let count = 0;
  let text = "";
  let text2 = "";
  text = "Numerele câștigătoare sunt: ";
  for (let i = 0; i < 8; ++i) {
    let x = Math.floor(Math.random() * 0xff + 1);
    x = x.toString(16).toUpperCase();
    text += x + " ";
    if (
      x == c1 ||
      x == c2 ||
      x == c3 ||
      x == c4 ||
      x == c5 ||
      x == c6 ||
      x == c7 ||
      x == c8
    ) {
      count++;
    }
  }
  text += ".";
  text2 = "Ați nimerit " + count + " numere câștigătoare din cele extrase.";

  document.getElementById("loto").innerHTML = text;
  document.getElementById("loto2").innerHTML = text2;
}

var rectangle = 0;
function drawCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  if (rectangle == 0) {
    clx = event.clientX - c.offsetLeft;
    cly = event.clientY - c.offsetTop + window.scrollY;
    console.log(clx, cly);
    ctx.moveTo(clx, cly);
    rectangle++;
  } else {
    ulx = event.clientX - c.offsetLeft;
    uly = event.clientY - c.offsetTop + window.scrollY;
    console.log(ulx, uly);
    ctx.beginPath();
    ctx.moveTo(ulx, uly);
    ctx.rect(clx, cly, ulx - clx, uly - cly);
    ctx.lineWidth = "10";
    ctx.strokeStyle = document.getElementById("strokecolor").value;
    ctx.stroke();
    ctx.fillStyle = document.getElementById("fillcolor").value;
    ctx.fill();
    rectangle = 0;
  }
}

function addLine() {
  var table = document.getElementById("invatjs");
  let nr = parseInt(document.getElementById("nrcollin").value);
  let row = table.insertRow(nr);
  if (nr > 0) {
    for (
      let i = 0;
      i < document.getElementById("invatjs").rows[0].cells.length;
      ++i
    ) {
      let newcells = row.insertCell(i);
      newcells.innerHTML = "newrow" + i;
      newcells.style.background = document.getElementById("cellcolor").value;
    }
  } else {
    for (
      let i = 0;
      i < document.getElementById("invatjs").rows[1].cells.length;
      ++i
    ) {
      let newcells = row.insertCell(i);
      newcells.innerHTML = "newrow" + i;
      newcells.style.background = document.getElementById("cellcolor").value;
    }
  }
}
function addCol() {
  var table = document.getElementById("invatjs");
  let nr = document.getElementById("nrcollin").value;
  for (let i = 0; i < document.getElementById("invatjs").rows.length; ++i) {
    let row = document.getElementById("invatjs").rows[i];
    let newcell = row.insertCell(nr);
    newcell.innerHTML = "newcol" + i;
    newcell.style.background = document.getElementById("cellcolor").value;
  }
}

function twobytwo() {
  document.getElementById("aside").className = "twobytwo";
}
function onebyfour() {
  document.getElementById("aside").className = "onebyfour";
}
function fourbyone() {
  document.getElementById("aside").className = "fourbyone";
}

function schimbaContinut(resursa, jsFisier, jsFunctie) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
      if (jsFisier) {
        var elementScript = document.createElement("script");
        elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
    }
  };
  xhttp.open("GET", resursa + ".html", true);
  xhttp.send();
}

function validare() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      for (var i = 0; i < myObj.length; ++i) {
        if (
          myObj[i].utilizator ==
            document.getElementById("utilizatorjson").value &&
          myObj[i].parola == document.getElementById("parolajson").value
        ) {
          document.getElementById("validare").innerHTML =
            "Utilizator și parolă corecte!";
          return;
        } else {
          document.getElementById("validare").innerHTML =
            "Utilizator și/sau parolă incorecte!";
        }
      }
    }
  };
  xmlhttp.open("GET", "/resurse/utilizatori.json", true);
  xmlhttp.send();
  return false;
}

function loadForm() {
  var data = {};
  for (
    var i = 0;
    i <
    document.getElementById("inregistrare").getElementsByTagName("input")
      .length;
    ++i
  ) {
    var input = document
      .getElementById("inregistrare")
      .getElementsByTagName("input")[i];
    if (input.name) {
      data[input.name] = input.value;
    }
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/resurse/utilizatori.json");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(data));
  console.log(JSON.stringify(data));
}

// window.onload = function fixFooter() {
//   if (
//     window.innerHeight >
//     document.getElementById("header").offsetHeight +
//       document.getElementById("subheader").offsetHeight +
//       document.getElementById("continut").offsetHeight
//   ) {
//     document.getElementById("footer").className = "footer";
//   } else {
//     document.getElementById("footer").style.position = "relative";
//   }
// };
