import {getImagen} from '../../base/11-async-await'


describe('Pruebas con Async y await & fetch', () => {
    
    test('debe retornar una url', async() => {
        
        const url = await getImagen();

        expect( typeof url).toBe('string');
        
    })
    
})
