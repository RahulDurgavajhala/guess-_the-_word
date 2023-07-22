var score = 0
function UTS(){
    score = score+1

}
function Save_score(){
    localStorage.setItem("score" , score)
}
function Next_page(){
window.location ="activity_2.html"
}
