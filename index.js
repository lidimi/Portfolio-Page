const displaySkill = document.querySelector('.display-skill');
const skills = document.querySelectorAll('.skill');
const avatar = document.querySelector('.avatar');

avatar.addEventListener('mouseover', () => {
    avatar.src = 'assets\\avataaars2.svg';
    avatar.addEventListener('mouseout', () => {
        avatar.src = 'assets\\avataaars.svg';
    })
});

