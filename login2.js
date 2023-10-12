function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create a data object to send to the server
    var data = {
        username: username,
        password: password
    };

    // Make an AJAX request to the server for validation
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/validate_user.php", true); // Replace with your server-side script URL
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                if (response.success) {
                    alert("Login successful");
                    // Redirect to a dashboard or another page
                } else {
                    alert("Username or password incorrect");
                }
            } else {
                alert("Server error. Please try again later.");
            }
        }
    };

    xhr.send(JSON.stringify(data));
}
