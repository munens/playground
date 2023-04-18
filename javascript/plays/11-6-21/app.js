var a = 3;

function hello() {
  var b = 4;
  console.log('from hello', this, {b: this.b})
}

console.log(this, this.a);

hello()
