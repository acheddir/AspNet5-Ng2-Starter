/// <binding Clean='clean' />
"use strict";

var _      = require("lodash"),
    gulp   = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var node_modules = './node_modules/';
var webroot = './wwwroot/';
var lib = webroot + 'lib/';

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css"
};

var angularJsLibs = [
    '@angular',
    'systemjs',
    'es6-shim',
    'reflect-metadata',
    'rxjs',
    'zone.js'
];

gulp.task('ng2', function () {
    _.forEach(angularJsLibs,
        function(dep, _) {
            gulp.src(node_modules + dep + '/**/*')
                .pipe(gulp.dest(lib + dep));
        });
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
