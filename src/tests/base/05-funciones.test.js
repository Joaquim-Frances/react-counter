import { getUser, getUsuarioActivo } from "../../base/05-funciones";




describe('pruebas en 95 funciones', ()=>{
    test(' get User debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuario Activo debe retornar un objeto con nombre por parametro', () => {
        
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: 'Quim',
        };

        const userActive = getUsuarioActivo('Quim');

        expect(usuarioActivoTest).toEqual(userActive);
    });
    
    
})