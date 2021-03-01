describe('pruebas con el archivo demo', () => {
    
    test('deben de ser iguales los strings', () => {
        
        //1.inicialización.
        const mensaje = 'Hola mundo';
    
        //2.estímulo.
        const mensaje2 = "Hola mundo";
    
        //3.observar el comportamiento.
        expect(mensaje).toBe(mensaje2)
    
    })

    test('deben ser iguales los numeros', () => {
        
        const edad1 = 42;

        const edad2 = 42;

        expect(edad1).toBe(edad2);
    })
    

})