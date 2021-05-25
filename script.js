// test js by alert("worked");

// Ripple button effect by mrlaboratory
var buttons = document.querySelectorAll('.ripple');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';
    console.log(this);
    circle.classList.add('rippleff');
}

var alrtaudio = new Audio('https://mrlaboratory.github.io/the-best-blogger-template/sound/alert.mp3');
$(".generate").on("click",function(){
    var ilink = $(".input").val();
    var linkk = ilink.split('/');
    var lilik = linkk[5];	
    if(lilik==undefined){
        notify("This is not  link of Google Drive");
alrtaudio.play();
    }else{
        var newLink = "https://drive.google.com/uc?id="+lilik+"&export=download#mrlaboratory";
    $(".output").val(newLink);
    notify("link generated")
    }
    

})

$(".copyLink").on("click",function(){
    var copyUrl = $(".output").val();
    navigator.clipboard.writeText(copyUrl);
    notify("link Copied")
})

function notify(text){
$("#notifyc").text(text);
$(".notify").animate({left: '50px'}).delay(1500).animate({left: '-250px'});
}

