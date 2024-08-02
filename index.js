document.getElementById('load-user-button').addEventListener('click', function() {
    fetchUserInfo();
});

function fetchUserInfo() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            document.getElementById('user-name').innerText = user.name;
            document.getElementById('user-email').innerText = user.email;
        } else {
            console.error('Failed to fetch user info');
        }
    };
    xhr.onerror = function() {
        console.error('Request error...');
    };
    xhr.send();
}

