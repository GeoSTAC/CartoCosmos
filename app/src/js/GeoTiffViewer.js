
export default class GeoTiffViewer{
	
	/**
	 * @function GeoTiffViewer.constructor
	 * @description Create the geoTiff Viewer using a given div inside the app
	 * @parm {String} [image_div - Name of the GeoTiffViewer div
	 * */
	constructor(image_div){
		this._imageArray = new Array();
		this._assetArray;
		this._imageDiv = image_div;
		this._currentIndex = 0;
		this._currentSize = 0;
		
	}

	/**
	 * @function GeoTiffViewer.addPhotoToGallery
	 * @description Gets passed a link of an image and then
	 * 		displays it the user off to the side of the CartoCosmos map
	 * @parm {String} [imageURL - Url address of the given image
	 * */
	addPhotoToGallery(imageURL){

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
	 * @function GeoTiffViewer.closeViewer
	 * @description Closes the viewer by changing the div from block to non,
	 * 		can be used to display the div as well.
	 * */
	closeViewer(){
		var x = document.getElementById("geoTiffContainer");
  		if (x.style.display === "none") {
    		x.style.display = "block";
  		} else {
    		x.style.display = "none";
  		}

	}


}