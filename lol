

registerFont('./Rounded.otf', {family: "ArialRound"})
        ctx.font = '30px "ArialRound"'

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';


      ctx.fillText('123',0,0)

      canvas.toBuffer((err, out) => { console.log('The PNG file was created.') 

let guild = client.guilds.cache.get("544902879534907392");
  let channel = guild.channels.cache.get("652591412583596057");


//     gm()
//     .in('./images/icons/Day.gif')
//     .in('./images/icons/Night.gif')
// .delay(100)
// .resize(600,600)
// .write("animated.gif", function(err){
//   if (err) throw err;
//   console.log("animated.gif created");
// });


const GIFEncoder = require('gifencoder');
const { createCanvas } = require('canvas');
const fs = require('fs');



const encoder = new GIFEncoder(128, 128);
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated1.gif'));

encoder.start();
encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
encoder.setDelay(500);  // frame delay in ms
encoder.setQuality(10); // image quality. 10 is default.

// use node-canvas
const canvas = createCanvas(128, 128);
const ctx = canvas.getContext('2d');

// red rectangle
ctx.fillStyle = '#ff0000';
ctx.fillRect(0, 0, 128, 128);
encoder.addFrame(ctx);


var gifFrames = require('gif-frames');


gifFrames(
  { url: './images/AdvancedIcons/10am.gif', frames: '0-2', outputType: 'png', cumulative: true },
  function (err, frameData) {
    if (err) {
      throw err;
    }
    frameData.forEach(function (frame) {
      frame.getImage().pipe(fs.createWriteStream(
        'image-' + frame.frameIndex + '.png'
      ));




  






      // channel.send({files:['image-' + frame.frameIndex + '.png']})

      
console.log('image-' + frame.frameIndex + '.png')
    });







// green rectangle
ctx.fillStyle = '#00ff00';
ctx.fillRect(0, 0, 320, 240);
encoder.addFrame(ctx);


// blue rectangle
ctx.fillStyle = '#0000ff';
ctx.fillRect(0, 0, 320, 240);
encoder.addFrame(ctx);


 

console.log('13322')
encoder.finish();
console.log('aeee')


  }
);




      // sharp(path)
      // .gif()
      // .toBuffer()
      //       .then(function(outputBuffer) {
      //         console.log("error: ", err)
      //         channel.send({files: [outputBuffer]});
      //         ctx.clearRect(0, 0, canvas.width, canvas.height)
      //         // fs.unlinkSync(pingedUser + "temp.png")
      //         })
      //         .catch(err => { msg.reply('Сожалеем, но произошла ошибка при загрузке карточки!\nКод: ' + err) });



      // channel.send({files: [out]})
      });



      

