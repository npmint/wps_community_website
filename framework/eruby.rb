#!/usr/bin/env ruby

require 'erb'

class ERuby
  def initialize(file, *args)
    @file = file
    @args = args
  end
  def render(*args)
    ERuby.render *args
  end
  def argv
    @args
  end
  def render_self
    e = ERB.new File.read @file
    e.result(binding)
  end
  def self.render(file, *args)
    (ERuby.new file, *args).render_self
  end
end

puts ERuby.render(*ARGV)

