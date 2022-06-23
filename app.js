                   
// get all elements


const product_form=document.getElementById('product_form')
const msg=document.querySelector('.msg')
const shop_modal=document.getElementById('shop_modal')

// Submit product form 

product_form.onsubmit=(e)=>{

 e.preventDefault();
  
// get form data form FormData object 
 let form_data = new FormData(e.target)
 let {name,price,photo,quantity} = Object.fromEntries(form_data.entries());
 let alldata = Object.fromEntries(form_data.entries());
 





          
// form validation

if(!name||!price||!photo||!quantity){

       msg.innerHTML=setAlert('All Filled are requards')

}else{
   
    msg.innerHTML=setAlert('Data stable','info')
    e.target.reset();

   





   createLSData('product',alldata)

    //  setTimeout(() => {
        
    //      msg.innerHTML=setAlert('All is Done','warning')

    //  }, 1200);
    //  setTimeout(() => {
        
    //      e.target.reset();

    //  },2000);
}
console.log(ar);

}


















































