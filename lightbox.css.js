body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	color: #fff;
	background-color: #212121;
}

header {
	background-color: #333;
	padding: 1em;
}

nav ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

nav li {
	margin-right: 1em;
}

nav a {
	color: #fff;
	text-decoration: none;
	font-weight: bold;
}

main {
	margin: 2em;
}

section {
	margin-bottom: 2em;
}

h1 {
	font-size: 2em;
	margin-bottom: 0.5em;
	color: #2196F3;
}

.gallery {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -10px;
}

.gallery a {
	flex: 1 1 300px;
	margin: 10px;
	position: relative;
}

.gallery a::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	opacity: 0;
	transition: opacity 0.3s;
}

.gallery a:hover::before {
	opacity: 1;
}

img {
	width: 100%;
	height: auto;
}

.footer {
	background-color: #333;
	padding: 1em;
	text-align: center;
	color:
