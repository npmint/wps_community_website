require 'cgi'
require 'parts/parts.rb'

NewsInfo = Struct.new(:title, :content)

def read_news fname
  title = ""
  content = ""

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
        content += "<br/>"
      else
        content += l + " "
      end
    end
  end
  return NewsInfo.new title, content
end

def html_news
  cont = ""
  news = Dir.glob($root2 + "/data/news/*.news").sort {|a,b| -(File.basename(a).to_i <=> File.basename(b).to_i)}
  news.each do |n|
    newsinfo = read_news n
    cont += "<h2>#{newsinfo.title}</h2><p>#{newsinfo.content}</p>"
  end
  return cont
end

cont = <<EOF
#{html_header "Home"}
<h1>Welcome to Kingsoft Office International Community</h1>
<ul>
  <li>Kingsoft Office ( also known as WPS Office ) is a vibrant office suite. 
  We have more than 200 developers and always 
  devote ourselves to creating comfortable, efficient and smart office experience.</li>
  <li>We are a small branch of the Kingsoft Office team,
  which also devotes itself to porting Kingsoft Office to Linux and Linux-like systems, 
  and offers their users native experience.</li>
</ul>
<h1>Lastest Announcements</h1>
#{html_news}
#{html_tail}
EOF

$cgi.out {
  cont
}
