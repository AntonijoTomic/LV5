$("#target").click(function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('body').css('background',"#"+randomColor);
    $('p').text(randomColor);
  })