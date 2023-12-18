function fetchUserData() {
    fetch('https://randomuser.me/api?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = '';  // clear

            data.results.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';

                const userPicture = document.createElement('img');
                userPicture.src = user.picture.large;

                const userInfo = document.createElement('div');
                userInfo.className = 'user-info';
                userInfo.innerHTML = `
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>City:</strong> ${user.location.city}</p>
                    <p><strong>Cell:</strong> ${user.cell}</p>
                    <p><strong>Country:</strong> ${user.location.country}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                    `;

                userCard.appendChild(userPicture);
                userCard.appendChild(userInfo);
                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
}

