function create(){  
    var closeButton= document.getElementsByClassName('close');    
var li = document.createElement('li');
var input=document.getElementById('input').value;
var mylist = document.getElementsByTagName('li');
var textNode = document.createTextNode(input);
li.appendChild(textNode);
if (input ===''){
    alert('cant be empty')
}
else{
    document.getElementById('ul').appendChild(li);
}
document.getElementById('input').value = "";
var span = document.createElement('span');
var txt = document.createTextNode('\u00D7');
span.className = 'close';
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function(){
        var theDiv= this.parentElement;
        theDiv.style.display = "none";
   
    }
}

var index;
for(index = 0;index < mylist.length; index++){
var span = document.createElement('span');
var txt =document.createTextNode('\u00D7');
span.className= 'close';
span.appendChild(txt);
mylist[index].appendChild(span)
for (i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function(){
        var theDiv= this.parentElement;
        theDiv.style.display = "none";
   
    }
}
}

}