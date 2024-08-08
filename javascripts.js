// script.js
document.addEventListener("DOMContentLoaded", function() {
    let comments = document.querySelectorAll(".comment");
    let index = 0;
  
    function scrollToNextComment() {
      comments[index].scrollIntoView({ behavior: "smooth", block: "start" });
      index = (index + 1) % comments.length; // Rudi mwanzo baada ya kufikia mwisho
    }
  
    // Anza kwa kutembea kwenye maoni ya kwanza
    scrollToNextComment();
  
    // Kutembea kwenye maoni mengine kila baada ya sekunde 5
    setInterval(scrollToNextComment, 5000);
  });
  