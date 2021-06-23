{
  const stylesCached = window.sessionStorage.getItem("cached-styles")

  void function main () {
    if (stylesCached === null) {
      console.info("Cached styles not detected. Registering 'beforeunload' event handler for caching.")
      window.addEventListener("beforeunload", cacheStyles)
    } else {
      console.info("Cached styles detected!")
      restoreCachedStyles()
    }

    const resetButton = document.querySelector("button[type='reset']")
    resetButton.addEventListener("click", resetStyles)

    const solutionsButton = document.querySelector("button#view-solutions")
    solutionsButton.addEventListener("click", restoreSolutions)
  }()



  function cacheStyles () {
    const styles = Array.from(editableStyleElements, element => element.innerText)
    window.sessionStorage.setItem("cached-styles", JSON.stringify(styles))

    console.info("Styles cached.")
  }

  function restoreCachedStyles () {
    loadStyles(JSON.parse(stylesCached))
  }

  function restoreSolutions () {
    loadStyles(solutionStyles)
  }

  function loadStyles (styles) {
    editableStyleElements.forEach((element, index) => element.innerHTML = styles[index])
    console.info("Styles restored.")
  }

  function resetStyles () {
    window.removeEventListener("beforeunload", cacheStyles)
    window.sessionStorage.removeItem("cached-styles")
    
    console.info("Style cache cleared. Reloading to restore hardcoded styles...")
    window.location.reload()
  }

}