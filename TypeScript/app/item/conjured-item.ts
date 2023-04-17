import {Item} from './item';

export class ConjuredItem extends Item {
  updateQuality() {
    const adjustQuality = this.sellIn <= 0 ? -4 : -2
    this.quality = this.calculateAdjustedQuality(adjustQuality)

    this.updateSellIn()
  }

}
