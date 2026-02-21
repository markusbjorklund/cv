let originalPageTitle = document.title;
let changeTitleTimeout;

const changeTitle = () => {
  document.title = document.hidden ? "Hire me!" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 10);
});

// get current age
const getAge= (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}