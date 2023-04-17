import {Item} from './item/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      item.updateQuality()

      item.sellIn = item.sellIn - 1;
    }

    return this.items;
  }
}
