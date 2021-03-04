


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre) {
    if (nombre) {
        return 'Hola ' + nombre;
    }else{
        return 'Hola Carlos!';
    }
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );