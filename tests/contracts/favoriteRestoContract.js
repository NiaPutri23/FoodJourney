const itActsAsFavoriteRestoModel = (favoriteResto) => {
    it('should return the Resto that has been added', async () => {
      favoriteResto.putResto({ id: 1 });
      favoriteResto.putResto({ id: 2 });
   
      expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
      expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
      expect(await favoriteResto.getResto(3)).toEqual(undefined);
    });
   
    it('should refuse a Resto from being added if it does not have the correct property', async () => {
      favoriteResto.putResto({ aProperty: 'property' });
   
      expect(await favoriteResto.getAllResto()).toEqual([]);
    });
   
    it('can return all of the Restos that have been added', async () => {
      favoriteResto.putResto({ id: 1 });
      favoriteResto.putResto({ id: 2 });
   
      expect(await favoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
    });
   
    it('should remove favorite Resto', async () => {
      favoriteResto.putResto({ id: 1 });
      favoriteResto.putResto({ id: 2 });
      favoriteResto.putResto({ id: 3 });
   
      await favoriteResto.deleteResto(1);
   
      expect(await favoriteResto.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
    });
   
    it('should handle request to remove a Resto even though the Resto has not been added', async () => {
      favoriteResto.putResto({ id: 1 });
      favoriteResto.putResto({ id: 2 });
      favoriteResto.putResto({ id: 3 });
   
      await favoriteResto.deleteResto(4);
   
      expect(await favoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  
    it('should be able to search for restos', async () => {
      favoriteResto.putResto({ id: 1, name: 'resto a' });
      favoriteResto.putResto({ id: 2, name: 'resto b' });
      favoriteResto.putResto({ id: 3, name: 'resto abc' });
      favoriteResto.putResto({ id: 4, name: 'ini mah resto abcd' });
   
      expect(await favoriteResto.searchRestos('resto a')).toEqual([
        { id: 1, name: 'resto a' },
        { id: 3, name: 'resto abc' },
        { id: 4, name: 'ini mah resto abcd' },
      ]);
    });
  };
   
  // eslint-disable-next-line import/prefer-default-export
  export { itActsAsFavoriteRestoModel };