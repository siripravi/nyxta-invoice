/*

CUSTOM FORM ELEMENTS

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

*/

var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(aval = 0; aval < inputs.length; aval++) {
			if((inputs[aval].type == "checkbox" || inputs[aval].type == "radio") && inputs[aval].className == "styled") {
				span[aval] = document.createElement("span");
				span[aval].className = inputs[aval].type;

				if(inputs[aval].checked == true) {
					if(inputs[aval].type == "checkbox") {
						position = "0 -" + (checkboxHeight*2) + "px";
						span[aval].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight*2) + "px";
						span[aval].style.backgroundPosition = position;
					}
				}
				inputs[aval].parentNode.insertBefore(span[aval], inputs[aval]);
				inputs[aval].onchange = Custom.clear;
				if(!inputs[aval].getAttribute("disabled")) {
					span[aval].onmousedown = Custom.pushed;
					span[aval].onmouseup = Custom.check;
				} else {
					span[aval].className = span[aval].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(aval = 0; aval < inputs.length; aval++) {
			if(inputs[aval].className == "styled") {
				option = inputs[aval].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[aval] = document.createElement("span");
				span[aval].className = "select1";
				span[aval].id = "select" + inputs[aval].name;
				span[aval].appendChild(textnode);
				inputs[aval].parentNode.insertBefore(span[aval], inputs[aval]);
				if(!inputs[aval].getAttribute("disabled")) {
					inputs[aval].onchange = Custom.choose;
				} else {
					inputs[aval].previousSibling.className = inputs[aval].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
			document.getElementById('cgv').value='0';
			getpeyment();
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(aval = 0; aval < inputs.length; aval++) {
					if(inputs[aval].name == group && inputs[aval] != this.nextSibling) {
						inputs[aval].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
			document.getElementById('cgv').value='1';
			getpeyment();
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;