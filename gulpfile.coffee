gulp = require("gulp")
webpack = require("webpack")

gulp.task "webpack", (cb)->
    config = require("./webpack.config.js")
    config.plugins ?= {}
    webpack config,(err,stats)->
        if err then throw(new require("gulp-util").PluginError("webpack",err))
        callback()
gulp.task "build", (cb)->
    uglify = require("gulp-uglify")
    rename = require("gulp-rename")
    return gulp.src("./bone.js")
        .pipe(uglify())
        .pipe(rename({extname:".min.js"}))
        # .pipe(gulp.rename("bone.min.js"))
        .pipe(gulp.dest("./"))
gulp.task("default", ["build"])
