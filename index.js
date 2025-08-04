// all Users
fetch('https://reqres.in/api/users', {
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const users = data.data;
        const container = document.getElementById('user-list');

        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded shadow flex items-center space-x-4';

            card.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}" class="w-16 h-16 rounded-full" />
                <div>
                <p class="text-lg font-semibold">${user.first_name} ${user.last_name}</p>
                <p class="text-sm text-gray-500">${user.email}</p>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.error('Ошибка:', err));

// single User
fetch('https://reqres.in/api/users/2', {
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const user = data.data;
        const container = document.getElementById('user');

        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow flex items-center space-x-4';

        card.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}" class="w-16 h-16 rounded-full" />
                <div>
                <p class="text-lg font-semibold">${user.first_name} ${user.last_name}</p>
                <p class="text-sm text-gray-500">${user.email}</p>
                </div>
            `;

        container.appendChild(card);
    })
    .catch(err => console.error('Ошибка:', err));
