document.getElementById('about_btn').addEventListener('click', aboutPopUp)

function aboutPopUp () {
  document.getElementById('about_popup').style.visibility = 'visible';
  console.log (aboutPopUp);
}

document.getElementById('mywork_btn').addEventListener('click', myWorkPopUp)

function myWorkPopUp () {
  document.getElementById('mywork_popup').style.visibility = 'visible';
}

document.getElementById('contact_btn').addEventListener('click', contactPopUp)

function contactPopUp () {
  document.getElementById('contact_popup').style.visibility = 'visible';
}


// var popUp () {
//   if (aboutPopUp.style.visibility === 'visible' || myWorkPopUp.style.visibility === 'visible' || contactPopUp.style.visibility === 'visible') {
//     document.addEventListener('click', hidePopup)
//   }
// }
//
// function hidePopup () {
//   document.getElementById('about_popup' || 'mywork_popup' || 'contact_popup').style.visibility = 'hidden';
// }
