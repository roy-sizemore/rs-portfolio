// Places nav bar in hamburger menu when responsive class is active
function myFunction() {
    let x = document.getElementsByClassName("res-nav");
    if (x.className === "res-nav") {
      x.className += " responsive";
    } else {
      x.className = "res-nav";
    }
  }

// Function to automatically update the year. Used in <footer> for copywrite info
const copywrite = () => document.write(new Date().getFullYear());

