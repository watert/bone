# Bone
Standalone Backbone.js compatible library without jquery & underscore dependencies

Size: compressed: 26K, and gzipped: less than 10K

example:

```javascript
var _ = Bone._
var ajax = Bone.ajax

var MainView = Bone.NativeView.extend({
    events:{
        "click .btn-alert":function(e){
            alert("view events worked")
        }
    },
    render (){
        this.el.innerHTML = this.template({})
        pre = this.$("pre")[0]
        ajax({url:"./main.js"}).then(function(script){
            pre.innerHTML = _.escape(script)
        });
    },
    template: _.template(`
        <h1>Title</h1>
        <p>content</p>
        <button class="btn btn-alert">Alert</button>
        <h2>Code:</h2>
        <pre></pre>
    `)
})
var $ = document.querySelector.bind(document);
var main = new MainView({el:$("#app")})
main.render()
```

## Based on:

used libraries:
- [exoskeleton](http://exosjs.com/)
- [micro-template](https://www.npmjs.com/package/micro-template)
- [backbone.nativeview.js](https://github.com/akre54/Backbone.NativeView)
- [backbone.nativeajax.js](https://github.com/akre54/Backbone.NativeAjax)
- [webpack](http://webpack.github.io/)

use some jQuery minified replacement to do DOM stuff if you like.
