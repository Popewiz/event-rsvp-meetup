window.addEventListener('load', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/attendees');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched from API:", data);

        const attendees = data; 
        const attendeesContainer = document.getElementById('attendees');

        // Map pronouns to avatar filenames
        const pronounToAvatar = {
            'He/Him': 'male-avatar.png',
            'She/Her': 'female-avatar.png',
            'They/Them': 'other-avatar.png'
        };

        attendees.forEach(attendee => {
            console.log("Attendee data:", attendee);
            const div = document.createElement('div');
            
            // Set the required classes
            div.className = 'col-md-4 col-sm-6 feature';
            
            // Ensure pronoun matches or default is used
            const avatarFile = pronounToAvatar[attendee.pronoun] || 'default-avatar.png';
            console.log("Selected avatar:", avatarFile);

            div.innerHTML = `
                <img src="img/${avatarFile}" class="attendee-img">
                <h3>${attendee.firstName} ${attendee.lastName}</h3>
                <ul class="attendee-social">
                    <li><a href="mailto:${attendee.email}" title="Email ${attendee.firstName}">
                        <span class="ti-email"></span>
                    </a></li>
                </ul>
            `;
            attendeesContainer.appendChild(div);
        });
    } catch (error) {
        console.error("Error loading attendees:", error);
    }
});
