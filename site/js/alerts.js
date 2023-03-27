/*!
Quizfreely (quizfreely.ehan.dev)
Copyright (c) 2022-present Ehan Ahamed and contributors
Licensed under the UPL-1.0 License
https://src.ehan.dev/quizfreely/LICENSE.txt
*/

var alerts = {
    init: function () {
        elements.alerts.successImport.style.display = "none";
        elements.alerts.errorImport.style.display = "none";
    },
    clear: function () {
        elements.alerts.successImport.style.display = "none";
        elements.alerts.errorImport.style.display = "none";
    },
    show: function (alert) {
        elements.alerts[alert].style.display = "block";
    }
}
