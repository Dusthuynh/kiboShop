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
    link.href = '/headAndFooter/hf.css';
    document.head.appendChild(link);
}