var rest = require('restler');

Twitter = rest.service(function(u, p){
    this.defaults.username = u;
    this.defaults.password = p;
  }, {
    baseURL: 'http://twitter.com'
  }, {
    update: function (message){
      return this.post('/statuses/update.json', { data: { status: message } });
    }
  });

var client = new Twitter('danwrong', 'password');
client.update('Tweeting usando um Restler service').on('complete', (data) => {
  console.log(data);
}).on('error',(data)=>{
    console.log(data)
}).on('fail',(data)=>{
    console.log(data);
});