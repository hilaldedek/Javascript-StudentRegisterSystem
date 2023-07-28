const fullname=document.getElementById("fullname");
const number=document.getElementById("number");
const lesson=document.getElementById("lesson");
const note=document.getElementById("note");
const photo=document.getElementById("photo");
const submit=document.getElementById("submit");
const fullnameResult=document.getElementById("fullnameResult");
const result=document.getElementById("noteResult");
const numberResult=document.getElementById("numberResult");
const lessonResult=document.getElementById("lessonResult");
const photoResult=document.getElementById("photoResult");
const studentUl=document.getElementById("ul");
const person=[];
var personnote="";
var counter=0;
submit.addEventListener("click",function(){
    counter++;
    // fullnameResult.innerText=`${fullname.value}`
    // numberResult.innerText=`${number.value}`
    // lessonResult.innerText=`${lesson.value}`
    
    if(note.value<=100 && note.value>=95){
        personnote="A";
    }else if(note.value<=94 && note.value>=90){
        personnote="A-";
    }else if(note.value<=89 && note.value>=86){
        personnote="B+";
    }else if(note.value<=85 && note.value>=82){
        personnote="B";
    }else if(note.value<=81 && note.value>=78){
        personnote="B-";
    }else if(note.value<=77 && note.value>=74){
        personnote="C+";
    }else if(note.value<=73 && note.value>=70){
        personnote="C";
    }else if(note.value<=69 && note.value>=63){
        personnote="C-";
    }else if(note.value<=62 && note.value>=57){
        personnote="D+";
    }else if(note.value<=56 && note.value>=51){
        personnote="D";
    }else if(note.value<=50 && note.value>=0){
        personnote="F";
    }
    // result.innerText=`${personnote}`;
    person.push(fullname.value,number.value,lesson.value,note.value,personnote);
    console.log(person);
    localStorage.setItem(`data${counter}`,person);
    function printLi(personnote){
        console.log(personnote);
        const li=document.createElement("li");
        const p = document.createElement("p");
        const pTextNode = document.createTextNode(person);
        p.appendChild(pTextNode);
        console.log(pTextNode);
        li.appendChild(p);
        studentUl.appendChild(li);
        console.log(li);
}
    printLi();
    for (var i = person.length; i > 0; i--) {
        person.pop();
       }
})
