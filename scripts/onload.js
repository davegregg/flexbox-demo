/*
  You'll notice, first of all, that in the HEAD
  section of our HTML file, there is a LINK tag for
  `solutions.css` – but it has a DISABLED attribute,
  which will prevent it from loading initially, when
  the browser reads the HTML.

  The below JavaScript will check if this page is
  being hosted on Github.io, and if so, will unload
  the `flex-containers.css` stylesheet, and load the
  `solutions.css` stylesheet in its place.

  This way, when you're viewing it over the Web, you
  can see the already-written solutions, but if you're
  running the page on your local machines, then your
  `flex-containers.css` will be the only stylesheet
  running.
  
  This way, you can toy with your own solutions.
*/

{

  const currentDomain = window.location.hostname.toLowerCase()
  
  if (currentDomain.endsWith('github.io')) {
    const flexContainersStylesheet = Array
      .from(document.styleSheets)
      .find(stylesheet => stylesheet.href.endsWith('flex-containers.css'))
  
    const solutionsStylesheet = document.querySelector('#solutions-stylesheet')
  
    flexContainersStylesheet.disabled = true
    solutionsStylesheet.removeAttribute('disabled')
  }

}