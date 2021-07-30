let handle=prompt("Enter you codeforces handle");
fn1();
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
                else{
                    console.log(data.result[0].verdict);
                    alert(data.result[0].verdict);
                }
            }
        })
        .catch(e=>{
            console.log("err",e);
        })
}