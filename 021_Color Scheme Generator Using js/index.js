    let colorEl = document.getElementById('color')
    let colortypeEl = document.getElementById('color_type')

    let color2 = document.getElementById('color2')
    let color3 = document.getElementById('color3')
    let color4 = document.getElementById('color4')
    let color5 = document.getElementById('color5')

    document.getElementById('get_color_btn').addEventListener('click',function(){
   
    let getcolor = colorEl.value.substring(1)
    let getcolortype = colortypeEl.value
    
    console.log(getcolor)
    console.log(getcolortype)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${getcolor}&mode=${getcolortype}&count=5`)
    .then(response => response.json())
    .then(data => {
        
         document.getElementById('color1').style.backgroundColor = data.colors[0].hex.value
         document.getElementById('color2').style.backgroundColor = data.colors[1].hex.value
         document.getElementById('color3').style.backgroundColor = data.colors[2].hex.value
         document.getElementById('color4').style.backgroundColor = data.colors[3].hex.value
         document.getElementById('color5').style.backgroundColor = data.colors[4].hex.value
         
         document.getElementById('d1').innerHTML = data.colors[0].hex.value     
         document.getElementById('d2').innerHTML = data.colors[1].hex.value     
         document.getElementById('d3').innerHTML = data.colors[2].hex.value     
         document.getElementById('d4').innerHTML = data.colors[3].hex.value     
         document.getElementById('d5').innerHTML = data.colors[4].hex.value     
         
    })
       
    
        })

            
const answer = document.getElementById("copyResult");
const copy  = document.getElementById("d1");
const selection = window.getSelection();
const range = document.createRange();

copy.addEventListener('click', function(e) {
    range.selectNodeContents(copy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
      setTimeout(()=>{
      answer.innerHTML = "👇 Click To Copy 👇"
      },4000)
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
})

const copy2  = document.getElementById("d2");

copy2.addEventListener('click', function(e) {
    range.selectNodeContents(copy2);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
      setTimeout(()=>{
      answer.innerHTML = "👇 Click To Copy 👇"
      },4000)
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
})



const copy3  = document.getElementById("d3");

copy3.addEventListener('click', function(e) {
    range.selectNodeContents(copy3);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
      setTimeout(()=>{
      answer.innerHTML = "👇 Click To Copy 👇"
      },4000)
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
})


const copy4  = document.getElementById("d4");

copy4.addEventListener('click', function(e) {
    range.selectNodeContents(copy4);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
      setTimeout(()=>{
      answer.innerHTML = "👇 Click To Copy 👇"
      },4000)
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
})


const copy5  = document.getElementById("d5");

copy5.addEventListener('click', function(e) {
    range.selectNodeContents(copy5);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
      setTimeout(()=>{
      answer.innerHTML = "👇 Click To Copy 👇"
      },4000)
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
})


