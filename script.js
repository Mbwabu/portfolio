const bouton=document.querySelector('.btn');
const tout=document.querySelector('.tout');
const desa=document.querySelector('.aucun');
   
bouton.addEventListener('click', function() {  
         tout.style.display='flex';
      });
         desa.addEventListener('click',function(){
            tout.style.display='none';  
});