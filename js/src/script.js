"use strict";
document.getElementById("column-right-contacts-callback-form-button").addEventListener("click", function(e){
    var xhr = new XMLHttpRequest(),
        name = document.getElementById("column-right-contacts-callback-form-name").value,
        phone = document.getElementById("column-right-contacts-callback-form-phone").value,
        path = window.location.pathname,
        message = 'message=' + encodeURIComponent("name: "+name+", phone: "+phone+", path:"+path);
    document.getElementById("column-right-contacts-callback-form-button").innerHTML = "отправка......";
    xhr.open("GET", 'm.php?' + message, true);
    xhr.onload = function() {
        document.getElementById("column-right-contacts-callback-form-button").innerHTML = "ожидайте звонка!";
    };
    xhr.send();
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
