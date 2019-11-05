var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Kaixo Jefe</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question
console.log(output);

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Hoy no tienes ninguna reunion</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>Cuantos trabajadores no han venido a trabajar?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 3000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Eso significa que han venido ' + (30 - input) + '  currelas a trabajar</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Quieres saber algo mas?</h1>';					      	
    setTimeout(timedQuestion, 3000);
    }   

    else if (questionNum == 2) {
      output.innerHTML = '<h1>Las maquinas estan todas en funcionamiento </h1>';
      document.getElementById("input").value = "";   
      question = '<h1>Quieres saber algo mas?</h1>';					      	
      setTimeout(timedQuestion, 3000);
      } 

      else if (questionNum == 3) {
        output.innerHTML = '<h1>Los pedidos llegaran todos a tiempo </h1>';
        document.getElementById("input").value = "";   
        question = '<h1>Quieres saber algo mas?</h1>';					      	
        setTimeout(timedQuestion, 3000);
        }

        else if (questionNum == 4) {
          output.innerHTML = '<h1>Todos los correos los a contestado Mari Carmen, a las 10:30h se pasara por tu despacho para informarte </h1>';
          document.getElementById("input").value = "";   
          question = '<h1>Quieres saber algo mas?</h1>';					      	
          setTimeout(timedQuestion, 3000);
          }
        
        else if (questionNum == 5) {
          output.innerHTML = '<h1>Vale, que tengas un dia productivo </h1>';
          //document.getElementById("input").value = "";   
          //question = '<h1>Quieres saber algo mas?</h1>';					      	
          //setTimeout(timedQuestion, 2000);
          } 
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
