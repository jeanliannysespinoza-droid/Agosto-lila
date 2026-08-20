const botaolike = document.queryselector(".like");
const botaodeslike = document.querySelector(".deslike");

botaolike.addEventListener("click", clicklike);
botaodeslike.addEventListener("click", clikdeslike);


function click () {

    console.log("fui clicado");
    let texto=botaolike.querySelector("span");
    texto1.textContent++;


}

function clickDer () {


      console.log ("ui clicado");
      let texto=botaodeslike.querySelector("span");
      texto2.textContent++;




}
