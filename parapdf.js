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


document.getElementById('pag').addEventListener('click', function() {


        const np = leerCookie("nape");

        html2canvas(document.getElementById('pag')).then(function(canvas) {
            // Convertir el canvas a una imagen JPG
            var imgData = canvas.toDataURL('image/jpeg');

            // Crear un enlace para descargar la imagen
            var link = document.createElement('a');
            link.href = imgData;
            link.download = np + ".jpg";
            link.click();
        });
    });