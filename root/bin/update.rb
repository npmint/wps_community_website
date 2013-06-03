#!/usr/bin/env ruby

puts "Content-Type: text/plain"
puts 

puts `git pull --rebase`

puts "git pull return: #{$?}"
