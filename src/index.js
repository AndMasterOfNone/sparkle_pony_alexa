'use strict';

// Requires
var Alexa = require('alexa-sdk');
var names = require('./names.js');
var ee    = require('./ee.js');

// Essential Setup
var app_id     = "amzn1.ask.skill.3638c159-4a05-4d80-9ff2-7cd298ca163e";
var skill_name = "Sparkle Pony";


// Extend the Array object with a #sample method in order to make
// random selection from an Array much, much easier.
Array.prototype.sample = function() {
  return this[ Math.floor( Math.random() * this.length ) ];
}


// Functions
function entitled() {
  seconds = new Date().getSeconds() - 20;     // shifting to left a bit to reduce
  chance  = Math.floor( Math.random() * 60 ); // random seconds per minute
  return seconds > chance;
}

function generate_response( kind ) {
  
  var name = "";

  switch ( kind ) {
    case ":comedy":
      if ( entitled() ) { name += names.TITLES.sample(); }
      name += names.C_FIRST_NAMES.sample();
      name += names.C_LAST_NAMES.sample();
      break;

    case ":pageant":
      if ( entitled() ) { name = name + names.TITLES.sample(); }
      name += names.P_FIRST_NAMES.sample();
      name += names.P_LAST_NAMES.sample();
      break;

    default:
      name += names.C_FIRST_NAMES.sample();
      name += names.P_LAST_NAMES.sample();
    }

  // Using string interpolation with Templates here. These get
  // evaluated immediately, so putting this array before the 
  // name switch work return a bunch of 'undefineds' instead of
  // ${names}. 
  var responses = [
    `I think you should call yourself ${name}?`,
    `Gurl, I'm feeling your vibe as ${name}!`,
    `Henceforth, you shall be known as ${name}!`,
    `What about ${name}, or is that too long?`,
    `Write this down (but in pencil sweetie). Perhaps ${name}?`,
    `Work the runway ${name}!`,
    `Yawn. I dunno. Maybe ${name}?`,
    `By the power vested in me, I name thee ${name}!`,
    `Behold! You are ${name}!`,
    `I think it's time for ${name} to get that cash money.`,
    `Condragulations ${name}, shantay you stay.`
  ];

  return responses.sample(); 
}


// Standard Intent Message Strings
var goodbye_msg = "Well, this was fun! Goodbye!";
var help_msg    = "Did you want a comedy queen name or a pageant queen name?";
var help_prompt = "Which kind of name do you need?";


// Create Intent Handlers
var handlers = {
    'EELiterallyIntent': function() {
      var response = ee.LITERALLY.sample();
      this.emit( ':tellWithCard', skill_name, response);
    },
    'EERupaulIntent': function() {
      var response = ee.RU.sample();
      this.emit( ':tellWithCard', skill_name, response );
    },
    'EESpicyIntent': function() {
      var response = ee.SPICY.sample();
      this.emit( ':tellWithCard', skill_name, response );
    },
    'EEWthIntent': function() {
      var response = ee.WTH.sample();
      this.emit( ':tellWithCard', skill_name, response );
    },
    'MakeComedyNameIntent': function() {
      var response = generate_response(':comedy');
      this.emit( ':tellWithCard', skill_name, response );
    },
    'MakeGenericNameIntent': function() {
      var response = generate_response();
      this.emit( ':tellWithCard', skill_name, response );
    },
    'MakePageantNameIntent': function() {
      var response = generate_response(':pageant');
      this.emit( ':tellWithCard', skill_name, response );
    },
    'AMAZON.HelpIntent': function () {
      this.emit( ':ask', help_msg, help_prompt );
    },
    'AMAZON.CancelIntent': function () {
      this.emit( ':tellWithCard', goodbye_msg );
    },
    'AMAZON.StopIntent': function () {
      this.emit( ':tellWithCard', goodbye_msg );
    }
};


// Make some Lambda magic happen
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = app_id;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
