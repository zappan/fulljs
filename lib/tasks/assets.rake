namespace :assets do

  desc "copying assets to '/target/js/public'"
  task :copy_assets do
    puts
    puts "Copying assets to '/target/js/public'..."

    source = ['Backbone/assets/*']
    target = 'target/js/public/'
    
    FileUtils.mkdir_p target unless File.exists? target
    FileList[source].each do |src|
      FileUtils.cp_r src, target, :verbose => true
    end
  end


  desc "copying jasmine tests assets to '/target/js'"
  task :copy_jasmine_assets do
    puts
    puts "Copying jasmine tests assets to '/target/js'..."

    source = ['Backbone/lib/', 'Backbone/SpecRunner.html']
    target = 'target/js/'
    
    FileUtils.mkdir_p target unless File.exists? target
    FileList[source].each do |src|
      FileUtils.cp_r src, target, :verbose => true
    end
  end

end
