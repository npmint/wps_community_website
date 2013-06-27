require 'cgi'
require 'parts/parts.rb'

NewsInfo = Struct.new(:title, :content)

def read_news fname
  title = ""
  content = "<p>"

  open(fname) do |f|
    f.each_line do |l|
      l.chomp!
      if l =~ /^=/
        break
      end
      title += l
    end
    f.each_line do |l|
      l.chomp!
      if l.size == 0
        content += "</p>\n<p>"
      else
        content += l + " "
      end
    end
    content += "</p>"
  end
  return NewsInfo.new title, content
end

def html_news
  cont = ""
  news = Dir.glob($root2 + "/data/news/*.news").sort {|a,b| -(File.basename(a).to_i <=> File.basename(b).to_i)}
  news.each do |n|
    newsinfo = read_news n
    cont += "<h2>#{newsinfo.title}</h2><div class=\"framed\">#{newsinfo.content}</div>"
  end
  return cont
end

cont = <<EOF
#{html_header "Home"}
<h1>Welcome to Kingsoft Office International Community</h1>
<ul>
  <li><b>About Kingsoft Office:</b> Kingsoft Office ( also known as WPS Office ) is a vibrant office suite. 
  We have more than 200 developers and always 
  devote ourselves to creating comfortable, efficient and smart office experience.</li>
  <li><b>About us:</b> We are a small branch of the Kingsoft Office team,
  which also devotes itself to porting Kingsoft Office to Linux and Linux-like systems, 
  and offers their users native experience.</li>
  <li><b>Annotation:</b> For some history reason, our product have several different names:
  <b><i>WPS Office</i></b>(known in Asian region, often abbreviated to <b><i>WPS</i></b>),
  <b><i>Kingsoft Office</i></b>(known in other regions, often abbreviated to <b><i>KSO</i></b>),
  <b><i>Kingsoft WPS Office</i></b>(used to let all our user can understand).
  All there names can be used in our site.</li>
</ul>
<h1>Latest Announcements</h1>
#{html_news}
#{html_tail}
EOF

$cgi.out {
  cont
}
