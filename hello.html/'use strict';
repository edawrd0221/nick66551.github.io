'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});


gulp.task('default', ['browser-sync'], function() {
    gulp.watch('*', ['bs-reload']);
    // body...
});