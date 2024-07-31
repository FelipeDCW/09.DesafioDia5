let radiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: `FRANCISCA ROJAS`,
        rut: `9878782-1`,
        prevision: `FONASA`
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: `PAMELA ESTRADA`,
        rut: `15345241-3`,
        prevision: `ISAPRE`
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: `ARMANDO LUNA`,
        rut: `16445345-9`,
        prevision: `ISAPRE`
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: `MANUEL GODOY`,
        rut: `17666419-0`,
        prevision: `FONASA`
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: `RAMON ULLOA`,
        rut: `14989389-K`,
        prevision: `FONASA`
    }
]
let traumatologia = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: `PAULA SANCHEZ`,
        rut: `15554774-5`,
        prevision: `FONASA`
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: `ANGÉLICA NAVAS`,
        rut: `15444147-9`,
        prevision: `ISAPRE`
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: `ANA KLAPP`,
        rut: `17879423-9`,
        prevision: `ISAPRE`
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: `FELIPE MARDONES`,
        rut: `1547423-6`,
        prevision: `ISAPRE`
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: `DIEGO MARRE`,
        rut: `16554741-K`,
        prevision: `FONASA`
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: `CECILIA MENDEZ`,
        rut: `9747535-8`,
        prevision: `ISAPRE`
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: `MARCIAL SUAZO`,
        rut: `11254785-5`,
        prevision: `ISAPRE`
    }
]
let dental = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: `MARCELA RETAMAL`,
        rut: `11123425-6`,
        prevision: `ISAPRE`
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: `ANGEL MUÑOZ`,
        rut: `9878789-2`,
        prevision: `ISAPRE`
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: `MARIO KAST`,
        rut: `7998789-5`,
        prevision: `FONASA`
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: `KARIN FERNANDEZ`,
        rut: `18887662-K`,
        prevision: `FONASA`
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: `HUGO SANCHEZ`,
        rut: `17665461-4`,
        prevision: `FONASA`
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: `ANA SEPULVEDA`,
        rut: `14441281-0`,
        prevision: `ISAPRE`
    }
]

let cadena = `<p>Primera atención radiologia: ${radiologia[0].paciente} - ${radiologia[0].prevision} a | Última atención: | ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision} </p>`
cadena = cadena + `<p>Primera atención traumatologia: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} a | Última atención: | ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision} </p>`
cadena = cadena + `<p>Primera atención dental: ${dental[0].paciente} - ${dental[0].prevision} a | Última atención: | ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision} </p>`

document.querySelector(`#atencion`).innerHTML = cadena

let cuerpotabla = document.querySelector(`#cuerpotabla`)

let cadenaDatos = ''
radiologia.forEach(function(indice){
    cadenaDatos = cadenaDatos + `<tr>
            <td>${indice.hora}</td>
            <td>${indice.especialista}</td>
            <td>${indice.paciente}</td>
            <td>${indice.rut}</td>
            <td>${indice.prevision}</td>
          </tr>`

})

traumatologia.forEach(function(indice){
    cadenaDatos = cadenaDatos + `<tr>
            <td>${indice.hora}</td>
            <td>${indice.especialista}</td>
            <td>${indice.paciente}</td>
            <td>${indice.rut}</td>
            <td>${indice.prevision}</td>
          </tr>`

})

dental.forEach(function(indice){
    cadenaDatos = cadenaDatos + `<tr>
            <td>${indice.hora}</td>
            <td>${indice.especialista}</td>
            <td>${indice.paciente}</td>
            <td>${indice.rut}</td>
            <td>${indice.prevision}</td>
          </tr>`

})


cuerpotabla.innerHTML = cadenaDatos

traumatologia = [
    { hora: '9:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }]

traumatologia.push()

radiologia.shift()
radiologia.pop()

let divdental = document.querySelector(`#dental`)

cadenaDatos = ''
for (let i = 0; i < dental.length; i++) {
    cadenaDatos = cadenaDatos + `${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision} <br>`
}
divdental.innerHTML = cadenaDatos

let divpaciente = document.querySelector(`#paciente`)

cadenaDatos = ''
radiologia.forEach(function(indice){
    cadenaDatos = cadenaDatos + `${indice.paciente} <br>`
})
traumatologia.forEach(function(indice){
    cadenaDatos = cadenaDatos + `${indice.paciente} <br>`
})
dental.forEach(function(indice){
    cadenaDatos = cadenaDatos + `${indice.paciente} <br>`
})

divpaciente.innerHTML = cadenaDatos

let divisapre = document.querySelector(`#isapre`)
cadenaDatos=''
let dental2=(dental.filter(function(indice)
{
    return  indice.prevision=='ISAPRE'
}))

dental2.map(function(indice){
    cadenaDatos= cadenaDatos + `${indice.paciente} - ${indice.prevision} <br>`
    return cadenaDatos
})
divisapre.innerHTML = cadenaDatos

let divfonasa = document.querySelector(`#fonasa`)
cadenaDatos=''
let traumatologia2 =(traumatologia.filter(function(indice)
{
    return  indice.prevision=='FONASA'
}))

traumatologia2.map(function(indice){
    cadenaDatos= cadenaDatos + `${indice.paciente} - ${indice.prevision} <br>`
    return cadenaDatos
})
divfonasa.innerHTML = cadenaDatos