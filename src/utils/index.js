import MESES from '../constantes'

export const getDateNow = ( diasAgregar) => {
  let fecha = new Date();

  fecha.setDate(fecha.getDate() + diasAgregar);

  let dia = fecha.getDate();
  let mes = MESES[fecha.getMonth()];

  return dia + " " + mes  ;
}

export const getDateFormat=()=>{
  let fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = MESES[fechaActual.getMonth()];

  return dia +" "+mes
}