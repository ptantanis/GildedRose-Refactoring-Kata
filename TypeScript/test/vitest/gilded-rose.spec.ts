import {GildedRose} from '../../app/gilded-rose';
import {NormalItem} from '../../app/item/normal-item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new NormalItem('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
