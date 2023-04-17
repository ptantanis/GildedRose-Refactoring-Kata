import {Item} from './item/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        continue
      }

      item.updateQuality()

      item.sellIn = item.sellIn - 1;
    }

    return this.items;
  }
}
