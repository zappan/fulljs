namespace :minifier do

  def create_path(path)
    parentDir = File.split(path)[0]
    create_path parentDir unless parentDir === '.'
    Dir.mkdir path unless File.exists? path
  end

  def sort_files(files)
    files = files.map { |file| [file.count("/"), file] }
    files = files.sort.map { |file| file[1] }
  end

  def minify(files, target)
    cmd = "java -jar lib/yui-compressor/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar --preserve-semi #{files} -o #{target}"
    puts cmd
    ret = system(cmd)
  end

  def combine(files, target)
    puts
    puts "Combining files..."

    create_path File.dirname target

    files = sort_files files
    File.open(target, "w+") do |outfile|
      files.each do |srcfile|
        File.open(srcfile, "r") do |infile|
          puts "  " + srcfile
          outfile.puts infile.read
          outfile.puts
        end
      end
    end
    puts "Files combined into: " + target
  end


  desc "combine"
  task :combine => [:combine_js, :combine_css]

  desc "combine javascript"
  task :combine_js do
    combine(FileList['Backbone/src/**/*.js'], 'public/js/MyApplication.js')
  end

  desc "combine css"
  task :combine_css do
    combine(FileList['Backbone/css/**/*.css'], 'public/css/MyApplication.css')
  end


  desc "minify"
  task :minify => [:minify_js, :minify_css]

  desc "minify javascript"
  task :minify_js => :combine_js do
    #TODO: take combined file and minify to /target dir or something
    #minify(FileList['public/js/MyApplication.js'], 'public/target/js/MyApplication.js')
  end

  desc "minify css"
  task :minify_css => :combine_css do
    #TODO: take combined file and minify to /target dir or something
    #minify(FileList['public/css/MyApplication.css'], 'public/target/css/MyApplication.css')
  end

end
