
function direita(elemento){
  $(elemento).animate(
    {
      left: "+=750"
    }, 500, function(){
      esquerda(elemento)
    }
  )
}

function esquerda(elemento){
  $(elemento).animate(
    {
      left: "-=750"
    }, 500, function(){
      direita(elemento)
    }
  )
}

function emcima(elemento){
  $(elemento).animate(
    {
      top: "-=400"
    }, 500, function(){
      embaixo(elemento)
    }
  )
}

function embaixo(elemento){
  $(elemento).animate(
    {
      top: "+=400"
    }, 500, function(){
      emcima(elemento)
    }
  )
}


$(function(){
  var vezesPressionada=0;
  var posHorizontal;
  var posVertical;
  $(document).on("keypress",function(e){

    if (e.which==32) {
      e.preventDefault();
      vezesPressionada++;
      if (vezesPressionada==1) {
        direita($("#fHorizontal"));
      }else if (vezesPressionada==2) {
        $("#fHorizontal").stop();
        emcima($("#fVertical"));
      }else if (vezesPressionada==3) {
        $("#fVertical").stop();
        posHorizontal = $("#fHorizontal").css("left");
        posVertical = $("#fVertical").css("top");
      }
    }
  })

  $("#bola").on("click", function(){
    $(this)
    .animate(
      {
        top: posVertical,
        left: posHorizontal
      },600)
      .animate(
          {
            width: "-=70"
          },
          {
            step: function(now){
              $(this).css("transform","rotate("+now*10+"deg)")
            },
            queue: false,
            duration: 1200
          }
        )
      .delay(1000)
      .animate(
        {
          top: "400px"
        }, 1000
      )

  });




});
