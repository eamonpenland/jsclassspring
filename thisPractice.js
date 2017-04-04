/* Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	4. logs the current photo name.
	4. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.
*/

function nextPic() {
  let list = this.photoList;

  if(this.currentPhotoIndex < list.length - 1){
    this.currentPhotoIndex ++
    console.log(list[this.currentPhotoIndex])
  } else {
    console.log('End of slideshow!!');
  }
}

function prevPic() {
  let list = this.photoList;

  if(this.currentPhotoIndex > 0){
    console.log(this.currentPhotoIndex);
    this.currentPhotoIndex --
    console.log(this.currentPhotoIndex);
    console.log(list[this.currentPhotoIndex])
  }else{
    console.log('Beginning of slideshow')
  }
}

function currentPic() {
  let photoIndex = this.currentPhotoIndex;
  let list = this.photoList

  console.log(list[photoIndex]);
}

let slideshow = {
  photoList: ['xmas', 'dinner', 'vacation'],
  currentPhotoIndex: 1,
  nextPhoto: nextPic,
  prevPhoto: prevPic,
  getCurrentPhoto: currentPic
}
