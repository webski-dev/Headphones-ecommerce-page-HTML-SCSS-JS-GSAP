function closeMenu() {
  let closeElement = document.getElementById("mobileMenu");

  closeElement.classList.remove("active");
  document.body.style.overflow = null;
}
