const nameInput = document.getElementById("name")



function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mshkatso.sul0@gmail.com",
        Password : "C84626E37D39B59358FDCB24CFAF9E1C1038",
        To : 'mishkatsuliman101@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + " <br> Email: " + document.getElementById("email").value
        + " <br> Subject: " + document.getElementById("text").value
        + " <br> Message: " + document.getElementById("textarea").value
    }).then(
      message => alert("Message Send Successfully")
    );
}