// code adapted from Danny Goodman, http://safari.oreilly.com/0596527403/orm9780596527402-CHP-VI


// clear table cells for each key down event
function clearCells() {
	var tds = document.querySelectorAll('td')
	for (var i=0;i<tds.length;i++) {
		tds[i].innerHTML = "&mdash;";
		}
	}

function clearEntry () {
	document.getElementById('entry').value = ''
	}

	
function showModifiers (evt) {
	evt = (evt) ? evt : ((event) ? event : null);
	if (evt.shiftKey || evt.ctrlKey || evt.altKey) { 
		var newContent = "";
		if (evt.shiftKey) {
			newContent += "Shift ";
			}
		if (evt.ctrlKey) {
			newContent += "Ctrl ";
			}
		if (evt.altKey) {
			newContent += "Alt ";
			}
		if (evt.metaKey) {
			newContent += "Meta ";
			}
		document.getElementById("modifier").innerHTML = newContent;
		}
	}
	
// decipher key down codes
function showDown (evt) {
	clearCells();
	evt = (evt) ? evt : ((event) ? event : null);
	if (evt) {
		if (evt.key) document.getElementById("keyDownKey").innerHTML = evt.key
		if (evt.code) document.getElementById("codeDownKey").innerHTML = evt.code
		}
	showModifiers(evt)
	}
	
	
// decipher key up codes
function showUp (evt) {
	evt = (evt) ? evt : ((event) ? event : null);
	if (evt) {
		if (evt.key) document.getElementById("keyUpKey").innerHTML = evt.key
		if (evt.code) document.getElementById("codeUpKey").innerHTML = evt.code
		}
	}

// bind events to text box
function setKeyboardEvents( ) {
    addEvent(document.getElementById('entry'), "keydown", showDown, false);
    addEvent(document.getElementById('entry'), "keyup", showUp, false);
	document.getElementById('entry').focus()
	}
	
// do event binding now that elements exist
addOnLoadEvent(setKeyboardEvents);
