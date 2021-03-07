import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../base/datos/heroes";

describe('Testeando archivo 08-imp-exp', () => {
    
    test('test debe retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroeId => heroeId.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('test debe retornar undefined si héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })

    test('Debe retornar los heroes de marvel', () => {
        
        const owner = 'DC';
        const listaHeroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(listaHeroes).toEqual(heroesData);

    })

    test('Debe retornar un array de longitud x', () => {
        
        const owner = 'DC';
        const listaHeroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        const arrayNum = heroesData.length;

        expect(listaHeroes.length).toBe(arrayNum);

    })
    
    
})
