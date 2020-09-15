var orange_1 = document.getElementById("orange-1");
var orange_2 = document.getElementById("orange-2");
var yellow_1 = document.getElementById("yellow-1");
var yellow_2 = document.getElementById("yellow-2");
var green_1 = document.getElementById("green-1");
var green_2 = document.getElementById("green-2");
var blue_1 = document.getElementById("blue-1");
var blue_2 = document.getElementById("blue-2");
var tan_1 = document.getElementById("tan-1");
var tan_2 = document.getElementById("tan-2");
var red_1 = document.getElementById("red-1");
var red_2 = document.getElementById("red-2");
var purple_1 = document.getElementById("purple-1");
var purple_2 = document.getElementById("purple-2");
var grey_1 = document.getElementById("grey-1");
var grey_2 = document.getElementById("grey-2");

var save_button = document.getElementById("save");

chrome.storage.sync.get([
    'orange_1', 'orange_2',
    'yellow_1', 'yellow_2',
    'green_1', 'green_2',
    'blue_1', 'blue_2',
    'tan_1', 'tan_2',
    'red_1', 'red_2',
    'purple_1', 'purple_2',
    'grey_1', 'grey_2'], function(data) {
    orange_1.value = data.orange_1;
    orange_2.value = data.orange_2;
    yellow_1.value = data.yellow_1;
    yellow_2.value = data.yellow_2;
    green_1.value = data.green_1;
    green_2.value = data.green_2;
    blue_1.value = data.blue_1;
    blue_2.value = data.blue_2;
    tan_1.value = data.tan_1;
    tan_2.value = data.tan_2;
    red_1.value = data.red_1;
    red_2.value = data.red_2;
    purple_1.value = data.purple_1;
    purple_2.value = data.purple_2;
    grey_1.value = data.grey_1;
    grey_2.value = data.grey_2;
});

save_button.onclick = function(){
    chrome.storage.sync.set({
        orange_1: orange_1.value.toUpperCase(),
        orange_2: orange_2.value.toUpperCase(),
        yellow_1: yellow_1.value.toUpperCase(),
        yellow_2: yellow_2.value.toUpperCase(),
        green_1: green_1.value.toUpperCase(),
        green_2: green_2.value.toUpperCase(),
        blue_1: blue_1.value.toUpperCase(),
        blue_2: blue_2.value.toUpperCase(),
        tan_1: tan_1.value.toUpperCase(),
        tan_2: tan_2.value.toUpperCase(),
        red_1: red_1.value.toUpperCase(),
        red_2: red_2.value.toUpperCase(),
        purple_1: purple_1.value.toUpperCase(),
        purple_2: purple_2.value.toUpperCase(),
        grey_1: grey_1.value.toUpperCase(),
        grey_2: grey_2.value.toUpperCase(),
    });
    // chrome.tabs.executeScript(null, {file: 'content.js'});
}