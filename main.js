async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        
        document.getElementById('userImg').src = user.picture.large;
        document.getElementById('userName').textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('userAge').textContent = `Yosh: ${user.dob.age}`;
        document.getElementById('userLocation').textContent = `Manzil: ${user.location.country}`;
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}

fetchUser("https://randomuser.me/api/"); 