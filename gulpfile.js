const { series } = require('gulp');
const { src, dest } = require('gulp');
const scp = require('gulp-scp2');
const prompt = require('gulp-prompt');

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

var passStr = "";

function password (cb){
  console.log("hi");
  return prompt.prompt({
    type: 'password',
    name: 'pass',
    message: 'Please enter your password'
  }, function(res){
    //value is in res.pass
    passStr =  res.pass;
  })
  cb();
}

function deploy(cb) {
  var passStr = "blank"
  return src('dist/footprintsforms/**')
    .pipe(prompt.prompt({
      type: 'password',
      name: 'pass',
      message: 'Please enter your password'
    }, function(res){
      //value is in res.pass
      // console.log(res.pass);
      passStr = res.pass;
    }))
    .pipe( process.stdout.write('howdy'))
    .pipe(
      scp({
        host: 'www01.admin.ad.cnm.edu',
        username: 'webuser',
        password: this.passStr,
        dest: '/u01/data/docroots/forms/footprints-forms2/',
      })
    )
    .on('error', function(err) {
      console.log('error',err);
    });
  cb()
}

exports.deploy = deploy // series(password, deploy);
// exports.password = series(password);
