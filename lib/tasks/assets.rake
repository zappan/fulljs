namespace :assets do

  desc "copying assets to '/public'"
  task :copy_assets do
    puts
    puts "Copying assets to '/public'..."

    #source = ['Backbone/assets/*', 'Backbone/assets/js/']
    source = ['Backbone/assets/*']
    target = 'public/'
    
    FileList[source].each do |src|
      FileUtils.cp_r src, target, :verbose => true
    end
  end

end
