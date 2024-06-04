import FavoriteRestoView from "../src/scripts/views/pages/liked-restos/favorite-resto-search-view";
import FavoriteRestoShowPresenter from "../src/scripts/views/pages/liked-restos/favorite-resto-show-presenter";

describe('Showing all favorite restos', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestoView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restos have been liked', () => {
        it('should ask for the favorite restos', () => {
            const favoriteRestos = {
                getAllResto: jest.fn().mockImplementation(() => []),
            };
            new FavoriteRestoShowPresenter({
                view,
                favoriteRestos,
            });
            expect(favoriteRestos.getAllResto).toHaveBeenCalledTimes(1);
        });
    });

    describe('When favorite restos exist', () => {
        let view;

        const renderTemplate = () => {
            view = new FavoriteRestoView();
            document.body.innerHTML = view.getTemplate();
        };

        beforeEach(() => {
            renderTemplate();
        });

        it('should show the restos', (done) => {
            document.getElementById('restos').addEventListener('restos:updated', () => {
                expect(document.querySelectorAll('.resto-item').length).toEqual(2);
                done();
            });
            const favoriteRestos = {
                getAllResto: jest.fn().mockImplementation(() => [
                    {   
                        id: 11, 
                        name: 'A',
                        rating: 4.5,
                        description: 'Sebuah resto A'
                    },
                    {
                        id: 22, 
                        name: 'B',
                        rating: 4.7,
                        description: 'Sebuah resto B'
                    },
                ]),
            };
            new FavoriteRestoShowPresenter({
                view,
                favoriteRestos,
            });
        });
    });
});