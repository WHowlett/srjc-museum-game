let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    physic: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preLoad,
        create: myCreate,
        update: myUpdate
    }
};


function preLoad () {
    this.load.image ("background", "images/undersea-bg.png");
  this.load.spritesheet(
    'bluefish',
    'images/blue_fish.png',
    {
      frameWidth: 256,
      frameHeight: 256,
      endFrame: 5
    }
  );
    this.load.spritesheet(
    'nukefish',
    'images/nuclear_fish.png',
    {
      frameWidth: 256,
      frameHeight: 256,
      endFrame: 5
    }
  );
    this.load.spritesheet(
    'redfish',
    'images/red_fish.png',
    {
      frameWidth: 256,
      frameHeight: 256,
      endFrame: 5
    }
  );
};

function myCreate () {
    this.add.image (400,300, "background");
  var redfish = this.add.sprite(300, 200, 'redfish', 5);
  redfish.setScale(0.4);
  var bluefish = this.add.sprite(600, 550, 'bluefish', 5);
  bluefish.setScale(0.4);
  var nuclearfish = this.add.sprite(500, 150, 'nukefish', 5);
  nuclearfish.setScale(0.4);

    let blueframe = this.anims.generateFrameNumbers(
    'bluefish',
    {
      start: 0,
      end: 5,
      first: 5
    }
  );

  
  this.anims.create(
    {
      key: 'swimming', 
      frames: blueframe,
      frameRate: 8,
      repeat: -1,
      yoyo: false 
    }
  );
  
  bluefish.anims.play('swimming');

      bluefish.setInteractive();



    let redframe = this.anims.generateFrameNumbers(
    'redfish',
    {
      start: 0,
      end: 5,
      first: 5
    }
  );

  
  this.anims.create(
    {
      key: 'swim', 
      frames: redframe,
      frameRate: 8,
      repeat: -1,
      yoyo: false 
    }
  );
  
  redfish.anims.play('swim');

      redfish.setInteractive();
// nukefish need to sex below
    let nukeframe = this.anims.generateFrameNumbers(
    'nukefish',
    {
      start: 0,
      end: 5,
      first: 5
    }
  );

  
  this.anims.create(
    {
      key: 'nuclear', 
      frames: nukeframe,
      frameRate: 8,
      repeat: -1,
      yoyo: false 
    }
  );
  
  nuclearfish.anims.play('nuclear');

      nuclearfish.setInteractive();


  this.tweens.add({
        targets: redfish,
        props: {
            x: { value: 700, duration: 4000, flipX: true },
            y: { value: 500, duration: 8000,  },
        },
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
    });
  this.tweens.add({
        targets: bluefish,
        props: {
            x: { value: 700, duration: 4000, flipX: true },
            y: { value: 500, duration: 8000,  },
        },
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
    });
  this.tweens.add({
        targets: nuclearfish,
        props: {
            x: { value: 700, duration: 4000, flipX: true },
            y: { value: 500, duration: 8000,  },
        },
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
    });
};

function myUpdate() {

};

let myGame = new Phaser.Game(config);