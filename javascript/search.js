const itemsPerPage = 3;
let data = [
  { id: 1, name: 'Item 1', link: 'page1.html' },
  { id: 2, name: 'Item 2', link: 'page2.html' },
  { id: 3, name: 'Item 3', link: 'page3.html' },
  { id: 4, name: 'Item 4', link: 'page4.html' },
  { id: 5, name: 'Item 5', link: 'page5.html' },
  { id: 6, name: 'Item 6', link: 'page6.html' },
  { id: 7, name: 'Item 7', link: 'page7.html' },
  { id: 8, name: 'Item 8', link: 'page8.html' },
  { id: 9, name: 'Item 9', link: 'page9.html' },
  { id: 10, name: 'Item 10', link: 'page10.html' },
  { id: 11, name: 'Item 11', link: 'page11.html' },
  { id: 12, name: 'Item 12', link: 'page12.html' },
  { id: 13, name: 'google', link: 'https://www.google.com' },
];

function search() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput));
  var result=document.getElementById("results")
  console.log(searchInput);
  renderResults(filteredData);
if (searchInput==null || searchInput=='') {
  document.getElementById("results").style.display='none';
  document.getElementById('pagination').style.display='none';
}
else{
  document.getElementById("results").style.display='block';
}
}

function renderResults(results) {
  const resultsElement = document.getElementById('results');
  const paginationElement = document.getElementById('pagination');

  resultsElement.innerHTML = '';
  paginationElement.innerHTML = '';

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const li = document.createElement('li');
    const hr = document.createElement('hr');
    li.className = 'result-item';
    const a = document.createElement('a');
    a.href = result.link;
    a.textContent = result.name;
    li.appendChild(a);
    resultsElement.appendChild(li);
  }

  const pageCount = Math.ceil(results.length / itemsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement('li');
    li.className = 'page-link';
    li.innerText = i;
    li.onclick = () => {
      const startIndex = (i - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      renderResults(results.slice(startIndex, endIndex));
      updatePaginationActive(i);
    };
    paginationElement.appendChild(li);
  }
}

function updatePaginationActive(page) {
  const pageLinks = document.querySelectorAll('.page-link');
  pageLinks.forEach(link => link.classList.remove('active'));
  pageLinks[page - 1].classList.add('active');
}

renderResults(data.slice(0, itemsPerPage));
updatePaginationActive(1);
