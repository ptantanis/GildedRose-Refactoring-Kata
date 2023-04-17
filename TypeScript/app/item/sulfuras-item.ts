import {Item} from './item';

export class SulfurasItem extends Item {

  constructor() {
    super('Sulfuras, Hand of Ragnaros',  0, 80);
  }
  updateQuality() {
    // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  }
}
