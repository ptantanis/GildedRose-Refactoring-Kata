import {Item as ExternalItem} from '../external/item';


export abstract class Item extends ExternalItem {

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  abstract updateQuality(): void

  protected updateSellIn(): void {
    this.sellIn -= 1
  }

  protected calculateAdjustedQuality(adjustQuality: number): number {
    const newQuality = this.quality + adjustQuality
    if (newQuality < 0) {
      return 0
    }

    if (newQuality > 50) {
      return 50
    }

    return newQuality
  }
}

