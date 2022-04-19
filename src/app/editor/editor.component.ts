import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  datosPersonales = 
    {
      nombre:"Jose Alain Diaz Carrero",
      email: "jadcve@gmail.com",
      tlf: "+56 991364514",
      linkedin: "https://www.linkedin.com/in/jadcve/"  
    };

  llaveAbre = '{';
  llaveCierra = '}';

  numbers = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,
    98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,
    134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,
    170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186
  ];



  tresit = 
  {
    nombreEmpresa: '3IT',
    cargo: "Ingeniero de Software",
    fecha: "Diciembre 2020 - Actualidad",
    ciudad: "Santiago de Chile",
    p1: "Más Conectados 3.0 para el cliente Banco de Chile",
    p2: "Portal de reclutamiento y selección para el cliente Banco de Chile"
  };

  netred = 
  {
    nombreEmpresa: 'NETRED',
    cargo: "Ingeniero desarrollador full stack",
    fecha: "Agosto 2020 - Diciembre 2020",
    ciudad: "Santiago de Chile",
    p1: "Sistema portal médico de RedSalud",
    p2: "Integración de servicios RedSalud con apigee",
    p3: "Sistema botón de pago de RedSalud"
  };

  glovocapital = 
  {
    nombreEmpresa: 'GLOVOCAPITAL',
    cargo: "Technical Lead - Ingeniero de Software ",
    fecha: "Noviembre 2019 - Agosto 2020",
    ciudad: "Santiago de Chile",
    p1: "Sistema de gestión de vehiculos y transporte VINCAR",
    p2: "Integración de Dynamics 365 para Lampro",
  };
  
  kpi = 
  {
    nombreEmpresa: 'KPI ESTUDIOS',
    cargo: "Analista y Desarrollador de software",
    fecha: "Diciembre 2018 - Octubre 2019",
    ciudad: "Santiago de Chile",
    p1: "Mejora plataforma de intranet de la empresa",
    p2: "Desarrollo de plataforma de interacción con los clientes",
    p3: "Integraciones de herramientas de analytics y servicios cloud",
  };

  actis = 
  {
    nombreEmpresa: 'ACTIS LTDA',
    cargo: "Ingeniero de Software",
    fecha: "Noviembre 2018 - Diciembre 2018",
    ciudad: "Santiago de Chile",
    p1: "Mapa de Vulnerabilidad Social del ministerio de desarrollo Social del Gobierno de Chile.",

  };

  redpill = 
  {
    nombreEmpresa: 'RED PILL GRUPO BIWISER',
    cargo: "Ingeniero de datos - Full stack developer",
    fecha: "Marzo 2018 - Octubre 2018",
    ciudad: "Santiago de Chile",
    p1: "Sistema de forecast y predicción de venta realizado para la empresa de retail Komax",
    p2: "Sistema automatizado para el sugerido de distribución desarrollado para la empresa Biwiser",
    p3: "Sistema de Modelo de Forecasting de Demanda y Staffing en E-commerce de Walmar"
  };

  systam = 
  {
    nombreEmpresa: 'SISTAM SYSTEM',
    cargo: "Technical Lead - Ingeniero de Software ",
    fecha: "Junio 2017 - Febrero 2018",
    ciudad: "Remoto para Santiago de Chile",
    p1: "Sistema de compensación de emisiones (SICEM) desarrollado para el ministerio del ambiente de Chile",
  };

  gotaim = 
  {
    nombreEmpresa: 'GOTAIM SERVICES LLC',
    cargo: "Web developer",
    fecha: "Enero 2015 - Junio 2017",
    ciudad: "Remoto para Texas EEUU",
    p1: "Sistema Dseptic, desarrollado para la empresa Dulworth Septic. Texas EEUU.",
    p2: "Sistema Xcharger desarrollado para la empresa Belmar Services. Texas EEUU.",
    p3: "Desarrollador web de diversos portales para empresas ubicadas en Estados Unidos",
  };

  sao = 
  {
    nombreEmpresa: 'SAO CONSULTING',
    cargo: "Analista de sistema - Desarrollador de Software ",
    fecha: "Enero 2015 - Junio 2016",
    ciudad: "Mérida - Venezuela",
    p1: "Desarrollador de varios portales para diversas empresas al rededor de varios países",
    p2: "Sistema de gestión hotelero Coventur",
  };

  alcaldia = 
  {
    nombreEmpresa: 'ALCALDIA DEL MUNICIPIO JOSÉ ANTONIO PAÉZ',
    cargo: "Analista de sistema",
    fecha: "Enero 2014 - Diciembre 2014",
    ciudad: "Apure - Venezuela",
    p1: "Proyecto de automatización de servicios de información de la alcaldía ",
    p2: "Proyecto de creación de la sala situacional para el manejo, control y prevención de emergencias en el municipio",
    p3: "Proyecto de  modernización en las redes de transmisión de datos y comunicaciones mediante servicios de VoIP",
  };

  pdvsa = 
  {
    nombreEmpresa: 'PDVSA INDUSTRIAL',
    cargo: "Desarrollador de Software ",
    fecha: "Diciembre 2012 - Diciembre 2013",
    ciudad: "Santiago de Chile",
    p1: "Sistema de control y monitoreo de pozos desarrollado para Petróleos de Venezuela S.A (PDVSA).",
  };

  empresas = [this.tresit, this.netred];
 conocimientos =
 [
   "Lenguajes de programación: PHP, C/C++, Java, JavaScript, RubyOnRails",
   "Frameworks: Laravel, Angular, Bootstrap, Cake PHP, Spring boot",
   "APIGEE- Edge",
   "Cloud: AWS, Azure, GCP",
   "Manejo de Bases de Datos Relacionales",
   "Redes de Computadoras (CCNA CISCO Systems)",
   "Jira",
   "Manejo de control de versiones GITHUB, GITLAB, BITBUCKET, SVN",
   "Metodologías de desarrollo agiles",
   "Telefonía sobre VoIP",
   "IPv6,",
   "Manejo, instalación y configuración de sistemas operativos Windows y GNU/Linux",
   "Dynamics 365 enterprise",
 ] 

}
