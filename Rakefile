# imports
require './lib/init'
require 'rake/clean'
Dir.glob('lib/tasks/*.rake').each do |r|
  import r
end

#config
#  http://rake.rubyforge.org/files/lib/rake/clean_rb.html 
#  http://onestepback.org/index.cgi/Tech/Rake/Tutorial/RakeTutorialRules.red)
CLEAN.include(["target/*"])

#tasks
desc "Run the server"
task :server do
  system "rackup config.ru"
end

desc "Build and minify javascript files"
task :build => :clean do
  puts
  puts "Building..."
  
  Rake::Task["assets:copy_assets"].invoke
  Rake::Task["minifier:combine"].invoke
end

desc "Prepare and build test environment"
task :buildtest => :build do
  puts
  puts "Preparing test environment..."

  Rake::Task["assets:jasmine_copy_assets"].invoke
  Rake::Task["minifier:jasmine_combine"].invoke
end

