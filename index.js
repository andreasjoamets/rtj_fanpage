/* Kui ma vajutan nuppu, ta kas näitab või ei näita seda menüüd */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Kui ma kuhugi lehe peale vajutan, siis ta paneb menüü kinni
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (!myDropdown.classList.contains('show')) {
      myDropdown.classList.add('show');
    }
  }
} // Antud javascripti lõik on võetud w3schools lehelt: https://www.w3schools.com/howto/howto_js_dropdown.asp