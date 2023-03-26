const passwordImage = document.querySelectorAll(".password-image");

passwordImage.forEach(element => {
  element.addEventListener("click", (event) => {   
      var parent = event.target.parentNode;
      passwordInput = parent.querySelector("input");
      var img = parent.querySelector("img");
      console.log(img.src)
      
      if(img.src == "file:///C:/Users/Cliente/.vscode/Form/static/images/show-password.png") {          
        passwordInput.type = "text";
        img.src = "../static/images/hide-password.png"
      } else {
        passwordInput.type = "password";
        img.src = "../static/images/show-password.png"
      } 
  });
});