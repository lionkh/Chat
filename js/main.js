var socket = io("http://localhost:3000/");

    
        //input message

        //mouse
        
        document.querySelector('.send').addEventListener('click', function (ev) {
            //trim() - убирает пробелы
         if(document.querySelector('.message-text').value.trim() != "") {
                ev.preventDefault();
                 document.querySelector('.message-text').style.background = "#fff";

                  if(document.querySelector('.nick').value.trim() == "")
                             {
                               var data = {
                               nickname: "Anonymus",
                              text: document.querySelector('.message-text').value }
                                }
                                    
                         else if (document.querySelector('.nick').value.trim() != "")
                         {
                            var data = {
                            nickname: document.querySelector('.nick').value,
                            text: document.querySelector('.message-text').value }  
                           }
  
                socket.emit('message', data); 
             }
      if(document.querySelector('.message-text').value.trim() == "") {
            document.querySelector('.message-text').style.background = "#FFEEE3";
      }

        });   




        //keyENTER

        document.querySelector('.message-text').addEventListener('keydown', function (e) {
                  
        if(document.querySelector('.message-text').value.trim() != "") {
          
                e = e || window.event;
                document.querySelector('.message-text').style.background = "#fff";

                    if (e.keyCode === 13)  {
                          e.preventDefault();
                       
                
                            if(document.querySelector('.nick').value.trim() == "")
                             {
                               var data = {
                               nickname: "Anonymus",
                              text: document.querySelector('.message-text').value }
                                }
                                    
                         else if (document.querySelector('.nick').value.trim() != "")
                         {
                            var data = {
                            nickname: document.querySelector('.nick').value,
                            text: document.querySelector('.message-text').value }  
                           }
  
                      socket.emit('message', data);
                  }

          }
           if(document.querySelector('.message-text').value.trim() == "") {
              if (e.keyCode === 13)  {
                 e.preventDefault();
                 document.querySelector('.message-text').style.background = "#FFEEE3";
              }
                 }
              
        });

     

    

        socket.on('connect', function(){
          console.log("Соединение установлено");

        });

         socket.on('disconnect', function(){
          console.log("Соединение потеряно");
            // document.querySelector('.primary-page').style.display = "none";
             reconnect();

        });

        function reconnect() {
              socket.once('connect_error', function () {
                setTimeout(reconnect, 400);
              });
              socket.connect();
          };

        socket.on('new message', function(data){

          let li = document.createElement('li');
          li.textContent = data.nickname +": " + data.text;
          li.classList.add('message');
          document.querySelector('.message-text').value = "";

          document.querySelector('.messagebox').appendChild(li);

          var scrollinDiv = document.querySelector('.messagebox');
                   
                scrollinDiv.scrollTop = 9999;
         
        })