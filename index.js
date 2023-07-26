
// ==================Contact Us====================
function Contact()
{
    ct1=document.getElementById("contact")
    console.log(ct1)
    if (ct1.style.display=="none")
    {
        ct1.style.display="block"
    }
    else{
        ct1.style.display="none"
    }
}
// =============== 3dot's menu ==========
function Bar()
{
    br=document.getElementById("bar")
    console.log(br)
    if(br.style.display=="none")
    {
        br.style.display="block"
    }
   
}
// ==========
let open=document.getElementsByClassName("open")
let close=document.getElementsByClassName("close")

for (let i=0;i<open.length;i++)
{
    open[i].addEventListener('click',()=>{fun(i)})
}
function fun(i){
    for (let j=0;j<open.length;j++)
    {
        if(i==j){continue}
        close[j].style.display='none'
    }
    if(close[i].style.display=='block'){
        close[i].style.display='none'
    }
    else{
        close[i].style.display='block'
    }
}



   

