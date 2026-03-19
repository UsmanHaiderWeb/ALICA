import { Howl } from 'howler';

// Using reliable public UI sound effects from Google's sound library
export const sounds = {
  hover: new Howl({
    src: ['https://actions.google.com/sounds/v1/interfaces/computer_beep_short.ogg'],
    volume: 0.1,
  }),
  click: new Howl({
    src: ['https://actions.google.com/sounds/v1/interfaces/button_push.ogg'],
    volume: 0.3,
  }),
};

export const playHoverSound = () => {
  if (!sounds.hover.playing()) {
    sounds.hover.play();
  }
};

export const playClickSound = () => {
  sounds.click.play();
};
