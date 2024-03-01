// const mainMenu  = document.querySelector('.mainmenu');
// const openMenu  = document.querySelector('.checkbtn');
// const closeMenu = document.querySelector('.closemenu');
// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close)
// function show(){
//   mainMenu.style.display = 'flex';
//   mainMenu.style.top = '0';
// }
// function close(){
//   mainMenu.style.top = '-100%'
// }
const toggleButton = document.getElementsByClassName('checkbtn')[0]
const navbarlinks = document.getElementsByClassName9('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active')
})


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