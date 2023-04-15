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
        item.quality = this.calculateItemQuality(item.quality, 1)

        if (item.sellIn <= 0) {
          item.quality = this.calculateItemQuality(item.quality, 1)
        }
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = this.calculateItemQuality(item.quality, 1)

        if (item.sellIn < 11) {
          item.quality = this.calculateItemQuality(item.quality, 1)
        }
        if (item.sellIn < 6) {
          item.quality = this.calculateItemQuality(item.quality, 1)
        }

        if (item.sellIn <= 0) {
          item.quality = 0
        }
      } else {
        item.quality = this.calculateItemQuality(item.quality, -1)

        if (item.sellIn <= 0) {
          item.quality = this.calculateItemQuality(item.quality, -1)
        }
      }

      item.sellIn = item.sellIn - 1;
    }

    return this.items;
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
