const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
}

let argv = require('yargs')
    .command('crear', 'Crear tareas por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de las tareas', { descripcion, completado })
    .command('borrar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;
module.exports = {
    argv
}