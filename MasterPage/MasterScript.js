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


//hide tabs for certain user
  document.addEventListener("DOMContentLoaded", function () {
    const role = localStorage.getItem("userRole");

    // Select all role-based menu items
    const companyItems = document.querySelectorAll(".company-only");
    const mentorItems = document.querySelectorAll(".mentor-only");
    const studentItems = document.querySelectorAll(".student-only");

    // Hide all by default
    companyItems.forEach(item => item.style.display = "none");
    mentorItems.forEach(item => item.style.display = "none");
    studentItems.forEach(item => item.style.display = "none");

    // Show depending on role
    if (role === "Company" || role === "company") {
      companyItems.forEach(item => item.style.display = "inline-block");
    } else if (role === "Mentor" || role === "mentor") {
      mentorItems.forEach(item => item.style.display = "inline-block");
    } else if (role === "Student" || role === "student") {
      studentItems.forEach(item => item.style.display = "inline-block");
    }

 
  });










//use when GET is there on swagger
/*function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}*/

