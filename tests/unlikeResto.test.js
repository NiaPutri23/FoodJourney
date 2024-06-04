// Batal Menyukai resto.
// 1 resto sudah disukai.
// 2 Widget untuk batal menyukai resto ditampilkan.
// 3 Widget pembatalan ditekan oleh pengguna.
// 4 resto dihapus dari daftar resto yang disukai.
//      a resto berhasil dihapus.
//      b Ternyata resto tidak ada dalam daftar resto yang disukai.

import FavoriteRestoIdb from "../src/scripts/data/favorite-restaurant-idb";
// import LikeButtonPresenter from "../src/scripts/utils/like-button-initiator";
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putResto({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteResto(1);
    });

    it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id:1})

        expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
    })

    it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id:1})

        expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
    })

    it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id:1})
        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
    })

    it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({id:1})
        // hapus resto dari daftar resto yang disukai
        await FavoriteRestoIdb.deleteResto(1);

        // simulasikan user tekan widget batal menyukai resto
        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    })
})
