import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../base/datos/heroes";


describe('pruebas con archivo de promesas', () => {

    test('debe retornar un héroe async', ( done ) => {

        const id = 2;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[1]);
                done();
            });

    });

    test('debe retornar un errror si el heroe no existe', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error =>{

                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
    
    
    
})
