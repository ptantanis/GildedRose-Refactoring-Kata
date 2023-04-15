import {Item} from './item/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        continue
      }

      if (item.name == 'Aged Brie') {
        const adjustQuality = item.sellIn <= 0 ? 2 : 1
        item.quality = this.calculateItemQuality(item.quality, adjustQuality)
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0
        } else {
          let adjustQuality = this.calculateBackStagePassesAdjustQuality(item);
          item.quality = this.calculateItemQuality(item.quality, adjustQuality)
        }
      } else {
        const adjustQuality = item.sellIn <= 0 ? -2 : -1
        item.quality = this.calculateItemQuality(item.quality, adjustQuality)
      }

      item.sellIn = item.sellIn - 1;
    }

    return this.items;
  }

  private calculateBackStagePassesAdjustQuality(item: Item) {
    if (item.sellIn < 6) {
      return 3
    }

    if (item.sellIn < 11) {
      return 2
    }

    return 1
  }

  private calculateItemQuality(baseQuality: number, adjustQuality: number): number {
    const newQuality = baseQuality + adjustQuality
    if (newQuality < 0) {
      return 0
    }

    if (newQuality > 50) {
      return 50
    }

    return newQuality
  }
}
