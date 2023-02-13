function changeImage() {
  let displayimage = document.getElementById('img-1');
  if (displayimage.src.match('asset/img/Stain&Odor.png')) {
    displayimage.src = 'asset/img/Sanitize.png';
  } else {
    displayimage.src = 'asset/img/Stain&Odor.png';
  }
}
