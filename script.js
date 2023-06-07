alert("Welcome Asritha's Page!!");
// consol.log("Wel!!")

var data1 = {image : "Golden_R.jpg",name : "Cooper" , Breed: "Golden Retriever"};
var data2 = {image : "Poodle.jpg",name : "Cookie" , Breed: "Poodle"};
var isdata1 = true;
var displaydata;
var changepic = function(){
    if(isdata1){
        displaydata = data2;
        isdata1=false;
    }
    else{
        displaydata = data1;
        isdata1 = true;
    }
    document.getElementById("image2").src=displaydata.image;
    document.getElementById("name2").innerHTML=displaydata.name;
    document.getElementById("Breed2").innerHTML=displaydata.Breed;

}