
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


    