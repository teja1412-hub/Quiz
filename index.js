var quizdata=[
    {
        question:'Which framework is related to JS?',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'c'
    },
    {
        question:'Which is not a programming language?',
        a:'html',
        b:'python',
        c:'java',
        d:'js',
        correct:'a'
    },
    {
        question:'Which is not a framework?',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question:'CSS stands for?',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none of the above',
        correct:'b'
    }
]

var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submit=document.getElementById('submit')
var currentques=0
var quizscore=0

loadquiz()

function loadquiz(){
    deselect()
    question.innerHTML=quizdata[currentques].question
    option_a.innerText=quizdata[currentques].a
    option_b.innerText=quizdata[currentques].b
    option_c.innerText=quizdata[currentques].c
    option_d.innerText=quizdata[currentques].d

}

function deselect(){
    // '=>' is belongs to operator
    answer.forEach(answer=>answer.checked=false)
}

submit.addEventListener('click', ()=>{
    var selectedopt;

    answer.forEach(answer=>{
        if(answer.checked){
            selectedopt=answer.id
        }
    })
    if(selectedopt==quizdata[currentques].correct){
        quizscore+=1
    }
    currentques+=1
    if(currentques==quizdata.length){
        //variable interpolation ${var_name} needs to be enclosed in backticks ` ` only. Doesn't work in single quotes ' ' or any other.
        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quizscore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadquiz()
    }
})