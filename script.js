bug = document.querySelector('.bug')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightbar=document.querySelector('.rightbar')




bug.addEventListener('click',()=>{
    rightbar.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})