import { EventEmitter } from 'eventemitter3';

class Emitter extends EventEmitter {
  EVENT_CHANGE = 'a1';
  EVENT_FULL_SCREEN = 'a2';
  EVENT_VIEW_CHANGE = 'a3';
  EVENT_LANG_CHANGE = 'b1';
}
const emitter = new Emitter();

export default emitter;
