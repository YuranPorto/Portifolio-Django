// ------------ Encontrar os icones ------------------

var html5Icon = document.querySelector(".htmlIcon");
var css3Icon = document.querySelector(".cssIcon");
var pythonIcon = document.querySelector(".pythonIcon");
var djangoIcon = document.querySelector(".djangoIcon");
var gitIcon = document.querySelector(".gitIcon");
var githubIcon = document.querySelector(".githubIcon");

// ------------ Encontrar textos
var text = document.querySelector("#mainText"); // Texto inicial

// -------------------  HTML5 -----------------------------

html5Icon.addEventListener("mouseover", function(){
    var html5Text = document.querySelector("#html5Text")
    text.classList.toggle('oculto');
    html5Text.classList.toggle('oculto');
});

html5Icon.addEventListener("mouseout", function(){ // Sumir o texto
    var html5Text = document.querySelector("#html5Text")
    text.classList.toggle('oculto');
    html5Text.classList.toggle('oculto')
});

// ------------------- Css3 -------------------------------

css3Icon.addEventListener("mouseover", function(){
    var css3Text = document.querySelector("#css3Text")
    text.classList.toggle('oculto');
    css3Text.classList.toggle('oculto')
});

css3Icon.addEventListener("mouseout", function(){ // Sumir o texto
    var css3Text = document.querySelector("#css3Text")
    text.classList.toggle('oculto');
    css3Text.classList.toggle('oculto')
});

// ------------------- Python -----------------------------

pythonIcon.addEventListener("mouseover", function(){
    var pythonText = document.querySelector("#pythonText")
    text.classList.toggle('oculto');
    pythonText.classList.toggle('oculto')
});

pythonIcon.addEventListener("mouseout", function(){ // Sumir o texto
    var pythonText = document.querySelector("#pythonText")
    text.classList.toggle('oculto');
    pythonText.classList.toggle('oculto')
});

// ------------------- Django -----------------------------

djangoIcon.addEventListener("mouseover", function(){
    var djangoText = document.querySelector("#djangoText")
    text.classList.toggle('oculto');
    djangoText.classList.toggle('oculto')
});

djangoIcon.addEventListener("mouseout", function(){ // Sumir o texto
    var djangoText = document.querySelector("#djangoText")
    text.classList.toggle('oculto');
    djangoText.classList.toggle('oculto')
});
// -------------------- Git -------------------------------

gitIcon.addEventListener("mouseover", function(){
    var gitText = document.querySelector("#gitText")
    text.classList.toggle('oculto');
    gitText.classList.toggle('oculto')
});

gitIcon.addEventListener("mouseout", function(){ // Sumir o texto
    var gitText = document.querySelector("#gitText")
    text.classList.toggle('oculto');
    gitText.classList.toggle('oculto')
});
// ------------------- GitHub -----------------------------

githubIcon.addEventListener("mouseover", function(){
    var githubText = document.querySelector("#githubText")
    text.classList.toggle('oculto');
    githubText.classList.toggle('oculto')
});

githubIcon.addEventListener("mouseout", function(){ // Sumir o texto
    var githubText = document.querySelector("#githubText")
    text.classList.toggle('oculto');
    githubText.classList.toggle('oculto')
});