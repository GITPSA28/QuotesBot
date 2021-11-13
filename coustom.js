const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("#bgimage");
const quotetext=document.querySelector('#quote');
var colorPicker;
var defaultColor = "#ffffff";
colorPicker = document.querySelector("#colorPicker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.select();
function updateFirst(event) {
    quotetext.style.color = event.target.value;
  }
customBtn.addEventListener('click',defaultBtnActive);
function defaultBtnActive(){
           defaultBtn.click();
         }
defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
        const result = reader.result;
        img.src = result;
         }
           
        reader.readAsDataURL(file);
    }
          
 });