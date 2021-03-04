import { getSaludo } from '../../base/02-template-string';

describe('pruebas en template-string.js', () => {

    
    test('getSaludo retorna Saludo', () => {
            const nombre= 'Quim';

            const saludo = getSaludo(nombre);

            expect(saludo).toBe('Hola ' + nombre);
    })

    test('debe retornar "Hola Carlos!" si no hay parametro nombre', () => {
            
            const saludo = getSaludo();

            expect(saludo).toBe('Hola Carlos!');
    })
    
    
})
