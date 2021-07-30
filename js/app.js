let handle=prompt("Enter you codeforces handle");

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}
var winsound= new sound("audio/win.wav");
var losesound= new sound("audio/lose.wav");
function fn1(){
    fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`)
        .then(res=>{
            return res.json();
            })
        .then(data=>{
            console.log(data);
            if(data.status==="OK"){
                console.log(data.result[0].verdict);
                if(data.result[0].verdict=="TESTING"){
                    document.getElementById("div").innerText+=".";
                    setTimeout(100,fn1());
                }
                else if(data.result[0].verdict=="OK"){
                    winsound.play();
                    alert(`Last Submission: ${data.result[0].verdict}`);
                }
                else{
                    losesound.play();
                    alert(`Last Submission: ${data.result[0].verdict}`);
                }
            }
        })
        .catch(e=>{
            console.log("err",e);
        })
}