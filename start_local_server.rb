#! /usr/bin/ruby
 
require 'webrick'
 
mimetypes = WEBrick::HTTPUtils::DefaultMimeTypes
mimetypes["js"] = "application/x-javascript"
mimetypes["svg"] = "image/svg+xml"
 
s = WEBrick::HTTPServer.new(:Port => 8000,
                            :DocumentRoot => Dir::pwd,
                            :MimeTypes => mimetypes)
trap("INT"){s.shutdown}
s.start