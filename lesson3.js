const images = [
    '🤖','🤖', "🎚️","🎚️","🦾","🦾",'🦿','🦿','🔘','🔘','📡','📡','👨🏽‍💻','👨🏽‍💻','💡','💡'
]
var shuf_images = images.sort(()=> (Math.random()> .5)? 2: -1);
for ( var i=0; i<images.length; i++){
    let box= document.createElement('div')
    box.className='item';
    box.innerHTML = shuf_images[i]


    box.onclick= function(){
        this.classList.add('boxOpen')
        setTimeout(function(){
if(document.querySelectorAll('.boxOpen').length>1){
    if(document.querySelectorAll('.boxOpen')[0].innerHTML== document.querySelectorAll('.boxOpen')[1].innerHTML){
        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
        document.querySelectorAll('.boxOpen')[0].classList.add('boxOpen')

        if(document.querySelectorAll('.boxMatch').length== images.length){
            alert('win')
        }
    }else{
        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen') 
    }
}
        },500)
    }
    document.querySelector('.game').appendChild(box);


}