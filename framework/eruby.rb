#!/usr/bin/env ruby

require 'erb'
require 'cgi'

$cgi = nil
$cookies = nil

def grender(file, *args)
  s = ERubySpace.new(*args)
  e = ERB.new File.read file
  e.filename = file
  e.result(s.get_binding)
end

class ERubySpace
  def initialize(*argv)
    @argv = argv
  end
  attr_accessor :argv

  def render(*args)
    grender(*args)
  end
  def get_binding
    binding
  end
end

$cgi = CGI.new
$cookies = []
$droot = ENV['DOCUMENT_ROOT'] ? ENV['DOCUMENT_ROOT'] : Dir.pwd
$root = $droot + "/.."

begin
  $cgi.out("cookie" => $cookies) { grender(*ARGV) } 
rescue Exception => e
  puts "Content-type: text/plain; charset=utf-8"
  puts
  puts e.message
  e.backtrace.each do |x|
    puts x
  end
end
