      function leerCookie(nombre) {
            const nombreEQ = nombre + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nombreEQ) === 0) return c.substring(nombreEQ.length, c.length);
            }
            return null;
       }

      function guarda() {
         document.getElementById('form1').addEventListener('submit', function(event) {
               event.preventDefault();
               const npac = document.getElementById('npac').value;
               const ci = document.getElementById('ci').value;
               const unid = document.getElementById('unid').value;
               const prov = document.getElementById('prov').value;


               const fechaExpiracion = new Date();
               fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 10); // 10 años en el futuro
               const expires = "expires=" + fechaExpiracion.toUTCString();

               // Guardar datos
               document.cookie = "npac=" + npac + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "ci=" + ci + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "unid=" + unid + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "prov=" + prov + ";" + expires + ";path=/;SameSite=Lax";

               document.location="pacientdata.html";

         });

      }