/*!
Quizfreely (quizfreely.ehan.dev)
Copyright (c) 2022-present Ehan Ahamed and contributors
Licensed under the UPL-1.0 License
https://src.ehan.dev/quizfreely/LICENSE.txt
*/

var elements = {
    sections: {
        load: document.getElementById("sectionLoad"),
        importOptions: document.getElementById("sectionImportOptions"),
        importLocal: document.getElementById("sectionImportLocal"),
        actionOptions: document.getElementById("sectionActionOptions"),
        edit: document.getElementById("sectionEdit"),
        exportOptions: document.getElementById("sectionExportOptions"),
        exportLocal: document.getElementById("sectionExportLocal"),
        reviewOptions: document.getElementById("sectionReviewOptions")
    },
    buttons: {
        make: document.getElementById("buttonMake"),
        importOptions: document.getElementById("buttonImportOptions"),
    },
    inputs: {
        importLocal: {
            file: document.getElementById("inputImportLocalFile")
        },
        edit: {
            name: document.getElementById("inputEditName"),
            table: document.getElementById("inputEditTable")
        }
    },
    links: {
        exportLocal: {
            download: document.getElementById("linkExportLocalDownload")
        }
    },
    alerts: {
        successImport: document.getElementById("alertSuccessImport"),
        errorImport: document.getElementById("alertErrorImport")
    }
}