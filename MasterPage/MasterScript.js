
//Drop Down and log out 
 /*function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }*/


//hide tabs for certain user
/*  document.addEventListener("DOMContentLoaded", function () {
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
*/

  //display stored user nameand/surname

  /*document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("userName");
  const userImg = localStorage.getItem("profileImage");
  const nameElement = document.querySelector(".dropdown-toggle");
  
  if (userName && nameElement) {
    nameElement.innerHTML = `
      <a href="MentorProfile.html">
        <img src="${userImg || 'Image/default-avatar.png'}" 
             alt="Profile" style="width:40px;height:40px;border-radius:50%;">
      </a>
      ${userName} <i class="fa fa-caret-down"></i>
    `;
  }
});*/



// Load header and update profile info
function loadHeader() {
  const headerDiv = document.getElementById("Header");
  if (!headerDiv) return;

  fetch("MasterPage/Header.html")
    .then(res => res.text())
    .then(data => {
      headerDiv.innerHTML = data;

      // Update profile name & image
      const userName = localStorage.getItem("userName");
      const userImg = localStorage.getItem("profileImage");
      const nameElement = headerDiv.querySelector(".dropdown-toggle");
      const MainnameElent = document.getElementById("MentName");

      if (nameElement) {
        nameElement.innerHTML = `
          <a href="MentorProfile.html">
            <img src="${userImg || 'Image/default-avatar.png'}" 
                 alt="Profile" style="width:40px;height:40px;border-radius:50%;">
          </a>
          ${userName || "User"} <i class="fa fa-caret-down"></i>
        `;
      }

      if(MainnameElent){
           MainnameElent.textContent = userName || "User";
      }

      // Handle role-based menu items
      const role = localStorage.getItem("userRole")?.toLowerCase();
      const companyItems = headerDiv.querySelectorAll(".company-only");
      const mentorItems = headerDiv.querySelectorAll(".mentor-only");
      const studentItems = headerDiv.querySelectorAll(".student-only");

      // Hide all by default
      [...companyItems, ...mentorItems, ...studentItems].forEach(item => item.style.display = "none");

      // Show items based on role
      if (role === "company") {
        companyItems.forEach(item => item.style.display = "block");
      } else if (role === "mentor") {
        mentorItems.forEach(item => item.style.display = "block");
      } else if (role === "student") {
        studentItems.forEach(item => item.style.display = "block");
      }
    })
    .catch(err => console.error("Error loading header:", err));
}

// Toggle dropdown menu
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Logout
function logout() {
  localStorage.clear(); // remove all user data
  window.location.href = "SignIn.html";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadHeader);

//Tab color change change

let colorBtn = document.querySelectorAll(".tabs button");

colorBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    // Remove active from all buttons
    colorBtn.forEach(b => b.classList.remove("active"));

    // Add active only to clicked button
    this.classList.add("active");
  });
});