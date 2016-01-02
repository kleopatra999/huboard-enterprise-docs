var img = document.getElementById("hb-article-content");
img.addEventListener('click', function () {
  if (img.height != 200) {
    img.height = 200;
  } else {
    img.height = -1;
  }
});
