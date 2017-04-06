var students = [
	{firstName: 'Cam', lastName: 'Newton', gradeLevel: 7, quizScores: [57, 0, 92, 95]},
	{firstName: 'Derek', lastName: 'Anderson', gradeLevel: 9, quizScores: [86, 89, 90, 83]},
	{firstName: 'Jonathan', lastName: 'Stewart', gradeLevel: 10, quizScores: [73, 79, 91, 88]},
	{firstName: 'Mike', lastName: 'Tolbert', gradeLevel: 4, quizScores: [40, 71, 70, 86]},
	{firstName: 'Fozzy', lastName: 'Whittaker', gradeLevel: 6, quizScores: [69, 71, 68, 61]},
	{firstName: 'Ted', lastName: 'Ginn', gradeLevel: 7, quizScores: [99, 85, 96, 93]},
	{firstName: 'Devin', lastName: 'Funchess', gradeLevel: 3, quizScores: [75, 63, 68, 65]}
];

let a = students.find(student => {
  return student.lastName === 'Ginn'
})

let b = students.filter(student => {
  return student.gradeLevel === 7
});

let c = students.map(student => {
  return student.lastName
})


let d = students.filter(student => {
  let sum = student.quizScores.reduce((a, b) => {
    return a + b
  }, 0)
  let avg = sum / student.quizScores.length
  return avg >= 70
}).map(student => `${student.firstName} ${student.lastName}`)


let e = students.filter(student => {
  return student.gradeLevel > 5
}).map(student => {
  return student.quizScores.reduce((a, b) => {
    return a + b
  }) / student.quizScores.length
})


add a shuffle function that randomly plays different photoList names at an interval set by the user


var slideshow = {
  photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
  currentPhotoIndex: 0,
  next: function() {
    if(this.currentPhotoIndex < this.photoList.length -1){
      console.log('currentPhoto is: ', this.photoList[this.currentPhotoIndex])
      this.currentPhotoIndex ++;
    }else {
      console.log('End of Slideshow!!!!')
      this.pause()
    }
  },
  prev: function() {
    if(this.currentPhotoIndex > 0){
      console.log('currentPhoto is: ', this.photoList[this.currentPhotoIndex]);
      this.currentPhotoIndex --;
    }else{
      console.log('Start of slideshow')
      this.pause()
    }
  },
  currentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  },
  playInterval: null,
  play: function(x) {
    let time = x ? x : 2000;
    this.playInterval = setInterval(() => {
      this.next()
    }, time)
  },
  pause: function() {
    clearInterval(this.playInterval);
  },
  add: function(name) {
    this.pause()
    this.photoList.concat([name])
  },
  goto: function(index) {
    this.pause()
    this.currentPhotoIndex = index
  },
  delete: function(index){
    let photos = this.photoList
    let newArr = photos.splice(index, 1)
    this.photoList = photos;
  },
  shuffle: function(x) {
    setInterval(() => {
      let arr = this.photoList;
      let position = parseInt(Math.random() * arr.length)
      this.currentPhotoIndex = position
      console.log(arr[position]);
    }, x)
  }
}
