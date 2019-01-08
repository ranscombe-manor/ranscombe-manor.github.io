import bottle

@bottle.get('/')
def getmain():
    return bottle.static_file('index.html', root='.')

@bottle.get('/<filename>')
def getstyles(filename):
    return bottle.static_file(filename, root='.')


@bottle.get('/slideshow/<filename>')
def slideshow(filename):
    return bottle.static_file(filename, root='./slideshow')


bottle.run(host='localhost', port=3000, debug=True)
