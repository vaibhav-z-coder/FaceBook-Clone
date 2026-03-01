document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // get input values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // validation
        if (!email || !password) {
            alert("Enter email & password");
            return;
        }
        // get users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        console.log("All users:", users);

        // find matching user
        const validUser = users.find(user =>
            user.email === email && user.password === password
        );

        // if login success
        if (validUser) {
            alert("Login Successful 🎉\nWelcome " + validUser.firstName);

            // save session
            localStorage.setItem("loggedInUser", JSON.stringify(validUser));

            // clear form
            form.reset();

            // 🔥 redirect to home page
            window.location.href = "home.html";
        } 
        
        // if login fail
        else {
            alert("Invalid Email or Password");
        }

    });

});
