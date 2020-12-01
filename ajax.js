var pgc=1;
var animal= document.getElementById("animals");
var btn= document.getElementById("btn")

btn.addEventListener("click", function(){
    var req= new XMLHttpRequest();
    req.open('GET','https://learnwebcode.github.io/json-example/animals-1.json',true);
    req.onload= function(){
        if(req.status>=200 && req.status<400)
        var odata= demo.parse(req.responseText);
        render(odata);
    };
    req.send();
    pgc++;
    if(pgc>3){
        btn.classList.add("hide");
    };
});
function render(data){
    var htmlString = "";

    for(i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + "is a" + data[i].species + ".</p>";
    }
    animal.insertAdjacentHTML('beforeend',htmlString);
}


