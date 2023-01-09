$(function () {
    $(".signIn").click(function () {

        let email = $(".email").val();
        let password = $(".password").val();

        if (email == "") {
            Swal.fire(
                'Email Address Should Not Be Empty', '',
                'warning'
            )
        }
        else if (password == "") {
            Swal.fire(
                'Password Should Not Be Empty', '',
                'warning'
            )
        }else
        {
            window.location.href = "http://localhost:4200/register";
        }
    });
});


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
        }else
        {
            window.location.href = "http://localhost:4200/login";
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