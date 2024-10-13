const images = document.querySelectorAll('.hover-img');
    // Function to set hover event listeners for images
    const mainImg = document.getElementById('mainImg');

    const noButton = document.getElementById('No');
    const intro = document.getElementById('Intro');
    const yesButton = document.getElementById('Yes');

    noButton.addEventListener('mouseover', function() {
        images.forEach((img) => {
            img.src = 'OIP__32_-removebg-preview.png'; // Change to new image source on hover
            img.style.width = '200px';
            img.style.height = '200px';
        });
        mainImg.src = 'output-onlinegiftools (1).gif';
        intro.innerHTML = 'Pero rerespetuhin kita sa disesyon mo, hindi naman kita pipilitin ehh pero ang gusto ko lang naman na sabihin na gusto ko namalaman mo, hindi kita pipilitin na gustuhin mo ako alam ko yung kalagayan mo na inc ka I respect your religion, pero kung iniisip mo na once nagsabi ako na gusto kita mean nun gusto ko lang sabihin yung feeling ko for you pero, para saakin kung tayo talga para sa isat isa magkikita tayo sa tamang panahon hindi kita sa pinagmamadali sinabi ko nalang yung feeling ko para sayo pero mag aatay ako sa isang tao kahit d imposible maging kami sa tamang panahon,kung hindi talaga tayo para sa isat isa sya na bahala doon AHAH pero atleast na amin ko yung feeling ko para sayo hindi naman kita pinagmamadali at hindi kita pipilitin na gustohin mo ako kasi if you inlove someone waiting for him just pray to meet you again in time^^..'
        intro.style.fontSize = '20px';
    });

    yesButton.addEventListener('mouseover', () => {
        mainImg.src = 'happy-cat-happy-happy-cat.gif';
    })
    yesButton.addEventListener('mouseout', () => {
        mainImg.src = 'flowers-removebg-preview.png';
    })

    noButton.addEventListener('mouseout', function() {
        images.forEach((img) => {
            img.src = 'output-onlinegiftools.gif'; // Change back to original image
            img.style.width = '200px';
            img.style.height = '200px';
        });
        mainImg.src = 'flowers-removebg-preview.png';
        intro.innerHTML = 'Will you be my valentine?? HEHEHEHe'
        intro.style.fontSize = '80px';
    });
    noButton.addEventListener('click', () => {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
    
        // Generate random x and y coordinates within the viewport
        const randomX = Math.floor(Math.random() * (viewportWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (viewportHeight - noButton.offsetHeight));
    
        // Set the new position of the No button
        noButton.style.position = 'absolute'; // Ensure the button is positioned absolutely
        noButton.style.left = `${randomX}px`; // Set the left position
        noButton.style.top = `${randomY}px`; // Set the top position
    });