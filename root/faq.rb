require 'cgi'
require 'parts/parts.rb'
require 'yaml'

def html_faq
  faqs = YAML.load_file $root2 + "/data/faqs.yaml"
  faqs.collect do |faq|
    "<b>Q: #{faq["Q"]}</b><br/>A: #{faq["A"]}<br/><br/>"
  end.join "\n"
end

cont = <<EOF
#{html_header "Download"}
<div class="body">
<h1>FAQ</h1>
#{html_faq}
</div>
#{html_tail}
EOF

$cgi.out {
  cont
}
