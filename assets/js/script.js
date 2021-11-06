function Consultorio(nombre, paciente) {    
    Object.defineProperties(this, {
        "_nombre": {value: nombre, writable: true},
        "_paciente": {value: paciente, writable: true}
    });
}
function Paciente(nombre, paciente, rut, diagnostico) {    
    Object.defineProperties(this, {
        "_nombre": {value: nombre, writable: true},
        "_paciente": {value: paciente, writable: true},
        "_rut": {value: rut, writable: true},
        "_diagnostico": {value: ((Array.isArray(diagnostico))?diagnostico.join(', '): diagnostico) , writable: true}
    });
}

Consultorio.prototype.filterPacienteByName = function(nombre){
    console.table(this._paciente.filter(paciente =>  paciente._nombre == nombre));
}
Consultorio.prototype.getPacientes = function(){
    console.table(this._paciente.map(paciente => {return paciente;}));
}

const consultorio = new Consultorio("Ñuñork", [
    new Paciente("Juan", 25, "12345678-1", "diabetes"),
    new Paciente ("Pedro", 30 , "12225554-7", "Lupus"),
    new Paciente ("Pedro", 30 , "12225554-7", "Covid-19"),
    new Paciente ("Julián", 30 , "12225554-7", "Gonorrea"),
    new Paciente ("Cristóbal", 30 , "12225554-7", ["Sífilis", "Gonorrea"]),
    new Paciente ("Ignacio", 30 , "12225554-7", "Ladilla"),
]);