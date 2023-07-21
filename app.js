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

submit.addEventListener("click",function(){
    fullnameResult.innerText=`${fullname.value}`
    numberResult.innerText=`${number.value}`
    lessonResult.innerText=`${lesson.value}`
    
    
    if(note.value<=100 && note.value>=95){
        result.innerText=`A`;
    }else if(note.value<=94 && note.value>=90){
        result.innerText=`A-`;
    }else if(note.value<=89 && note.value>=86){
        result.innerText=`B+`;
    }else if(note.value<=85 && note.value>=82){
        result.innerText=`B`;
    }else if(note.value<=81 && note.value>=78){
        result.innerText=`B-`;
    }else if(note.value<=77 && note.value>=74){
        result.innerText=`C+`;
    }else if(note.value<=73 && note.value>=70){
        result.innerText=`C`;
    }else if(note.value<=69 && note.value>=63){
        result.innerText=`C-`;
    }else if(note.value<=62 && note.value>=57){
        result.innerText=`D+`;
    }else if(note.value<=56 && note.value>=51){
        result.innerText=`D`;
    }else if(note.value<=50 && note.value>=0){
        result.innerText=`F`;
    }
    else{
        result.innerText=`GEÇERSİZ NOT`;
    }
})