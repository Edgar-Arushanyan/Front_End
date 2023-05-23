// const baseUrl = 'https://jsonplaceholder.typicode.com/';
const baseUrl = 'http://646b401a7d3c1cae4ce37a4c.mockapi.io/'


const usersList = document.getElementById('usersList');
const postsList = document.getElementById('postsList');
const loadUsersBtn = document.getElementById('loadUsersBtn');
const loadPostsBtn = document.getElementById('loadPostsBtn');
const addPostsBtn = document.getElementById('addPostsBtn');




loadUsersBtn.addEventListener('click', async () => {
    const users = await fetchUsers();
   displayUsers(users);
})

loadPostsBtn.addEventListener('click', async () => {
    const posts = await fetchPosts ();
    displayPosts(posts);
})

async function fetchUsers() {
    try {
        const response = await fetch(`${baseUrl}users`);  //fetch запрос
        const users = response.json();
        return users;
    } catch (error) { // создаем ошибку Error
        console.log('Error fetching users: ', error);       
    }   
}

async function fetchPosts() {
    try {
        const response = await fetch(`${baseUrl}posts`);
        const posts = response.json();
        return posts;
    } catch (error) {
        console.log(('Error fetching users: ', error));        
    }
}

async function createPost(postData) {
    try {
        const response = await fetch(`${baseUrl}posts`, {
            method: 'POST',
            body: JSON.stringify(postData)
        });
        const post = await response.json();
        return post;

    } catch (error) {
        console.log(('Error fetching users: ', error));        
          
    }
}

async function handleAddPost() {
    if (!title || !body) {
        alert('Please enter something in field title and body');
        return;
    }


    const postData = {
        title: title.value,
        body: body.value,
        id: '' + new Date().getTime()
    }

    const post = await createPost(postData);

    if (post) {
        title.value = '';
        body.value = '';  
    }

    const posts = await fetchPosts();
    displayPosts(posts);

    
}

function displayPosts(posts) {
    postsList.innerHTML = '';

    post.forEach(post => {
        const li = Document.createElement('li');
        li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        
        postsList.append(li);

    });
    
}

function displayUsers(users) {
    usersList.innerHTML = '';
    // TYPE-1
    users.forEach(({name, phone}) => {
        console.log(name, phone);
        const li = document.createElement('li');
        const phoneFormat = phone.split(' ')[0]
        li.textContent = name + '   ' + phoneFormat;
        usersList.append(li);
        
    });
    // TYPE-2:

    /*const alt = users.map(user => {
        const phoneFormat = user.phone.split(' ')[0];
        return `<li>${user.name} ${phoneFormat}</li>`;
    }).join('');
    userList.innerHTML = alt;
    */

    
    


    
}