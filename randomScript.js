var userinfo = {name :"" , image:"", username:""};
var changepic = function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
        userinfo.name = data.results[0].name.first;
        userinfo.image = data.results[0].picture.large;
        userinfo.username=data.results[0].login.username;
        document.getElementById("image2").src= userinfo.image;
        document.getElementById("name2").innerHTML = userinfo.name;
        document.getElementById("Breed2").innerHTML=userinfo.username;
    });
}