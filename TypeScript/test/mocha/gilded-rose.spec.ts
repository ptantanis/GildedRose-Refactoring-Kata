import { expect } from 'chai';
import { GildedRose } from '../../app/gilded-rose';
import {Item} from '../../app/item/item';


describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });
});
