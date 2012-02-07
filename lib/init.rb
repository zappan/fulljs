Dir['./lib/isolate*/lib'].each do |dir|
  $: << dir
end

#require "rake/dsl_definition"
#require "rake"
#require "juicer"

#require "rubygems"
require "isolate/now"
require "sinatra"

