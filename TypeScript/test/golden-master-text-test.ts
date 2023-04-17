import {GildedRose} from '../app/gilded-rose';
import {NormalItem} from '../app/item/normal-item';
import {AgedBrieItem} from '../app/item/aged-brie-item';
import {SulfurasItem} from '../app/item/sulfuras-item';
import {BackstagePassItem} from '../app/item/backstage-pass-item';
import {ConjuredItem} from '../app/item/conjured-item';

const items = [
  new NormalItem("+5 Dexterity Vest", 10, 20), //
  new AgedBrieItem(2, 0), //
  new NormalItem("Elixir of the Mongoose", 5, 7), //
  new SulfurasItem(), //
  new SulfurasItem(),
  new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  // this conjured item does not work properly yet
  new ConjuredItem("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

console.log("OMGHAI!");

for (let i = 0; i <= days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
