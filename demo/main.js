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
