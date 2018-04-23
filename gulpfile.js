var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json');
console.log(data);
gulp.task('default',function(){
    gulp.src('src')
        .pipe(server({
            port:8989,
            open:true,
            livereload:true,
            middleware:function(req, res, next){
                if(req.url =='/info'){
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }));
})