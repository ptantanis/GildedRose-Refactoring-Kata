import {Item} from './item';

export class NormalItem extends Item {
  updateQuality() {
    const adjustQuality = this.sellIn <= 0 ? -2 : -1
    this.quality = this.calculateAdjustedQuality(adjustQuality)
  }

}
