"use strict";
if(window.isItIE9){
    (function setPlaceHolders(){
    var input = document.getElementsByTagName('input');
    if (input) {
        for (var i=0; i < input.length; i++) { 
            var inputCurrent = input[i]; 
            var placeholderText = inputCurrent.getAttribute("placeholder");
            if (placeholderText) {
                inputCurrent.value = inputCurrent.value.length > 0 ? inputCurrent.value : placeholderText;
                inputCurrent.style.color = '#888888';
                inputCurrent.onfocus = function() {
                    this.value = this.value === this.getAttribute("placeholder") ? "" : this.value;
                    this.style.color = 'inherit';
                };
                inputCurrent.onblur = function() {
                    if (this.value.length === 0) {
                        this.value = this.getAttribute("placeholder");
                        this.style.color = '#888888';
                    }
                };
            }  
        }
    }
    })();
}
document.getElementById("column-right-contacts-callback-form-button").addEventListener("click", function(e){
    var xhr = new XMLHttpRequest(),
        name = document.getElementById("column-right-contacts-callback-form-name").value,
        phone = document.getElementById("column-right-contacts-callback-form-phone").value,
        path = window.location.pathname,
        message = 'message=' + encodeURIComponent("name: "+name+", phone: "+phone+", path: "+path);
    document.getElementById("column-right-contacts-callback-form-button").innerHTML = "отправка......";
    xhr.open("GET", '/m.php?' + message, true);
    xhr.onload = function() {
        document.getElementById("column-right-contacts-callback-form-button").innerHTML = "ожидайте звонка!";
    };
    xhr.send();
    e.preventDefault();
    return false;
});

//yandex metr
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter29433435 = new Ya.Metrika({id:29433435,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol === "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera === "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
