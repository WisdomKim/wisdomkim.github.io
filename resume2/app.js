$(() => {

  $('#alert').toggleClass('hide')

  setTimeout(() => {
    $('#alert').toggleClass('hide')
  }, 3000)

  $(document).keyup(e => {
    if(e.which == 49) window.open('https://v2018.api2pdf.com/chrome/url?url=https://wisdomkim.github.io/resume2/&apikey=765b92fa-975e-48f5-86e5-715419e9369a')
  })
})
