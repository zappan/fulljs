require './lib/init'

Dir.glob('lib/tasks/*.rake').each do |r|
  import r
end



desc "Run the server"
task :server do
  system "rackup config.ru"
end

desc "Clean old stuff"
task :clean do
  puts "Cleaning..."
end

desc "Build and minify javascript files"
task :build => :clean do
  puts "Building..."
  Rake::Task["minifier:combine"].invoke
end

desc "Prepare and build test environment"
task :buildtest => :build do
  puts "Preparing test environment..."
end

