function loadhome(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("home-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
		<img src=\"images/jay.jpg\" alt=\"Jayaraj Balagopal\" title=\"Jayaraj Balagopal\" class=\"circle\">\
		<p>M.Tech CSE Student at IIIT-H</p>"
	loadmenu();
}

function loadabout(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("about-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
			<div class=\"subhead\">\
			<h1>Introduction</h1>\
			<article>\
			I am currently pursuing M.Tech CSE in IIIT-H. Before joining IIIT-H, I was with ERICSSON R&D Banglore primarily working on networking based products. It was always my dream to pursue masters from a premier institute in india and thats why i quit my job and started preparing for GATE.I completed my B.Tech from Govt.Model Engineering College, Kochi.\
			</article>\
		</div>\
		<div class=\"subhead\">\
			<h1>Handles</h1>\
			<a href=\"https://in.linkedin.com/in/jayaraj-balagopal-197078125\">\
			<i class=\"fa fa-linkedin fa-3x logo\" style=\"color:#0077b5;\"></i></a>\
			<a href=\"https://github.com/jayarajbalagopal\">\
			<i class=\"fa fa-github fa-3x logo\" style=\"color:black;\"></i></a>\
			<a href=\"https://www.codechef.com/users/jayaraj_bgopal\">\
			<i class=\"fa fa-code fa-3x logo\" style=\"color:brown;\"></i></a>\
		</div>\
		<div class=\"subhead\">\
			<h1>Employment</h1>\
			<table class=\"shorttable\">\
				<tr>\
					<th>Company Name</th>\
					<th>Experience</th>\
					<th>Location</th>\
				</tr>\
				<tr>\
					<td>Ericsson</td>\
					<td>3 Years</td>\
					<td>Banglore</td>\
				</tr>\
				<tr>\
					<td>Sposea B.B</td>\
					<td>2 Months</td>\
					<td>Calicut</td>\
				</tr>\
			</table>\
		</div>\
		<div class=\"subhead\">\
			<h1>Skill Set</h1>\
			<ul>\
				<li>C/C++</li>\
				<li>Bash</li>\
				<li>Docker</li>\
				<li>Kubernetes</li>\
				<li>Ansible,Puppet</li>\
				<li>Django</li>\
			</ul>\
		</div>\
		<div class=\"subhead\">\
			<h1>Hobbies/Vedio Gallery</h1>\
			<div>\
				<iframe type=\"text/html\" src=\"https://www.youtube.com/embed/cOMPobd3PRE?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com\"></iframe>\
			</div>\
			<div>\
				<iframe  type=\"text/html\" src=\"https://www.youtube.com/embed/Ehn1zu85Ks0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com\"></iframe>\
			</div>\
		</div>"
	loadmenu();
}

function loadedu(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("edu-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
		<table  id=\"education\">\
			<tr>\
				<th colspan=\"2\">Institution</th>\
				<th>University</th>\
				<th>CGPA/Percentage</th>\
			</tr>\
			<tr>\
				<td><a href=\"https://www.iiit.ac.in/\"><img class=\"logo\" alt=\"iiit-h\" src=\"https://www.iiit.ac.in/img/iiit-new.png\"></a></td>\
				<td>IIIT-H</td>\
				<td>IIIT-H</td>\
				<td>Nil</td>\
			</tr>\
			<tr>\
				<td><a href=\"https://www.mec.ac.in/\"><img class=\"logo\" alt=\"mec\" src=\"http://www.mec.ac.in/mec/images/MEC_logo.png\"></a></td>\
				<td>Govt. Model Engineering College</td>\
				<td>CUSAT</td>\
				<td>8.26</td>\
			</tr>\
			<tr>\
				<td><a href=\"https://chinmayavidyalaya.edu.in/\"><img class=\"logo\" alt=\"chinmaya vidyalaya\" src=\"https://upload.wikimedia.org/wikipedia/en/a/a7/Chinmaya_Vidyalaya_logo.png\"></a></td>\
				<td>Chinmaya Vidayala Tripunithura</td>\
				<td>CBSE</td>\
				<td>92%</td>\
			</tr>\
		</table>"
	loadmenu();	
}

function loadpub(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("pub-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
	<table id=\"publication\" class=\"shorttable\">\
			<tr>\
				<th>Subject</th>\
				<th colspan=\"2\">Link</th>\
			</tr>\
			<tr>\
				<td>Summarisation Of Long Text Extracted From Article Images By Integrating Extractive And Abstractive Text Summarisation Methods</td>\
				<td colspan=\"2\" rowspan=\"2\"><a href=\"https://www.semanticscholar.org/paper/SUMMARISATION-OF-LONG-TEXT-EXTRACTED-FROM-ARTICLE-Balagopal/dc97095668d59bfb689cd879959d33c985893c0e\">Resource</a></td>\
			</tr>\
		</table>"
	loadmenu();
}

function loadcontact(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("con-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
		<div class=\"subhead\">\
			<table class=\"shorttable\">\
				<tr>\
					<td>MOB</td>\
					<td><a href=\"tel:+919497062849\">+919497062849</a></td>\
				</tr>\
				<tr>\
					<td>MAIL</td>\
					<td><a class=\"mail\" href=\"mailto:jayaraj.balagopal@students.iiit.ac.in\">jayaraj.balagopal@students.iiit.ac.in</a></td>\
				</tr>\
			</table>\
		</div>"
	loadmenu();
}


function loadresume(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("cv-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
		<iframe src=\"images/resume.pdf\" class=\"resume\">"
	loadmenu();
}

function loadprojects(){
	navmenu = document.getElementById("topnav");
	div_a = navmenu.childNodes;
	for (i=0; i<div_a.length; i++) {
		if(div_a[i].className == "active")
			div_a[i].className = "";	
	}
	activetab = document.getElementById("pro-tag");
	activetab.className = "active";
	content = document.getElementById("content");
	content.innerHTML="\
		<div class=\"subhead\">\
				<h1>Projects</h1>\
				<table class=\"shorttable\">\
					<tr>\
						<th>Project Name</th>\
						<th>Description</th>\
						<th>Timeline</th>\
					</tr>\
					<tr>\
						<td>Summarisation Of Long Text Extracted From Article Images By Integrating Extractive\
	And Abstractive Text Summarisation Methods</td>\
						<td>Worked on an algorithm for long text summarisation by combining extractive and abstractive text\
							summarisation techniques. Showcased the same by extracting text from article images and generating the\
							summary using the algorithm.</td>\
						<td>Apr 2018</td>\
					</tr>\
					<tr>\
						<td>Event Management Tool</td>\
						<td>Developed an event management tool using django framework as part of college techfest by which event\
							managers ,venue managers and other co-ordinators can interact effectively, co-ordinate their operations,\
							update event related details, manage registrations and provide realtime details on ongoing events.</td>\
						<td>Oct 2017</td>\
					</tr>\
					<tr>\
						<td>Carpooling Application</td>\
						<td>Developed a ride sharing application by which people can pool-in, share a ride and split the fares.\
						</td>\
						<td>Jun 2017</td>\
					</tr>\
					<tr>\
						<td>Miniature Home automation system</td>\
						<td>Developed a miniature home automation system to control appliances through an android app that\
							communicates with these appliances through Bluetooth network.</td>\
						<td>Jun 2017</td>\
					</tr>\
				</table>\
			</div>"
	loadmenu();
}


function loadmenu() {
  var top = document.getElementById("topnav");
  if (top.className === "topnav") {
    top.className += " responsive";
  } else {
    top.className = "topnav";
  }
}

function displaytime() {
	time = new Date();
	foot = document.getElementById("time");
	foot.innerHTML="Time: "+time;
	setTimeout(displaytime, 1);
}