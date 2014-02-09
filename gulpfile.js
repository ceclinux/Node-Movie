var gulp = require('gulp');

var lr = require('tiny-lr'),
refresh = require('gulp-livereload'),server = lr();
var app=require('./app');

gulp.task('refresh',function  () {
  app.getfiledir();
    gulp.src(['./views/*.ejs']).pipe(refresh(server));
})


gulp.task('watch', function () {
    gulp.watch('movies/**', ['refresh']);
});

gulp.task('server',function  () {
    port = app.listen(3000);
});
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['server','watch']);

