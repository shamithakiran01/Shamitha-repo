const a=document.querySelectorAll('.slider');
var counter=0;
console.log(a);
a.forEach(
    (slider,index)=>
    {
        slider.style.top= `${index*100}%`
    }
)
const Previous=()=>
{
    counter--
    sliderrun()
}
const Next=()=>
{
    counter++
    sliderrun()
}
const sliderrun=()=>
{
    a.forEach(
            (slider)=>
        slider.style.transform=`translateY(-${counter*100}%)`
    )
}



// create a input Fileld and a button that input field will be for file uploading the file shld not be more than 4mb if the file is more thaan 4 mb it shld generate a alert msg
// images shounld slide in top to buttom