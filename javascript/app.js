
alert("Hello there animal lover!");


var favouriteDogBreed = prompt('Do you like German shepard or Bulldog?')
var getFavouriteDogBreed = function(){
    while (favouriteDogBreed !== 'German shepard' && favouriteDogBreed != 'Bulldog') {
        alert('Please write either German shepard or Bulldog');
        favouriteDogBreed = prompt('Do you like German shepard or Bulldog?')
    }
    if (favouriteDogBreed=='German shepard'){
        dogPhoto = ("<img src='https://vetstreet.brightspotcdn.com/dims4/default/daea1bb/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2F5c%2Fa89605db40e5bfd72ff6d0e41ae2%2Fgerman-shepherd-ap-aozjlq-645.jpg' width='250px'>");
    } else if(favouriteDogBreed=='Bulldog'){
        dogPhoto = ("<img src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg' width='250px'>");
    }
    numberOfPics = prompt('How many pictures do you want?')
    var result =''
    for (var i=0; i<numberOfPics; i++){
        result += dogPhoto}
    return result
}



var adds=confirm('Do you want any add?')
var addConfirmation = function(adds) {
    if (adds==true){
        document.write("<img src='https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/8769cf44-f342-494c-b25f-cc98c9da3e82/2019/05/07/1405ded9-b87d-44d1-92b5-66a9bd59c469/5d37e2fb-44fc-471b-97ce-57bec97dcd63.png'>");
    }else{}
} 


    

 