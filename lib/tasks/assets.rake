namespace :assets do

  desc "copying assets to '/target/js/public'"
  task :copy_assets do
    puts
    puts "Copying assets to '/target/js/public'..."

    source = ['backbone/assets/*']
    target = 'target/js/public/'
    
    FileUtils.mkdir_p target unless File.exists? target
    FileList[source].each do |src|
      FileUtils.cp_r src, target, :verbose => true
    end
  end


  desc "copying jasmine tests assets to '/target/js'"
  task :jasmine_copy_assets do
    puts
    puts "Copying jasmine tests assets to '/target/js'..."

    source = ['backbone/lib/', 'backbone/SpecRunner.html']
    target = 'target/js/'
    
    FileUtils.mkdir_p target unless File.exists? target
    FileList[source].each do |src|
      FileUtils.cp_r src, target, :verbose => true
    end
  end

end
