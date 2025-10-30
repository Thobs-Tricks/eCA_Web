document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("include[src]");
  
  includes.forEach(el => {
    const file = el.getAttribute("src");
    fetch(file)
      .then(res => res.text())
      .then(data => {
        el.outerHTML = data; // replace <include> tag with loaded HTML
      })
      .catch(err => console.error("Error loading include:", err));
  });
});


//Drop Down and log out 
 function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

//use when GET is there on swagger
/*function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}*/

