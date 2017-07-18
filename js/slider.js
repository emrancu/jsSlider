 

/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me

*/


 "use strict";

var slider= (function() {

// variable defining
 var i,lastItem,activeItem,firstItem,element,next,prev,autoplayInterval;


// add class to any elements

var addClass = function(elements, className) {
	for (i = 0; i < elements.length; i++) {
		  element = elements[i];
		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
	}
}



// remove class from any elements

var  removeClass= function(elements, className) {
	for ( i = 0; i < elements.length; i++) {
		element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}


// check a class exist or not


var hasClass=function(selector){

	if (selector.classList.contains('active')) {
 	return true;
	}
return false;
}




function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.zIndex = "-1";
    } else {
     setTimeout(function(){ requestAnimationFrame(fade);
 
     }, 100);

    }
  })();
}





// check next target  element exist or not

var checkNextElement =  function(selector){
	if(selector.nextElementSibling){
		return selector.nextElementSibling;
	}

	return false;
}



// check previous target  element exist or not

var checkPrevElement  =  function(selector){
	if(selector.previousElementSibling){
		return selector.previousElementSibling;
	}

	return false;
}



// check active item exist or not 
//if item is not active then add active class

var checkactiveItem=function(selector){

	if(!hasClass(selector)){

		addClass([selector],'active');	
	}

	return
}


var slidChangeNext=function(sliderID){

			  	 firstItem=document.querySelector(sliderID+' .item:first-child'); 
				 activeItem=document.querySelector(sliderID+' .item.active');

	 
	  next=checkNextElement(activeItem);
 
	if(next){

		 
		 removeClass([activeItem],'active');
		addClass([next],'active');

	}else{
		 
 removeClass([activeItem],'active');
addClass([firstItem],'active');

	}

return;
}



var slidChangePrev=function(sliderID){

	 
	  	 lastItem=document.querySelector(sliderID+' .item:last-child');
	  	activeItem=document.querySelector(sliderID+' .item.active');


	 prev=checkPrevElement(activeItem);

	if(prev){

		//fadeOut(selector);
		removeClass([activeItem],'active');
		addClass([prev],'active');

	}else{
removeClass([activeItem],'active');
addClass([lastItem],'active');

	}

return;
}


var slidChange=function(sliderID){

	 var selector=document.querySelector(sliderID+' .item');

	if(checkNextSlid(selsetor)){

	}

}

var eventListener=function(sliderID){


document.querySelector(sliderID+" .next").addEventListener('click',function(){
   

	   slidChangeNext(sliderID);

});

document.querySelector(sliderID+" .prev").addEventListener('click',function(){


       slidChangePrev(sliderID);

});

document.querySelector(sliderID).addEventListener('mouseover',function(){
 
 autoplaystop();

});

document.querySelector(sliderID).addEventListener('mouseout',function(){
 
   autoplayrefresh(2000,sliderID);

});

}




var autoplaystop=function(){

	 clearInterval(autoplayInterval);
	 autoplayInterval=null;
}


var autoplayrefresh=function(interrval,sliderID){
if(autoplayInterval===null){
autoplayInterval=setInterval(function(){ 
		slidChangeNext(sliderID);

	 }, interrval);
}

}




var autoplay=function(interrval,sliderID){

	autoplayInterval=setInterval(function(){ 
		slidChangeNext(sliderID);

	 }, interrval);
}







  return {
      init: function(sliderID){
      	 firstItem=document.querySelector(sliderID+' .item:first-child');
	  
       // check and add active class to first item
       checkactiveItem(firstItem); 

       	eventListener(sliderID);
    	autoplay( 3000,sliderID);

      } 
  };


})();


 

 



