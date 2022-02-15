
export default class GeoTiffViewer{
	
	constructor(image_div){
		this._imageArray = new Array();
		this._assetArray;
		this._imageDiv = image_div;
		this._currentIndex = 0;
		this._currentSize = 0;
		
	}

	/**
	 * Displays the given array in the app
	 * Takes in the imageURL and then fetches the url from 
	 * the STAC sever to display to the user
	 * */
	addPhotoToGallary(imageURL){

		;(async function() {
			const response = await fetch(imageURL)
			const blob = await response.blob()

			const url = URL.createObjectURL(blob.slice(0, 4000))

			const image = new Image()
			image.src = url

			image.style.width = 'auto';
    		image.style.height = '700px';
    		image.style.alignContent = "center";
    		image.style.margin = "0 auto";
    		image.style.display = "block";
			document.getElementById(this._imageDiv).src=image.src
		})()
	}


	/**
	 * Closes and opens the photo viewer
	 * */
	closeViewer(){
		var x = document.getElementById("geoTiffContainer");
  		if (x.style.display === "none") {
    		x.style.display = "block";
  		} else {
    		x.style.display = "none";
  		}

	}


	/**
	 * The link that will take the user to the asset catalogue page
	 * in the stac server
	 * */ 
	updateURL(){

	}
}