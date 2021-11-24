export const environment = {
  production: true,
  geoserverTechnicalitiesApi: 'https://indices.jalisco.gob.mx/geoserver/iieg/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=iieg%3APlaSegGlossaryApi&outputFormat=application%2Fjson',
  geoserverLaboratoryApi: 'https://indices.jalisco.gob.mx/geoserver/iieg/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=iieg%3APlaSegGlossaryLaboratoryApi&outputFormat=application%2Fjson',
  geoserverComparativeApi: 'https://indices.jalisco.gob.mx/geoserver/iieg/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=iieg%3APlaSegGlossaryComparativeApi&outputFormat=application%2Fjson',
}
