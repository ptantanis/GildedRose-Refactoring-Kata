import {Item as ExternalItem} from '../external/item';


const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

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
    if (newQuality < MIN_QUALITY) {
      return MIN_QUALITY
    }

    if (newQuality > MAX_QUALITY) {
      return MAX_QUALITY
    }

    return newQuality
  }
}

