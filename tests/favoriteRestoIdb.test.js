import { itActsAsFavoriteRestoModel } from "./contracts/favoriteRestoContract";
import FavoriteRestoIdb from "../src/scripts/data/favorite-restaurant-idb";

describe('Favorite Resto Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
            await FavoriteRestoIdb.deleteResto(resto.id);
        })
    })

    itActsAsFavoriteRestoModel(FavoriteRestoIdb);
})