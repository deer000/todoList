const onScroll = event => {
  const sections = document.querySelectorAll(".after_effec");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    if (
      refElement.offsetTop <= scrollPos &&
      refElement.offsetTop + refElement.offsetHeight > scrollPos
    ) {
      document.querySelector(".after_effec").classList.remove("after_block");
      currLink.classList.add("after_block");
    } else if (!document.querySelector(".after_block")) {
      sections[0].classList.add("after_block");
      currLink.classList.remove("after_block");
    } else {
      currLink.classList.remove("after_block");
    }
  }
};