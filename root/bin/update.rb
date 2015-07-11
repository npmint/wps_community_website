#!/usr/bin/env ruby

puts "Content-Type: text/plain"
puts 

s = `git rev-parse HEAD`

gitlog = `git pull --rebase 2>&1`
puts gitlog

gitret = "git pull return: #{$?}"
puts gitret

e = `git rev-parse HEAD`

if s == e
  puts "No file updated."
else
  puts `rm -vf #{$root + "/forum/cache/*.php"}`
  puts `rm -vf #{$root + "/../v2/forum/cache/*.php"}`
  puts `cd #{$root + "/../v2"} && PATH=/opt/node/bin:$PATH npm install`
  # restart node
  puts `pkill node`
end

if not $root2
  $root2 = "../.."
end
log = open($root2 + "/log/update.log", "a")
log.puts Time.now
log.puts "Call from #{ENV["REMOTE_ADDR"]}"
log.puts gitlog
log.puts gitret
log.puts 
log.close

