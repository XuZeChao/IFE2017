var select = document.getElementById("selectMode");
var root = document.getElementById("root");
var btnStart = document.getElementById("btnStart");
var timer = 0;
btnStart.onclick = function () {
	var options = select.getElementsByTagName("option");
	var value = select[select.selectedIndex].value;
	
    if(value === "0") {
    	preOrder(root);
    	timer = 0;
    } 
    if(value === "1") {
        inOrder(root);
        timer = 0;
    }
    if (value === "2") {
        postOrder(root);
        timer = 0;
    }
}
//前序遍历
function preOrder(root) {
	if(root) {
		
		showNode(root);
		preOrder(root.firstElementChild);
		preOrder(root.lastElementChild);
    }
}
//中序遍历 
function inOrder(root) {
	if(root) {
		inOrder(root.children[0]);
		showNode(root);
		inOrder(root.children[1]);
	}
}
//后序遍历
function postOrder(root) {
	if(root) {
		postOrder(root.firstElementChild);
		postOrder(root.lastElementChild);
		showNode(root);
	}
}
function showNode(node) {
    node.style.backgroundColor = "#fff";
    setTimeout(function () {
    	node.style.backgroundColor="yellow";
    },timer+=1000);
    setTimeout(function () {
        node.style.backgroundColor="#fff";
    },timer+=1000);
}