 let barImg=document.getElementById('bar');
 let sidebar=document.getElementById('sidebar-main')
 let cross=document.querySelector('.cross')


 barImg.addEventListener('click',function(){
sidebar.classList.toggle('sidebar-mainn')
 })

 cross.addEventListener('click',function(){
sidebar.classList.remove('sidebar-mainn')
 })