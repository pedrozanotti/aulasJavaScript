var textoH1 = document.getElementById("titulo")
alert (textoH1.textContent)
textoH1.className="vermelha"
textoH1.textContent= "Texto alterado pelo JS"

var textoH2 = document.getElementsByTagName("h2")[0]
alert (textoH2.textContent)

var textoLi = document.getElementsByTagName("li")[3]
alert (textoLi.textContent)

var textoClasseVerde = document.getElementsByClassName ("verde")

for (var posicao=0; posicao<textoClasseVerde.length; posicao++) {
    alert (textoClasseVerde[posicao].textContent)
}

var textoLiVerde = document.querySelectorAll("li.verde")
for (var i=0; i<textoLiVerde.length; i++) {
    alert ("Conteúdo pego querySelector- "+textoLiVerde[i].textContent)
}