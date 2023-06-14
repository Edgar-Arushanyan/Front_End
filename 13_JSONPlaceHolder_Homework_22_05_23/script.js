const url = 'https://jsonplaceholder.typicode.com/users';

const userList = document.getElementById('userList');
const userList2 = document.getElementById('userList2');
const userDetailsDiv = document.getElementById('userDetails');
const searchInput = document.getElementById('searchInput');
const users = [];

userList.classList.add('userList');
userList2.classList.add('userList2');


//users.push(null); //изменять константу можно
//users = []; переопределять  константу нельзя

(async function fetchAndDisplayUsers() {
    try {
        const res = await fetch(url);
        const users = res.json();

        users.forEach(user => {
            const li = document.createElement('li');
            li.innerText = user.name;
            userList.append(li);
        });

        let filteredUsers = users;
        displayUsers(users);
 
    searchInput.addEventListener('input', () => { // поисковая строка в основном в интернет магазине
        const searchTerm = searchInput.value.toLowerCase();
        filteredUsers = users.filter((user) => 
            user.name.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);    
    });

    } catch (error) {
        console.log('Error fetching users', error);      
    }
})();

/*
fetch(url)
    .then(res => res.json())
    .then((users) => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerText = user.name;
            userList.append(li);
        });
    })
    .catch(err => console.log(err));



fetch (url) //запрос
    .then(res => res.json())
    .then((user) => {
        let filteredUsers = users;
        displayUsers(filteredUsers);
   
    searchInput.addEventListener('input', () => { // поисковая строка в основном в интернет магазине
        const searchTerm = searchInput.value.toLowerCase();
        filteredUsers = users.filter((user) => 
            user.name.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);   
    });
})


.catch(error => {
    console.log('Error fetching user', error);
});
*/


function displayUsers(users) {
    userList2.innerHTML = '';
    
    users.forEach((user) => {
        const li = document.createElement('li');
        li.innerText = user.name;
        li.addEventListener('click', () => displayUsersDetails(user));
        userList2.append(li);
    });

}

function displayUsersDetails(user) {
    userDetailsDiv.innerHTML = '';

    const nameHeading = document.createElement('h2');
    nameHeading.innerHTML = user.name;

    const nickName = document.createElement('p');
    nickName.innerHTML = `<strong>Username: </strong> ${user.username}`;

    const email = document.createElement('p');
    email.innerHTML = `<strong>Email: </strong> ${user.email}`;

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone: </strong> ${user.phone}`;

    userDetailsDiv.append(nameHeading, nickName, email, phone);
    userDetailsDiv.classList.add('userDetailsDiv');
    
}

fetchAndDisplayUsers();

'Hello world'.includes('llo');// true, ищет в строке совпадения на подстроку

   