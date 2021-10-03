
class InputsKey {

  constructor(socket){
    this.socket = socket;
    this.elementsProtoType();
    this.loadElements();
    this.initEvents()
    this.inputEventMsg()
  }

loadElements(){ // Pegando todos os elementos pelo id da chat...
   this.dataClass = {};

     document.querySelectorAll('[id]').forEach(element =>{

      this.dataClass[Format.getCamelCase(element.id)] = element ;

          })
 
  }

elementsProtoType(){ //Elementos para ajudar nas criações dos eventos ...
    Element.prototype.hide = function(){  // hide esconde
        this.style.display = 'none'
        return this;
    }
    Element.prototype.show = function(){  // showw aparece
        this.style.display = 'block'
        return this;
    }
    Element.prototype.toggle = function(){  // toggle se apaecer esconde , se escodeu aparece
        this.style.display = (this.style.display === 'none') ? 'block' : 'none';
        return this;  
    }
    Element.prototype.on = function(events, fn){  // on criando eventos de click
        events.split(' ').forEach(event =>{
          this.addEventListener(event, fn)
        })
        return this;
    }

    Element.prototype.css = function(style){  // posso criar um objeto com definiçoes css
      for(let name in styles){
        this.style[name] = styles[name]
      }
      return this
    }
    
    Element.prototype.addClass = function(name){ // adiciono uma classe com esse métodp
      this.classList.add(name)
      return this
    }

    Element.prototype.removeClass = function(name){ // removo uma classe com esse métodp
      this.classList.remove(name)
      return this
    }

    Element.prototype.toggleClass = function(name){ // se uma classe eu tiro 
      this.classList.toggle(name)
      return this
    }
    Element.prototype.hasClass = function(name){ // se uma classe eu tiro 
      return this.classList.contains(name)
  
    }
  }


initEvents(){  //eventos de div configuração e add contatos

      this.dataClass.addcontact.on('click', e =>{ // Click Div addcontatos..
        this.dataClass.contacts.toggle()
      })

      this.dataClass.settings.on('click', fn=>{  // Click Div div confirações..
        this.dataClass.contacts.toggle()

      })

      this.dataClass.profileImg.on("click", fn =>{  // add foto

        this.dataClass.photo.click()

      })

      

 }

  inputEventMsg(){  // evento de enviar mensagem
  
  const input = this.dataClass.textMessage
  const messages = this.dataClass.messages

   this.dataClass.submit.on('click',  function(e) {
     e.preventDefault();

     var li = document.createElement('li')
     var div = document.createElement("div")
     div.id='message'
     
     if(input.value && !input.value == ''){
       li.textContent = input.value;
    }
    
      messages.appendChild(div);
      div.appendChild(li) 
     input.value =''
     window.scrollTo(0, document.body.scrollHeight)
     
   });

   this.dataClass.textMessage.on('keypress' , e =>{ // enviar mensagem com enter
          if(e.key === 'Enter'){
        this.dataClass.submit.click()
            }
      }) 
  } 



  
}






