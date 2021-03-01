function timer(){
    var min = document.getElementById("min")
    var min2 = document.getElementById("min2")
    var sec2 = document.getElementById("sec2")
    var wa = document.getElementById("wa")
    var timer = {
        min: min2.value,
        sec: sec2.value
    }
    
    if(min2.value != "" && sec2.value != ""){

        firebase.database().ref("Quiz/Timer").set(timer)

        min2.value = ""
        sec2.value = ""
    }
    
}


function opt(){
    document.getElementById("done").style.display = "none"
    document.getElementById("op").style.display = "none"
}

function quiz(){
    var question = document.getElementById("question")
    var opt1 = document.getElementById("opt1")
    var opt2 = document.getElementById("opt2")
    var opt3 = document.getElementById("opt3")
    var opt4 = document.getElementById("opt4")
    var correct = document.getElementById("correct")
    var quiz = {
        question: question.value,
        option: [opt1.value, opt2.value, opt3.value, opt4.value],
        correct: correct.value
    }
    
    if(question.value != "" || opt1.value != "" || opt2.value != "" || opt3.value != "" || opt4.value != "" || correct.value != ""){
        question.value = ""
        opt1.value = ""
        opt2.value = ""
        opt3.value = ""
        opt4.value = ""
        correct.value = ""

        var key = firebase.database().ref("Quiz/All").push(quiz).key
        console.log(key)
    }

    var data = firebase.database().ref("Quiz/All/" + key + "/question").once("value", function(data){
        var que = document.getElementById("que")
        var a = document.createTextNode(data.val())
        var list = document.createElement("p")
        list.appendChild(a)
        que.appendChild(list)
    })

    var data = firebase.database().ref("Quiz/All/" + key + "/option").once("value", function(data){
        var que = document.getElementById("que")
        var a = document.createTextNode(data.val())
        var list = document.createElement("p")
        list.appendChild(a)
        que.appendChild(list)
    })

    var data = firebase.database().ref("Quiz/All/" + key + "/correct").once("value", function(data){
        var que = document.getElementById("que")
        var a = document.createTextNode(data.val())
        var list = document.createElement("p")
        list.appendChild(a)
        que.appendChild(list)
    })
}