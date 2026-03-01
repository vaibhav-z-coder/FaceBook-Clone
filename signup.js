document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // get values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        // validation
        if (!firstName || !lastName || !email || !password || !gender) {
            alert("Please fill all fields!");
            return;
        }

        const newUser = {
            firstName,
            lastName,
            dob: `${day}-${month}-${year}`,
            gender,
            email,
            password
        };

        // get existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if already exists
        const exists = users.some(user => user.email === email);

        if (exists) {
            alert("User already exists! Please login.");
            return;
        }

        // save new user
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        console.log("Users Saved:", users);

        alert("Account created successfully Now Login to Access Dashboard");

        form.reset();

        // redirect to login page
        window.location.href = "index1.html";
    });

});
