
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


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
      const userImg = localStorage.getItem("profileImageUrl") || "Image/default-avatar.png";
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

      /*applyHeaderProfileImage();*/
      highlightActiveNav();
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
 const profileImage = localStorage.getItem("profileImageUrl");

  localStorage.clear(); // clear auth 

  //  restore image cache
  if (profileImage) {
    localStorage.setItem("profileImageUrl", profileImage);
  }
  
  window.location.href = "SignIn.html";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadHeader);

//Tab color change change

/*let colorBtn = document.querySelectorAll(".tabs button");

colorBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    // Remove active from all buttons
    colorBtn.forEach(b => b.classList.remove("active"));

    // Add active only to clicked button
    this.classList.add("active");
  });
});*/

  //-----------Profile Image Uplaod part1

/*function updateAllProfileImages(imageUrl) {
  // Save for reuse across pages
  localStorage.setItem("profileImageUrl", imageUrl);

  // Update profile page image
  const profileImg = document.getElementById("profileImg");
  if (profileImg) profileImg.src = imageUrl;

  // Update header image
  const headerImg = document.getElementById("profileHeaderImg");
  if (headerImg) headerImg.src = imageUrl;
}*/

/* =============================
   PROFILE IMAGE STATE MANAGER
   ============================= */

function updateAllProfileImages(imageUrl) {
  if (!imageUrl) return;

  localStorage.setItem("profileImageUrl", imageUrl);

  const profileImg = document.getElementById("profileImg");
  if (profileImg) profileImg.src = imageUrl;

  const headerImg = document.getElementById("profileHeaderImg");
  if (headerImg) headerImg.src = imageUrl;
}

/**function applyHeaderProfileImage() {
 /* const img = document.getElementById("profileHeaderImg");
  const saved = localStorage.getItem("profileImageUrl");
  if (img && saved) img.src = saved;*/
 /* const img = document.getElementById("profileHeaderImg");
  if (!img) return; 

  const saved = localStorage.getItem("profileImageUrl");
  if (saved) img.src = saved;

  
}*/

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();

  // Apply cached image immediately if exists
  const saved = localStorage.getItem("profileImageUrl");
  if (saved) updateAllProfileImages(saved);
});

/* =============================
   TAB SYNC (OPTIONAL)
   ============================= 
window.addEventListener("storage", e => {
  if (e.key === "profileImageUrl") {
    applyHeaderProfileImage();
  }
});*/


   function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    const link = item.querySelector("a");
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      item.classList.add("active");
    }
  });
}


