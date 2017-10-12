var table = document.getElementById("Table");
var trs = table.getElementsByTagName("tr");
// 给每个单元格添加id
for (var i=0; i<10; i++) {
	var tds = trs[i+1].getElementsByTagName("td");
	for (var j=0; j<10; j++) {
		tds[j+1].id = "td" + i + j;
		//console.log(tds[j].id);
	}
}
// 开始函数
function start() {
	action = "top";
	var starttd = document.getElementById("td55");
	starttd.className = "select";
	var str = "<div id='head'></div>";
	starttd.innerHTML = str;
	head.style.position = "absolute";
	head.style.top = "0px";
}
// 右转函数
function right() {
	if (action == "top") {
        var head = document.getElementById("head");
	    head.style.height = "30px";
	    head.style.width = "10px";
	    head.style.position = "absolute";
	    head.style.right = "0px";
	    action = "right";
	} else if (action == "right") {
    	var head = document.getElementById("head");
    	head.style.height = "10px";
    	head.style.width = "30px";
        head.style.position = "absolute";
        head.style.top = "20px";
        action = "bottom";
    } else if (action == "bottom") {
    	var head = document.getElementById("head");
    	head.style.height = "30px";
	    head.style.width = "10px";
	    head.style.position = "absolute";
	    head.style.right = "20px";
	    head.style.top = "0px";
	    action = "left"; 
    } else if (action == "left") {
    	var head = document.getElementById("head");
    	head.style.height = "10px";
	    head.style.width = "30px";
	    head.style.position = "absolute";
	    head.style.top = "0px";
	    head.style.right = "0px";
	    action = "top";
    }
    //console.log(action);
}
// 左转函数
function left() {
	var head = document.getElementById("head");
	if (action == "top") {
		head.style.height = "30px";
	    head.style.width = "10px";
	    head.style.position = "absolute";
	    head.style.right = "20px";
	    action = "left";
	} else if (action == "left") {
		head.style.height = "10px";
    	head.style.width = "30px";
        head.style.position = "absolute";
        head.style.top = "20px";
        head.style.right = "0px";
        action = "bottom";
	} else if (action == "bottom") {
		head.style.height = "30px";
	    head.style.width = "10px";
	    head.style.position = "absolute";
	    head.style.right = "0px";
	    head.style.top = "0px";
	    action = "right";
	} else if (action == "right") {
		head.style.height = "10px";
	    head.style.width = "30px";
	    head.style.position = "absolute";
	    head.style.top = "0px";
	    head.style.right = "0px";
	    action = "top";
	}
	//console.log(action);
}
// 一百八十度转向
function back() {

}
// 前进
function go() {

	var head = document.getElementById("head");
	var i = head.parentNode.id.substring(2,3);
	var j = head.parentNode.id.substring(3);

	if (action == "top") {
        i = parseInt(i) - 1;
	} else if (action == "right") {
        j = parseInt(j) + 1;
	} else if (action == "bottom") {
		i = parseInt(i) + 1;
	} else if (action == "left") {
		j = parseInt(j) - 1;
	}

	var parent = document.getElementById(head.parentNode.id);
	//console.log(parent);
    parent.className = "";
    var newstarttd = trs[parseInt(i)+1].getElementsByTagName("td")[parseInt(j)+1];
    console.log(newstarttd);
    newstarttd.innerHTML = head.parentNode.innerHTML;
    head.parentNode.innerHTML = "";
    newstarttd.className = "select";
}