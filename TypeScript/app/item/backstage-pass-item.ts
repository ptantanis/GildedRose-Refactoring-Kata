import {Item} from './item';

export class BackstagePassItem extends Item {

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn <= 0) {
      this.quality = 0
      return
    } else {
      const adjustQuality = this.calculateBackStagePassesAdjustQuality();
      this.quality = this.calculateAdjustedQuality(adjustQuality)
    }
  }

  private calculateBackStagePassesAdjustQuality() {
    if (this.sellIn < 6) {
      return 3
    }

    if (this.sellIn < 11) {
      return 2
    }

    return 1
  }
}
