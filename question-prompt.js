function questionPrompt(question, prefill){

    var entry,questionToAsk,
        qb = document.createElement('div');
  
      document.body.appendChild(qb);

     if(question){
       questionToAsk = 'Question: ' + question;
     }else{
       questionToAsk = 'Just fill it out';
     }
  
  
      qb.outerHTML = [
     '<form id="ask-question" style="position: fixed; width: 100%; height: 100%; background-color: rgba(74, 74, 74, 0.74); z-index: 99999; top: 0px; text-align: center; line-height: 100vh;" >',
       '<span>' + questionToAsk + '</span>',
       '<input id="question-box" style="display: inline-block; width: 30%; min-width: 15em; vertical-align: initial; margin: auto;"  type="text">',
      '<button id="question-btn">Sumbit</button>',
    '</form>'].join('');
  
     var qf = document.getElementById('ask-question'),
         input = document.getElementById('question-box');
  
     if(prefill){
       input.value = prefill;
     }
  
  
     qf.addEventListener('submit', function(e){
         e.preventDefault();
         entry = input.value;
        qf.parentElement.removeChild(qf);
        console.log(input.value);
    });
}
