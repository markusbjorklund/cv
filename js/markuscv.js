let originalPageTitle = document.title;
let changeTitleTimeout;

const changeTitle = () => {
  document.title = document.hidden ? "\\ (•◡•) /" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 10);
});

const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

$(document).ready(function () {
  $('.toggle-trigger').on('click', function () {
    const $scope = $(this).closest('.column');

    const $target = $(this).parent().nextAll('.details').first();

    if ($target.is(':visible')) {
      $target.slideUp(300);
      $(this).removeClass('active');
    } else {

      $scope.find('.details').slideUp(300);
      $scope.find('.toggle-trigger').removeClass('active');

      $target.slideDown(300);
      $(this).addClass('active');
    }
  });
});