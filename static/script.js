const passwordImage = document.querySelectorAll(".password-image");

passwordImage.forEach(element => {
  element.addEventListener("click", (event) => {   
      var parent = event.target.parentNode;
      passwordInput = parent.querySelector("input");
      var img = parent.querySelector("img");
      console.log(img.src)
      
      if(img.src == "https://br-fernandes.github.io/static/images/show-password.png") {          
        passwordInput.type = "text";
        img.src = "https://br-fernandes.github.io/static/images/hide-password.png"
      } else {
        passwordInput.type = "password";
        img.src = "https://br-fernandes.github.io/static/images/show-password.png"
      } 
  });
});
