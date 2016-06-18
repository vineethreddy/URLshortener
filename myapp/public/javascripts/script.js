// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendPostRequest("/post", 
            function (request) {
              var name = request.responseText;
              console.log(name);
              document.querySelector("input").value = name;
            });

        
      });
  }
);