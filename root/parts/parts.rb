# coding: UTF-8

def html_header title
<<EOF
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="WPSOffice Community"/>
<meta name="keywords" content="wps4linux, wps4ubuntu, wps for linux, wps for ubuntu, kingsoft office4linux, kingsoft office4ubuntu, kingsoft office for linux, kingsoft office for ubuntu, wps office4linux, wps office4ubuntu, wps office for linux, wps office for ubuntu, office4linux, office4ubuntu, office for linux, office for ubuntu, kso4linux, kso4ubuntu, kso for linux, kso for ubuntu, wps community, kingsoft office community, wps office community, office community, kso community"/>
<title>Kingsoft WPS Office Community#{title.size == 0 ? "" : ": #{title}"}</title>
<link rel="stylesheet" type="text/css" href="/css/main.css" media="all" />
</head>
<body>
<div id="header">
  <div id="logo">
    <a href="/"><img src="/images/logo.png" alt="Kingsoft WPS Community" /></a>
  </div>
  <div>
    <div class="h_navi">
      <span><a href="/">Home</a></span>
      <span><a href="/download.html">Download</a></span>
      <span><a href="/forum">Forum</a></span>
      <span><a href="/faq.html">FAQ</a></span>
    </div>
  </div>
</div>
<div>
  <p class="framed">
    <b>Tips: </b>Currently, our community is starting. We will change our pages frequently. 
    If you meet some error(such as 404, 500), visit it after a while, please!
    If nothing improved after some days, <a href="mailto:wps_linux@kingsoft.com">contact us</a>.
  </p>
</div>
EOF
end

def html_tail
<<EOF
<br/>
<div id="foot"> 
  <span><a href="http://www.ksosoft.com">Offical Site</a> | <a href="http://www.wps.cn">Chinese Site</a>
    | <a href="http://community.wps.cn">Chinese Community</a> | <a href="/aboutus.html">About us</a>
    | <a href="mailto:wps_linux@kingsoft.com">Contact us</a></span>
  <span>Copyright &copy; 2008-2012 Kingsoft Office Corporation, All Rights Reserved</span>
</div>
</body>
</html>
EOF
end
