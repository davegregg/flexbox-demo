{
  const main = document.querySelector("body > main")
  const position = window.sessionStorage.getItem("scroll-position")

  void function main () {
    if (position) restoreScrollPosition()
    
    window.addEventListener("beforeunload", setCurrentScrollPosition)
  }()
  


  function restoreScrollPosition () {
    main.scrollTop = Number(position)
  }

  function setCurrentScrollPosition () {
    const newPosition = main.offsetTop - document.body.scrollTop
    window.sessionStorage.setItem("scroll-position", newPosition)
  }

}