const btns = [...document.querySelectorAll('.icon')];

function removeActive(items) {
  return items.forEach((btn) => {
    btn.classList.remove('active');
  });
}
export default removeActive;
