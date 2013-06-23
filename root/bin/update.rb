#!/usr/bin/env ruby

puts "Content-Type: text/plain"
puts 

gitlog = `git pull --rebase 2>&1`

gitret = "git pull return: #{$?}"

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

puts gitlog
puts gitret
puts
