//responsive menubar
function respMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




//footer content
document.getElementById('footer').innerHTML = `

<div>  
    <footer class="footer">
      <p id="copyright" style="font-size: x-small; color:lightgray;"></p>
      <p style="font-size: x-small;">Last Updated on 18/07/2021</p>
      <i class="fab fa-html5 circle-icon" style="color: white; font-size:30px;"></i>
      <i class="fab fa-css3-alt circle-icon" style="color: white; font-size:30px;"></i>
      <i class="fab fa-js circle-icon" style="color: white; font-size:30px;"></i>
      <p style="font-size: x-small;">This website is created for educational purpose and to collate maximum information about North Paravur in a single place.<br>All images are copyright to their respective owners.<br><br>reach me: contact@northparavur.info</p>
      <a class="github" href="https://github.com/rakeshk1987/Northparavur.info" target="_blank">visit github page</a>
    </footer>
  </div>

`; 


//update copyright year
var year = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `Copyright &copy; ${year} by northparavur.info`;
