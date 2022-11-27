const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.tzrgkus.mongodb.net/darkSolutions');
//mongoose.connect('mongodb://localhost:27017/darkSolutions');

const topic = 'darkSolutions'

const domoticData = mongoose.model('domoticData', 
{ 
    temperatura: String, 
    humedad: String,
    luz: String
});

client.on('connect', function () {
    client.subscribe(topic, function (err) {
      if (!err) {}
    })
  })

client.on('message', function (topic, message) {
    const data = JSON.parse(message.toString())
    console.log(data)
    var GoodData = new domoticData(data)
    GoodData.save()
  })



  //Apikey: 5KgUBXDlwhzPpNfU9U2CflSCXLlFocfctO8mBc5Aqf3WO47CUT9j35tUC3r8GoDN

  