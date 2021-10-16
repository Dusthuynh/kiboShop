fetch("/headAndFooter/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("/headAndFooter/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

  if(!document.getElementById('hf')) {
    var link = document.createElement('link');
    link.id = 'hf';
    link.rel = 'stylesheet';
    link.href = 'kiboShop/headAndFooter/hf.css';
    document.head.appendChild(link);
  }

  if(!document.getElementById('icon-title')) {
    var link = document.createElement('link');
    link.id = 'icon-title';
    link.rel = 'icon';
    link.href = 'kiboShop/media/icon/iconTitle.png';
    link.type = 'image/x-icon';
    document.head.appendChild(link);
  }

