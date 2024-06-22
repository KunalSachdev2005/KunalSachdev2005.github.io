/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  console.log("mouseover event triggered");
  console.log("Source: " + previewPic.src);
  console.log("Alt: " + previewPic.alt);
  var imagediv = document.getElementById("image");
  imagediv.innerHTML = previewPic.alt;
  imagediv.style.backgroundImage = 'url("'+ previewPic.src + '")';
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    
    console.log("Hi undo");
    var imagediv = document.querySelector("#image");
    imagediv.style.backgroundImage = 'url("")';
    imagediv.innerHTML = "Hover over an image below to display here";
		
	}
	
	function addTabIndex() {
		console.log("Adding Tab Index to Images");
		const images = document.querySelectorAll('.preview');
		for (let i = 0; i < images.length; i++) {
			images[i].setAttribute('tabindex', 0);
		}
	}
	
	window.onload = addTabIndex;