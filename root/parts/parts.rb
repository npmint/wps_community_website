def html_header title
<<EOF
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="WPSOffice Community"/>
<meta name="keywords" content="wps community, wpsoffice community, kingsoft office community, wps for linux, wps4linux, wps4ubuntu, wps for ubutntu, kingsoft office for linux, kso4linux, kso4ubuntu, kingsoft office for ubuntu"/>
<meta property="qc:admins" content="074644655576540156375" />
<title>Kingsoft WPS Office Community#{title.size == 0 ? "" : ": #{title}"}</title>
<link rel="stylesheet" type="text/css" href="/css/main.css" media="all" />
</head>
<body>
<div id="header">
	<div id="logo">
		<a href="/"><img src="/images/logo.png" alt="Kingsoft WPS Community" /></a>
		<div id="login">
			<a href="#">sign in / sign up</a>
		</div>
	</div>
	<div>
		<div class="h_navi">
			<span><a href="/">Home</a></span>
			<span><a href="/download.html">Download</a></span>
			<span><a href="/forum">Forum</a></span>
			<div id="h_searchbar">			
				<form action="/wiki/index.php" method="get" onsubmit="if (this.search.value == ''){ alert('Enter words to search.'); return false; } return true;">
					<input type="text" class="input_sea f_gray" id="search" name="search"/>				
					<input class="btn_sea" type="submit" value="Search" />
				</form>
			</div>
		</div>
	</div>
</div>
<div>
	<br/>
	<p class="framed">
		<span style="color:red;">Tips: </span>Currently, our community is starting. We will change our pages frequently. 
		If you meet some error(such as 404, 500), visit it after a while, please!
		If nothing improved after some hours, contact <a href="mailto:wps_linux@kingsoft.com">us</a>.
	</p>
</div>
EOF
end

def html_tail
<<EOF
<br/>
<div id="foot"> 
	<span>Copyright © 2008-2012 Kingsoft Office Corporation, All Rights Reserved</span>
</div>
</body>
</html>
EOF
end
