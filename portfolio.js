function side() {
      var sidebar = document.getElementById('sidebar');
      var check = document.getElementById('menus');
      if (check.checked) {
            sidebar.style.display = "block";
      } else {
            sidebar.style.display = "none";
      }
};
function setting() {
      var settings = document.getElementById('theme');
      var checkbox = document.getElementById('set');
      if (checkbox.checked) {
            settings.style.display = "block";
      } else {
            settings.style.display = "none";
      }
};
function red() {
      document.querySelector(':root').style.setProperty('--color', "red");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}
function green() {
      document.querySelector(':root').style.setProperty('--color', "chartreuse");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}
function yellow() {
      document.querySelector(':root').style.setProperty('--color', "yellow");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}

function sky() {
      document.querySelector(':root').style.setProperty('--color', "aqua");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}

function orange() {
      document.querySelector(':root').style.setProperty('--color', "orange");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}

function peach() {
      document.querySelector(':root').style.setProperty('--color', "pink");
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}

function video1()
{     
      document.querySelector('video').src="img/strings.mp4";
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}
function video2()
{     
      document.querySelector('video').src="img/video1.mp4";
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}
function video3()
{     
      document.querySelector('video').src="img/water.mp4";
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}
function video4()
{     
      document.querySelector('video').src="img/spectra.mp4";
      document.getElementById('theme').style.display = "none";
      document.getElementById("set").checked = false;
}