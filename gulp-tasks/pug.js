"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv;
const production = !!argv.production;

gulp.task("pug", () => {
	return gulp.src(paths.pug.src)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulpif(production, replace("critical-styles.css", "critical-styles.min.css")))
		.pipe(gulpif(production, replace("critical-scripts.js", "critical-scripts.min.js")))

		.pipe(gulpif(production, replace("home.css", "home.min.css")))
		.pipe(gulpif(production, replace("home.js", "home.min.js")))
		
		.pipe(gulp.dest(paths.pug.dist))
		.pipe(browsersync.stream());
});