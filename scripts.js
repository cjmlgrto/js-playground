// JS Playground (v1.1) by @cjmlgrto

// The code below injects the <textarea>'s value as a <script> into the HTML
function execute() {
	var code = document.getElementById('input').value;
	var script = document.createElement('script');
	var output = document.getElementById('output');
	
	output.innerHTML = ' '
	script.type = 'text/javascript';
	script.id = 'script'
	
	code += "var output = document.getElementById('output');"

	try {
		document.getElementById('script').remove();
		script.appendChild(document.createTextNode(code));
		document.body.appendChild(script);
	} catch (e) {
		script.text = code;
		document.body.appendChild(script);
	}
	
}

// This code enables the use of the TAB key to add indentation in the textarea
window.onload = function tab() {
	document.getElementById('input').onkeydown = function(e) {
		if (e.keyCode === 9) {
			var val = this.value;
			var start = this.selectionStart;
			var end = this.selectionEnd;
			
			this.value = val.substring(0, start) + '  ' + val.substring(end);
			this.selectionStart = this.selectionEnd = start + 2;
			return false;
		}
	}
}

// This code simulates the C Language's print line feature, displaying on the sidebar
function printf(data) {
	var line = document.createElement('P');
	
	if (data.constructor === Array) {
		data.toString();
	}
	
	try {
		line.appendChild(document.createTextNode(data));
		output.appendChild(line);
	} catch (e) {
		line.text = data;
		output.appendChild(line);
	}
}

// This code works likes the one above, but creates a new instance of a <div> as an object
function newdiv(data, style, id) {
	var box = document.createElement('DIV');
	
	try {
		box.appendChild(document.createTextNode(data));
		output.appendChild(box);
		box.id = id;
		box.setAttribute("style", style);
	} catch (e) {
		box.text = data;
		box.id = id;
		box.setAttribute("style", style);
		output.appendChild(box);
	}
	
	var object = document.getElementById(id);
	object.style.height = "auto";
	return object;
}

function require(file) {
	var head = document.getElementsByTagName('head')[0];
	var newscript = document.createElement('SCRIPT');
	var output = document.getElementById('output');
	
	newscript.src = file;
	newscript.type = "text/javascript";
	head.appendChild(newscript);
	
	output.innerHTML = file + " has successfully been loaded.";
}

// This code allows the user to adjust the width of the output sidebar
function percentwidth(size) {
	var output = document.getElementById('output');
	var editor = document.getElementById('editor');
	
	var outputStyle = "width: "
	var editorStyle = "width: "
	
	outputStyle += size + "%;";
	editorStyle += 100-size + "%;";
	
	editor.setAttribute("style", editorStyle);
	output.setAttribute("style", outputStyle);
}


// and this built-in function displays the help menu
function help() {
	document.getElementById('output').innerHTML = 
	"<p>You can use the playground to learn functional programming in Javascript. Some commands special to this code editor may be of help:</p>" +
	"<ul>" +
	"<li><span>printf()</span> can be used to print text to this output column.</li>" +
	"<li><span>newdiv(data, style, id)</span> can be used to create a new HTML DIV in this column. The arguments <span>data</span>, <span>style</span> and <span>id</span> can be added to further customise the DIV. Note that CSS is used for the <span>style</span> argument.</li>" +
	"<li><span>percentwidth(size)</span> can be used to enter an integer between 0 and 100 to adjust the <span>size</span> of this output window.</li>" +
	"<li><span>require('http://path/to/file')</span> allows you to inject custom scripts and test out functions of your own"
	"<li><span>help()</span> displays this help menu.</li>" +
	"</ul>" +
	"<p>And many more features to come! Note that the code for this webpage can be found on GitHub, for educational purposes.</p>";
}
