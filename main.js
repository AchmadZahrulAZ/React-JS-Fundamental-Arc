let users = [];
let currentPage = 1;
const usersPerPage = 10; // Jumlah user per halaman
const api = 'https://randomuser.me/api';
const results = 50; // jumlah data yang ditampilkan

fetch(`${api}?results=${results}`)
  .then((res) => res.json())
  .then((data) => {
    users = data.results;
    displayUsers(users, currentPage);
    setupPagination(users);
    document.getElementById('user-container').style.display = 'grid';  
  });

// Fungsi untuk menampilkan user berdasarkan halaman
function displayUsers(users, page) {
  const startIndex = (page - 1) * usersPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + usersPerPage);
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = '';

  paginatedUsers.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
        <img src="${user.picture.large}" 
        alt="${user.name.first}"/>
        <div class="user-info">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.location.city}, ${user.location.state}</p>
        </div>
    `;

    userContainer.appendChild(userCard);
  });
}

// Fungsi untuk setup tombol pagination
function setupPagination(users) {
  const paginationContainer = document.getElementById('pagination-container');
  const totalPages = Math.ceil(users.length / usersPerPage);
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = createPaginationButton(i);
    paginationContainer.appendChild(btn);
  }
}

function createPaginationButton(page) {
  const button = document.createElement('button');
  button.innerText = page;
  button.classList.add('pagination-btn');
  if (currentPage === page) button.classList.add('active');

  button.addEventListener('click', () => {
    currentPage = page;
    displayUsers(users, currentPage);

    const currentBtn = document.querySelector('.pagination-btn.active');
    currentBtn.classList.remove('active');
    button.classList.add('active');
  });

  return button;
}

// Fitur Search
document.getElementById('search-button').addEventListener('click', () => {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchInput);
  });

  currentPage = 1; // Reset ke halaman pertama setelah pencarian
  displayUsers(filteredUsers, currentPage);
  setupPagination(filteredUsers);
});
