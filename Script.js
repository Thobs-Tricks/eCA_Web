
  function showSection(clickedLink) {
    // Get all links inside .Section-Descrip
    var links = document.querySelectorAll(".Section-Descrip a");
    
    // Reset color of all links
    links.forEach(function(link) {
        link.style.color = 'black'; // or 'black' or your default color
    });

    // Highlight the clicked link
    clickedLink.style.color = 'blue';
}






function OnLikeBtn(){
    document.getElementById("like-btn").style.backgroundColor = "darkblue";
    document.getElementById("like-btn").style.color = "White";
        document.getElementById("like-btn").style.borderRadius = "2px";
}

function PostFeature(){
    document.getElementById("PostForm").style.display = "block";
}

function MoreOptions(){
    document.getElementById("popup1").style.display = "block";
}

// Close popup when clicking outside of it
function ClosePopUp(){
    document.getElementById("PostForm").style.display="none";
}

// Close inner popup when clicking outside of it
const PostForm= document.getElementById("PostForm");
  const popup = document.getElementById('popup1');
  
  document.addEventListener('click', function(event) {
    if (!PostForm.contains(event.target)) {
      popup.style.display = 'none';
    }
  });




    // Sign in
    
      document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const storedData = localStorage.getItem("userData");
      if (!storedData) {
        alert("No user found. Please sign up first.");
        return;
      }

      const user = JSON.parse(storedData);

      if (user.email === email && user.password === password) {
        // Save session info (e.g., role)
        localStorage.setItem("userRole", user.role);

        // Redirect based on role
        if (user.role === "mentor") {
          window.location.href = "MentorProfile.html";
        } else if (user.role === "company") {
          window.location.href = "Company.html";
        }
      }else {
        alert("Incorrect email or password.");
      }
    });



  //Drop Down and log out 

  function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  function logout() {
    // Clear user data from localStorage
    localStorage.removeItem("userData");

    // Redirect to sign in page
    window.location.href = "SignIn.html";
  }

 // Close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
      document.getElementById("dropdownMenu").style.display = "none";
    }
  });


  //sign up2

  const roleSelect = document.getElementById('roleSelect');
  const dynamicFields = document.getElementById('dynamicFields');

  function updateFormFields(role) {
    let additionalFields = '';

    if (role === 'company') {
      additionalFields = `
        <input type="text" id="companyName" placeholder="Company Name" required>
        <input type="text" id="industry" placeholder="Industry" required>
        <input type="text" id="companyReg" placeholder="Company Reg. Number" required>
      `;
      document.getElementById("container").style.height = "auto";

    } else if (role === 'mentor') {
      additionalFields = `
        <input type="text" id="fullName" placeholder="Full Name" required>
        <input type="text" id="expertise" placeholder="Expertise Area" required>
        <input type="text" id="experience" placeholder="Years of Experience" required>
      `;
      document.getElementById("container").style.height = "auto";
    }

    dynamicFields.innerHTML = `
      <input type="email" id="email" placeholder="Email" required>
      <input type="password" id="password" placeholder="Password" required>
      <input type="password" id="confirmPassword" placeholder="Confirm Password" required>
      ${additionalFields}
    `;
  }

  roleSelect.addEventListener('change', function () {
    updateFormFields(this.value);
  });

  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const role = roleSelect.value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (role === "student") {
      alert("Please select a valid role.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userData = { role, email, password };

    if (role === 'company') {
      userData.companyName = document.getElementById("companyName").value;
      userData.industry = document.getElementById("industry").value;
      userData.companyReg = document.getElementById("companyReg").value;
    } else if (role === 'mentor') {
      userData.fullName = document.getElementById("fullName").value;
      userData.expertise = document.getElementById("expertise").value;
      userData.experience = document.getElementById("experience").value;
    }

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Sign up successful! Please log in.");
    window.location.href = "SignIn.html"; // redirect to login page
  });

