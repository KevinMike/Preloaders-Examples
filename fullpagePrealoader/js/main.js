$(document).on('ready',function () {
    $("#fakeLoader").fakeLoader({
        timeToHide:1200, //Time in milliseconds for fakeLoader disappear
        zIndex: "999",//Default zIndex
        spinner: "spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor: "#000"
        //imagePath: "images/logo.jpg"
    });

});