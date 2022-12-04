let input=document.getElementById("input");
let btn=document.getElementById("btn");
let list=document.getElementById("list");

let textField;
let textFieldArray= [];

function storeLocalStorage(){
    localStorage.setItem("todo",JSON.stringify(textFieldArray));
}
function retriveLocalStroage()
{
    if(localStorage.getItem("todo")){
    textFieldArray=JSON.parse(localStorage.getItem("todo"));
    buildUI();
      }

}
function buildUI(){
    list.textContent="";
    let newArray='';
    textFieldArray.forEach((element,index) =>{
        newArray += `<li> ${element} <span id="fa" onclick="deleteTask(${index})";> <i class="fa fa-trash"></i></span></li>`;
        list.innerHTML = newArray;
        input.value=" ";
        
    })


}
function addList(){
let abcd=input.value.trim();
let string=/[!@#$%^<>&*+{}]+/;
if(abcd.length==0){

    alert("Please Enter Your List");
    return false;
}
else if(abcd.length<4 ){
    alert("Minimum length 4 word");
    return false;

}   
else if(abcd.length>200)
{
    alert("Maximum length 200 word");
    return false;

}
else if(string.test(abcd))
{
    alert("no special");
    return false;
}

            //add input to textfield

     textField=abcd;
     textFieldArray.push(textField);
     input.value="";
     input.focus();

    // store data into LocalStoage 
    storeLocalStorage();
    //console.log(textfield);

    //retrive data from localstorage
    retriveLocalStroage();
    //item.textContent="";
  
}

//Delete Function

function deleteTask(index){
    let getLocalstorage=localStorage.getItem("todo");
    textFieldArray=JSON.parse(getLocalstorage);
   textFieldArray.splice(index,1)

    localStorage.setItem("todo",JSON.stringify(textFieldArray));
    buildUI();
}
function deleteallof(){
textFieldArray=[];
       localStorage.setItem("todo",JSON.stringify(textFieldArray));
        buildUI();
}

    retriveLocalStroage();


btn.addEventListener("click",addList);
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {    
      btn.click();
      
    }
  });
 