isaacs
======

Your very own isaacs.

![isaacs](http://substack.net/images/isaacs.png)

example
=======

````javascript
var isaacs = require('isaacs')
var s = isaacs.speak().join(' ')
console.log(s)
````

methods
=======

var isaacs = require('isaacs')

isaacs(cb)
----------

Calls `cb(isaacs)` once your isaacs has fully loaded, but you can use your
issacs before then if you like.

isaacs.speak(text=isaacs.markov.pick())
---------------------------------------

Talk to your isaacs with some `text` or else request that your issacs talk to
you.

isaacs.markov
-------------

The [markov](https://github.com/substack/node-markov) handle of your isaacs.
