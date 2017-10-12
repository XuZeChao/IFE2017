// 获取输入框id
input = document.getElementById('input');
oul = document.getElementById('olis');
//存放输入数据
var num = [];
//判断输入内容是否合法
/*function judement() {
	if (input.value.length<=0 || input.value<10 || input.value>100) {
	    alert("请重新输入内容");
	    return 0;
}
    if (isNaN(input.value)) {alert("请重新输入内容"); return 0;}*/
//左输入函数
function left() {
    if (input.value.length<=0 || input.value<10 || input.value>100) {
    	alert("请重新输入内容");
    } else {
	var lis = document.createElement("li");
    lis.innerHTML = input.value;
    lis.style.height = input.value * 1.7 + "px";
    //lis.style.width =  + "px";
    //lis.style.background = "green";
	oul.insertBefore(lis,oul.firstChild);
	input.value = null;
    num.unshift(lis.innerHTML);
	}
}
//右输入函数
function right() {
	if (input.value.length<=0 || input.value<10 || input.value>100) {
	    alert("请重新输入内容");
	} else {
	var lis = document.createElement("li");
    lis.innerHTML = input.value;
    lis.style.height = input.value * 1.7 + "px";
    //lis.style.width =  + "px";
    //lis.style.background = "green";
	oul.appendChild(lis);
	input.value = null;
	num.push(lis.innerHTML);
	}
}
//左删除函数
function leftdel() {
	alert(oul.firstChild.innerText);
	oul.removeChild(oul.firstChild);
    num.shift();
}
//右删除函数
function rightdel() {
	alert(oul.lastChild.innerText);
	oul.removeChild(oul.lastChild);
	num.pop();
}
//点击删除
oul.onmouseover = function() {
    var oli = document.getElementsByTagName('li');
	    for (var i=0;i<oli.length;i++) {
	    	oli[i].index = i;
	    	oli[i].onclick = function() {
	    		oul.removeChild(oul.childNodes[this.index]);
	    		num.splice(this.index,1);
	    		console.log(num);
	    	}
	    }
}
//冒泡算法
    function sort(){
		var i = 0,j = 1,temp;
				len = num.length;
				timer = null;
		timer = setInterval(run,25);
		function run() {
			for (var j=0;j<len;j++) {
				for (var i=0;i<len-j;i++) {
					if (num[i] > num[i+1]) {
						temp = num[i];
						num[i] = num[i+1];
						num[i+1] = temp;
						
	                }
                    var oli = document.getElementsByTagName('li');
                    oli[i].innerHTML = num[i];
                    oli[i].style.height = num[i]*1.7 + "px";
	            }
	        }
		    clearInterval(timer);
			
		}
		//console.log(num);
 	}
