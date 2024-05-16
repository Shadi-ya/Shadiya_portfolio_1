
 let prevScrollPos = window.scrollY;

 window.onscroll = function () {
     let currentScrollPos = window.scrollY;

     if (prevScrollPos > currentScrollPos) {
         document.querySelector('.navbar').style.top = '0';
         document.querySelector('.navbar').style.backgroundColor = 'black';
     } else {
         document.querySelector('.navbar').style.top = '-150px'; 
     }

     prevScrollPos = currentScrollPos;
    
 }


