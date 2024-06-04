const assert = require('assert')

Feature('Liking and Disliking restos');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('showing empty favorited restos', ({ I }) => {
    I.seeElement('#query', 10);
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});
  
Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/#/explore');

  I.seeElement('.resto__name a');
  const firstResto = locate('.resto__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoName = await I.grabTextFrom('.resto__name');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('searching restos', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
 
  I.amOnPage('/#/explore');
 
  I.seeElement('.resto__name a');
 
  const names = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__name a').at(i));
 
    I.seeElement('#likeButton');
    I.click('#likeButton');
 
    // eslint-disable-next-line no-await-in-loop
    names.push(await I.grabTextFrom('.resto__name'));
 
    I.amOnPage('/#/explore');
  }
 
  I.amOnPage('/#/favorite');
  I.seeElement('#query');
 
  const visibleLikedRestos = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(names.length, visibleLikedRestos);
 
  const searchQuery = names[1].substring(1, 3);
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar resto yang sesuai dengan searchQuery
  const matchingRestos = names.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedRestos = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(matchingRestos.length, visibleSearchedLikedRestos);
  for (let i = 0; i < matchingRestos.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleName = await I.grabTextFrom(locate('.resto__name').at(i + 1));
    assert.strictEqual(matchingRestos[i], visibleName);
  }
});

Scenario('unliking resto', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')
  I.amOnPage('/#/explore');
  I.seeElement('.resto__name a');

  const firstResto = locate('.resto__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestoName = await I.grabTextFrom('.resto__name');
  assert.strictEqual(firstRestoName, likedRestoName);

  // unliking first resto
  I.amOnPage('/#/explore');
  I.seeElement('.resto__name a');

  const unlikeResto = locate('.resto__name a').first();
  const unlikeRestoName = await I.grabTextFrom(unlikeResto);
  assert.strictEqual(likedRestoName, unlikeRestoName);
  I.click(unlikeRestoName);
 
  I.seeElement('#likeButton[aria-label="unlike this resto"]');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')
});