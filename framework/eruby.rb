#!/usr/bin/env ruby

require 'erb'
require 'cgi'

def grender(cgi, cookies, file, *args)
  s = ERubySpace.new(cgi, cookies, *args)
  e = ERB.new File.read file
  e.filename = file
  e.result(s.get_binding)
end

class ERubySpace
  def initialize(cgi, cookies, *argv)
    @cgi = cgi
    @argv = argv
    @cookies = cookies
  end
  attr_accessor :argv
  attr_accessor :cgi
  attr_accessor :cookies

  def render(*args)
    grender(@cgi, @cookies, *args)
  end
  def get_binding
    binding
  end
end

cgi = CGI.new
cookies = []

cgi.out("cookie" => cookies) { grender(cgi, cookies, *ARGV) } 

