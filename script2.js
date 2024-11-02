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

         const form2 = document.getElementById('form2')
               event.preventDefault();
               const nape = document.getElementById('nape').value;
               const edad = document.getElementById('edad').value;
               const sexo = document.getElementById('sexo').value;
               const raza = document.getElementById('raza').value;

               const fechanf = document.getElementById('fechanf').value;
               const fechasgb = document.getElementById('fechasgb').value;
               const fechaing = document.getElementById('fechaing').value;
               const seletapev = document.getElementById('seletapev').value;
               const progresion = document.getElementById('progresion').value;
               const estabilizacion = document.getElementById('estabilizacion').value;
               const recuperacion = document.getElementById('recuperacion').value;
               const telefono = document.getElementById('telefono').value;


               const fechaExpiracion = new Date();
               fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 10); // 10 años en el futuro
               const expires = "expires=" + fechaExpiracion.toUTCString();

               // Guardar datos
               document.cookie = "nape=" + nape + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "edad=" + edad + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "sexo=" + sexo + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "raza=" + raza + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "fechanf=" + fechanf + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "fechasgb=" + fechasgb + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "fechaing=" + fechaing + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "seletapev=" + seletapev + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "progresion=" + progresion + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "estabilizacion=" + estabilizacion + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "recuperacion=" + recuperacion + ";" + expires + ";path=/;SameSite=Lax";
               document.cookie = "telefono=" + telefono + ";" + expires + ";path=/;SameSite=Lax";

               document.location="./eval.html";

      }
