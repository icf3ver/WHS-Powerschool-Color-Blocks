chrome.storage.sync.get(['orange_1','orange_2','yellow_1','yellow_2','green_1','green_2','blue_1','blue_2','tan_1','tan_2','red_1','red_2','purple_1','purple_2','grey_1','grey_2'], function(data) {
    //Loop through all tbody nodes 
    var tbodys = document.getElementsByTagName("tbody");
    for (var i = 0; i < tbodys.length; i++){
        // Loop through all the tbody's rows
        var rows = tbodys.item(i).childNodes;
        for (var j = 0; j < rows.length; j++){
            // Loop through all the rows nodes
            var elements = rows.item(j).childNodes;
            for (var e = 0; e < elements.length; e++){
                // Determine whether the class the node represents exists and if its style need be changed
                var content = elements.item(e).innerText;
                if (content !== undefined && elements.item(e) != null){
                    if (content.includes(data.orange_1) || content.includes(data.orange_2)){
                        elements.item(e).style.backgroundColor = 'orange';
                    }
                    if (content.includes(data.yellow_1) || content.includes(data.yellow_2)){
                        elements.item(e).style.backgroundColor = 'yellow';
                    }
                    if (content.includes(data.green_1) || content.includes(data.green_2)){
                        elements.item(e).style.backgroundColor = 'green';
                    }
                    if (content.includes(data.blue_1) || content.includes(data.blue_2)){
                        elements.item(e).style.backgroundColor = 'blue';
                    }
                    if (content.includes(data.tan_1) || content.includes(data.tan_2)){
                        elements.item(e).style.backgroundColor = 'tan';
                    }
                    if (content.includes(data.red_1) || content.includes(data.red_2)){
                        elements.item(e).style.backgroundColor = 'red';
                    }
                    if (content.includes(data.purple_1) || content.includes(data.purple_2)){
                        elements.item(e).style.backgroundColor = 'purple';
                    }
                    if (content.includes(data.grey_1) || content.includes(data.grey_2)){
                        elements.item(e).style.backgroundColor = 'grey';
                    }
                }
            }
        }
    }
});
