(function(username){
    document.addEventListener('DOMContentLoaded', function(){
        const userprofile = document.createElement('div');
        userprofile.className = 'user_profile';

        const profilepic = document.createElement('img');
        profilepic.className = 'prodile_pic'
        profilepic.src = `https://ui-avatars.com/api/?name=${username}&background=587fa7&color=fff&rounded=true`;
        profilepic.alt = `${username}'s profile picture`;

        const userName = document.createElement('span');
        userName.className = `username`;
        userName.textContent = username;

        userprofile.appendChild(profilepic);
        userprofile.appendChild(userName);

        const navbarContainer = document.querySelector('.mobile-menu-toggle');
        navbarContainer.appendChild(userProfile);
        
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navlinks = document.querySelector('.nav-links');
        mobileMenuToggle.addEventListener('click', function(){
            navlinks.classList.toggle('active');
            this.classList.toggle('open');
        });
    });
})