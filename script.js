let input=document.getElementById('input');
let button = document.querySelectorAll('button');
let str="";
let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>
    {   let value = e.target.innerHTML;
        if(value === '=')
        {  try{
            str = eval(str);
            input.value=str;
            str=input.value;
        }
        catch(error){
            input.value= "Error";
        }
        }
        else if(value === 'AC'){
           str="";
           input.value=str;
        }
        else if(value === 'Del'){
            str = str.substring(0, str.length-1)
            input.value=str;
        }
        else{
            str +=value;
            input.value=str;
        }
    });
});