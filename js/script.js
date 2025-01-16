document.addEventListener('DOMContentLoaded', function () {
    // Select the menu icon and navigation list elements using querySelector
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    // Add a click event listener to the menu icon
    menu.onclick = () => {
        // Toggle the 'bx-x' class on the menu icon
        menu.classList.toggle('bx-x');

        // Toggle the 'open' class on the navigation list
        navlist.classList.toggle('open');
    }
});
