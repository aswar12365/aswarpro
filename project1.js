var jeu=document.getElementById("jeu")
var a=document.getElementsByClassName("a")
var palyers=["x","o"]
var palyer=palyers[0]
var gameOver=false
//element to show the result of the role
var result=document.createElement("h2")
result.id="result"
result.textContent="X turn!"
jeu.after(result)
//The matrix containing the winning combinations
var arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWin(palyer){
for(var i=0;i<arr.length;i++){
var [x,y,z]=arr[i]
 if(a[x].textContent===palyer &&
 a[y].textContent===palyer && 
a[z].textContent===palyer ){
return true
 }
 }
 return false
}
function checkTie(){
    var res=true
    $(".a").each(function(){
    if($(this).text()===""){
    res=false 
    }
    })
    return res
    }   
    $(".a").on("click",function(){
    if($(this).text()!==""||gameOver){
    return
    }
    $(this).text(palyer)
    if(checkWin(palyer)){
    $("#result").text("game over!"+" "+palyer+" "+"wins!")
    gameOver=true    
    }else{
        if(palyer === palyers[0]){
            palyer=palyers[1]
            }else {palyer=palyers[0]}      
              $("#result").text(palyer+" turn !")
    }
    })

 function restartButton(){
    for(var i=0;i<a.length;i++){
        a[i].textContent=""
    }
    result.textContent="x's turn "
    palyer=palyers[0]
    gameOver=false
 }
 