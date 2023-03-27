/*!
Quizfreely (quizfreely.ehan.dev)
Copyright (c) 2022-present Ehan Ahamed and contributors
Licensed under the UPL-1.0 License
https://src.ehan.dev/quizfreely/LICENSE.txt
*/

var importLocal = {
    init: function () {
        elements.inputs.importLocal.file.onchange = function () {
            importLocal.input();
        };
    },
    input: function () {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            sessionData.importLocal.fileData = event.target.result;
            sections.changeTo("actionOptions");
            alerts.show("successImport");
        };
        fileReader.readAsText(elements.inputs.importLocal.file.files[0]);
    }
};
