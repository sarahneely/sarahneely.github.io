

var aboutButton = document.getElementById('about_btn');
aboutButton.addEventListener('click', aboutPopUp)

function aboutPopUp () {
  document.getElementById('about_popup').style.visibility = 'visible';
  console.log (aboutPopUp);
}

var myWork = document.getElementById('mywork_btn');
myWork.addEventListener('click', myWorkPopUp);

function myWorkPopUp () {
  document.getElementById('mywork_popup').style.visibility = 'visible';
}

var contactButton = document.getElementById('contact_btn');
contactButton.addEventListener('click', contactPopUp);

function contactPopUp () {
  document.getElementById('contact_popup').style.visibility = 'visible';
}

var closeButton = document.getElementById('close_work');
closeButton.addEventListener('click', closeWork);
function closeWork () {
    document.getElementById('mywork_popup').style.visibilty = 'hidden';
}
