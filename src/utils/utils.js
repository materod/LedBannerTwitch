// Show error message
const showErrorMessage = (msg) => {
  const alertBox = document.getElementById('errorMessage');
  if (alertBox) {
    alertBox.classList.remove('hide');
    alertBox.innerHTML =
      '<strong>Error!: </strong>' +
      msg +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    alertBox.classList.add('show');
  }
};

// Url
const getParentUrl = () => {
  let pathArray = window.location.pathname.slice().split('/');
  pathArray.pop();
  let parentUrl =
    window.location.protocol +
    '//' +
    window.location.hostname +
    pathArray.join('/') +
    '/';
  return parentUrl;
};

export { getParentUrl, showErrorMessage };
