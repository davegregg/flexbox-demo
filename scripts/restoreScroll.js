{

  const main = document.querySelector("body > main")
  const position = sessionStorage.getItem("scroll-position")

  if (position) {
      restoreScrollPosition()
  }
  
  window.addEventListener("beforeunload", setCurrentScrollPosition)


  
  function restoreScrollPosition () {
    main.scrollTop = Number(position)
  }

  function setCurrentScrollPosition () {
    const newPosition = main.offsetTop - document.body.scrollTop
    sessionStorage.setItem("scroll-position", newPosition)
  }

}