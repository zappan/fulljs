namespace :minifier do

  # calculates order of inclusion for backbone files folders when combining
  def path_order(path, path_include_order_arr=[])
    path_include_order_arr.each_with_index {|order_path, i|
      if path.start_with?(order_path) 
        return i
      end
    }
    path_include_order_arr.length
  end

  def create_path(path)
    parentDir = File.split(path)[0]
    create_path parentDir unless parentDir === '.'
    Dir.mkdir path unless File.exists? path
  end

  def sort_files(files, path_include_order_arr)
    # sort by file depth, and backbone path priority order
    files = files.map { |file| [path_order(file, path_include_order_arr), file.count("/"), file] }
    files = files.sort.map { |file| file[2] }
  end

  def minify(files, target)
    cmd = "java -jar lib/yui-compressor/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar --preserve-semi #{files} -o #{target}"
    puts cmd
    ret = system(cmd)
  end

  def combine(files, target, path_include_order_arr=[])
    puts
    puts "Combining files..."

    create_path File.dirname target

    files = sort_files files, path_include_order_arr
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
    backbone_path_include_order_arr = ["Backbone/src/startup.js",
      "Backbone/src/model/mixin", "Backbone/src/model",
      "Backbone/src/collection/mixin", "Backbone/src/collection",
      "Backbone/src/view/mixin", "Backbone/src/view",
      "Backbone/src/router",
      "Backbone/src"
    ]
    combine(FileList['Backbone/src/**/*.js'], 'target/js/public/js/MyApplication.js', backbone_path_include_order_arr)
  end

  desc "combine css"
  task :combine_css do
    combine(FileList['Backbone/css/**/*.css'], 'target/js/public/css/MyApplication.css')
  end

  desc "combine jasmine specs"
  task :combine_jasmine do
    backbone_path_include_order_arr = [
      "Backbone/spec/model", "Backbone/spec/collection", "Backbone/spec/view", "Backbone/spec/router",
      "Backbone/spec"
    ]
    combine(FileList['Backbone/spec/**/*.js'], 'target/js/spec/MyApplication.spec.js', backbone_path_include_order_arr)
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
