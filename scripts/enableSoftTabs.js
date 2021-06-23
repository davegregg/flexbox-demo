{
  const SOFT_TAB = "    "

  void function main () {
    editableStyleElements
      .forEach(element => element.addEventListener("keydown", interceptTabAndInsertSoftTab, false))
  }()


  
  function interceptTabAndInsertSoftTab (event) {
    if (event.key !== "Tab") return

    event.preventDefault()

    document.execCommand("insertText", false, SOFT_TAB)
  }

}