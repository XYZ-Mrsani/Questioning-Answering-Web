let toggle = button => {
    if (!localStorage.getItem('token')) {
        window.location.href = "http://localhost:4200/login";
    }
}
    //let element1 = document.getElementById("etitle");
    //let element2 = document.getElementById("eabout");
    //let element3 = document.getElementById("eemail");
    //let element4 = document.getElementById("eusername");

    //let hidden1 = element1.getAttribute("hidden");
    //let hidden2 = element2.getAttribute("hidden");
    //let hidden3 = element3.getAttribute("hidden");
    //let hidden4 = element4.getAttribute("hidden");

/*let ebtn = document.getElementById("abtn");
let hidden = ebtn.getAttribute("hidden");

if (!hidden) {
    ebtn.removeAttribute("hidden");
    //element2.removeAttribute("hidden");
    //element3.removeAttribute("hidden");
    //element4.removeAttribute("hidden");
 }*/
        //ebtn.setAttribute("hidden", "hidden");


/*
$(function () {
    $(".signUp").click(function () {

        let email = $(".email").val();
        let username = $(".uname").val();
        let password = $(".pass").val();
        let conpassword = $(".conpass").val();

        if (email == "") {
            Swal.fire(
                'Email Address Should Not Be Empty', '',
                'warning'
            )
        }
        else if (username == "") {
            Swal.fire(
                'Username Should Not Be Empty', '',
                'warning'
            )
        }
        else if (password == "") {
            Swal.fire(
                'Password Should Not Be Empty', '',
                'warning'
            )
        }
        else if (conpassword == "") {
            Swal.fire(
                'Confirm Password Should Not Be Empty', '',
                'warning'
            )
        }
        else if (password != conpassword) {
            Swal.fire(
                'Confirm Password Not Matched', '',
                'warning'
            )
        }else{
            (submit)="addUser(addUserForm)";
        }
    });
});


/*(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()*/