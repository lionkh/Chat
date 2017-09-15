

            document.querySelector('.nick').addEventListener('keydown', function(e) {
                if(e.keyCode===13)
                {
                    e.preventDefault();
                  document.querySelector('.primary-page').style.display = "none";
                  document.querySelector('.chat').style.display = "block";

                }

            }
            );

            document.querySelector('.pass').addEventListener('keydown', function(e) {
                if(e.keyCode===13)
                {
                    e.preventDefault();
                  document.querySelector('.primary-page').style.display = "none";
                  document.querySelector('.chat').style.display = "block";

                }

            }
            );



              
            document.querySelector('.go').addEventListener('click', function() {
              document.querySelector('.primary-page').style.display = "none";
                document.querySelector('.chat').style.display = "block";
            });
