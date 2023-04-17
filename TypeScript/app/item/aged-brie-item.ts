import {Item} from './item';

export class AgedBrieItem extends Item {

  constructor(sellIn: number, quality: number) {
    super('Aged Brie', sellIn, quality);
  }

  updateQuality() {
    const adjustQuality = this.sellIn <= 0 ? 2 : 1
    this.quality = this.calculateAdjustedQuality(adjustQuality)
  }
}
