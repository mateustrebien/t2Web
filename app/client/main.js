import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import '../imports/banco.js';
import './main.html';

    Session.setDefault('page', 'login');

    Template.body.helpers({
        currentPage: function(page){
            return Session.get('page')
        }
    })

    Template.body.events({
        'click .clickChangesPage': function(event, template){
            Session.set('page', event.currentTarget.getAttribute('data-page'))
        }
    })
    Template.frequencia.rendered= function(){
  		$('body').append('<script src="./jquery.circliful.js">');
  		$("#idMatematica").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 5
			});
			
		$("#idPortugues").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 100
		});
			
		$("#idGeografia").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 95
		});
			
		$("#idHistoria").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 90
		});
			
		$("#idQuimica").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 100
		});
			
		$("#idFisica").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 99
		});
			
		$("#idIngles").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 92
		});
			
		$("#idBiologia").circliful({
			animationStep: 8,
			foregroundBorderWidth: 10,
			backgroundBorderWidth: 25,
			percentageY: 110,
			fontColor: '#FFF',
			percent: 94
		});

		/* Funcoes para animacao de cada elemento com o foco do mouse ou usando TAB*/
		$(".single").focusin(function(){
			$(this).css("background", "#243c4f")
			$(this).children(".icon-outer").css('background', '#243c4f')

		});

		$(".single").focusout(function(){
			$(this).css("background", "#c23c5a")
			$(this).children(".icon-outer").css('background', '#c23c5a')
		});

		$( ".single" ).mouseover(function() {
		  $(this).css("background", "#243c4f")
			$(this).children(".icon-outer").css('background', '#243c4f')
		});

		$( ".single" ).mouseout(function() {
		  $(this).css("background", "#c23c5a")
			$(this).children(".icon-outer").css('background', '#c23c5a')
		});
	}

	Template.login.rendered= function(){
		$("#btLogon").click(function(){
    	$(this).button('loading').delay(500).queue(function(){
	        $(this).button('reset')
	        $(this).dequeue()
	        $(this).setAttribute('data-page', 'home');
    	});        
    });
	}

	Template.contato.rendered= function(){
		$("#btEnviar").click(function(){
    		Meteor.call('sendEmail', 'Mateus <mateust92@gmail.com>', 'bob@gmail.com', 'Hello from Meteor!', 'This is a test of Email send.');
    });
	}

	Template.sobre.rendered= function(){
		$("#btLogon").click(function(){
    	$('[data-toggle="popover"]').popover({
			placement : 'top',
			template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div>'
		
		});     
	 });
	}

	Template.sair.rendered= function(){
		$("#reiniciar").click(function(){
	 		});
	}

	Template.contato.rendered= function(){
		$(document).ready(function(){ 
			$('#letras').text('140 caracteres disponíveis');
			$('#mensagem').keydown(function () {
				var max = 140;
				var len = $(this).val().length;
				if (len >= max) {
					$('#letras').text('Você atingiu o limite de caracteres');
					$('#letras').addClass('red');
					$('#btnSubmit').addClass('disabled');            
				} 
				else {
					var ch = max - len;
					$('#letras').text(ch + ' caracteres disponíveis');
					$('#btnSubmit').removeClass('disabled');
					$('#letras').removeClass('red');            
				}
			});    
		});
	}

	Template.professores.rendered= function(){
		$('#p1').click(function(){
		});
		$('#p2').click(function(){
		});


		$(document).ready(function() {
		    var $lightbox = $('#lightbox');
		    
		    $('[data-target="#lightbox"]').on('click', function(event) {
		        var $img = $(this).find('img'), 
		            src = $img.attr('src'),
		            alt = $img.attr('alt'),
		            css = {
		                'maxWidth': $(window).width() - 100,
		                'maxHeight': $(window).height() - 100
		            };
		    
		        $lightbox.find('.close').addClass('hidden');
		        $lightbox.find('img').attr('src', src);
		        $lightbox.find('img').attr('alt', alt);
		        $lightbox.find('img').css(css);
		    });
		    
		    $lightbox.on('shown.bs.modal', function (e) {
		        var $img = $lightbox.find('img');
		            
		        $lightbox.find('.modal-dialog').css({'width': $img.width()});
		        $lightbox.find('.close').removeClass('hidden');
		    });
		});
	}


Template.notas.onRendered(function() {
  this.$('[data-toggle="popover"]').popover({placement: 'bottom'});
});

var array_horarios = [
	{ 	 
		dia: "Segunda-Feira",
	    h1: "Língua Portuguesa",
	    h2: "Língua Portuguesa",
	    h3: "Física",
	    h4: "Física",
	    h5: "Inglês",
		idh1: "Seg1",
	    ach1: "Segunda1",
	    idh2: "Seg2",
	    ach2: "Segunda2",
	    idh3: "Seg3",
	    ach3: "Segunda3",
	    idh4: "Seg4",
	    ach4: "Segunda4",
	    idh5: "Seg5",
	    ach5: "Segunda5",
	   	href1:"#Segunda1",
	    href2:"#Segunda2",
	    href3:"#Segunda3",
	    href4:"#Segunda4",
	    href5:"#Segunda5"
    },
    { 
    	dia: "Terça-Feira",
   		h1: "História",
   		h2: "História",
   		h3: "Química",
   		h4: "Química",
   		h5: "Inglês",
	    idh1: "Ter1",
	    ach1: "Terca1",
	    idh2: "Ter2",
	    ach2: "Terca2",
	    idh3: "Ter3",
	    ach3: "Terca3",
	    idh4: "Ter4",
	    ach4: "Terca4",
	    idh5: "Ter5",
	    ach5: "Terca5",
	   	href1:"#Terca1",
	    href2:"#Terca2",
	    href3:"#Terca3",
	    href4:"#Terca4",
	    href5:"#Terca5"
   },
   { 	
   		dia: "Quarta-Feira",
	    h1: "Geografia",
	    h2: "Geografia",
	    h3: "Inglês",
	    h4: "Biologia",
	    h5: "Biologia",
	    idh1: "Qua1",
	    ach1: "Quarta1",
	    idh2: "Qua2",
	    ach2: "Quarta2",
	    idh3: "Qua3",
	    ach3: "Quarta3",
	    idh4: "Qua4",
	    ach4: "Quarta4",
	    idh5: "Qua5",
	    ach5: "Quarta5",
	   	href1:"#Quarta1",
	    href2:"#Quarta2",
	    href3:"#Quarta3",
	    href4:"#Quarta4",
	    href5:"#Quarta5"
   },
   { 	
   		dia: "Quinta-Feira",
	    h1: "Língua Portuguesa",
	    h2: "Matemática",
	    h3: "Matemática",
	    h4: "Geografia",
	    h5: "História",
	    idh1: "Qui1",
	    ach1: "Quinta1",
	    idh2: "Qui2",
	    ach2: "Quinta2",
	    idh3: "Qui3",
	    ach3: "Quinta3",
	    idh4: "Qui4",
	    ach4: "Quinta4",
	    idh5: "Qui5",
	    ach5: "Quinta5",
	    href1:"#Quinta1",
	    href2:"#Quinta2",
	    href3:"#Quinta3",
	    href4:"#Quinta4",
	    href5:"#Quinta5"
   },
   { 	
   		dia: "Sexta-Feira",
	    h1: "Química",
	    h2: "Língua Portuguesa",
	    h3: "Física",
	    h4: "Biologia",
	    h5: "Inglês",
		idh1: "Sex1",
	    ach1: "Sexta1",
	    idh2: "Sex2",
	    ach2: "Sexta2",
	    idh3: "Sex3",
	    ach3: "Sexta3",
	    idh4: "Sex4",
	    ach4: "Sexta4",
	    idh5: "Sex5",
	    ach5: "Sexta5",
	    href1:"#Sexta1",
	    href2:"#Sexta2",
	    href3:"#Sexta3",
	    href4:"#Sexta4",
	    href5:"#Sexta5"
	}
];

Template.horarios.helpers({listaHor:array_horarios});
//Template.horarios.helpers({listaHor:Horarios.find().fetch()});


var array_freq = [
	{ 	 
		materia: "Português",
		id: "idPortugues"
    },
    { 	 
		materia: "Matemática",
		id: "idMatematica"
    },
    { 	 
		materia: "Inglês",
		id: "idIngles"
    },
    { 	 
		materia: "Biologia",
		id: "idBiologia"
    },
    { 	 
		materia: "Física",
		id: "idFisica"
    },
    { 	 
		materia: "Química",
		id: "idQuimica"
    },
    { 	 
		materia: "História",
		id: "idHistoria"
    },
    { 	 
		materia: "Geografia",
		id: "idGeografia"
    }
];
Template.frequencia.helpers({listaFreq:array_freq});


var array_calendario = [
	{ 	 
		mes: "Fevereiro",
		src: "../img/fev.jpg",
		alt:"Calendario do Mês de Fevereiro",
		class: "item active"
    },
    {
    	mes: "Março",
		src: "../img/mar.jpg",
		alt:"Calendario do Mês de Março",
		class: "item"
    },
    {
    	mes: "Abril",
		src: "../img/abril.jpg",
		alt:"Calendario do Mês de Abril",
		class: "item"
    },
    {
    	mes: "Maio",
		src: "../img/maio.jpg",
		alt:"Calendario do Mês de Maio",
		class: "item"
    },
    {
    	mes: "Junho",
		src: "../img/junho.jpg",
		alt:"Calendario do Mês de Junho",
		class: "item"
    },
    {
    	mes: "Julho",
		src: "../img/julho.jpg",
		alt:"Calendario do Mês de Julho",
		class: "item"
    },
    {
    	mes: "Agosto",
		src: "../img/agosto.jpg",
		alt:"Calendario do Mês de Agosto",
		class: "item"
    },
    {
    	mes: "Setembro",
		src: "../img/setembro.jpg",
		alt:"Calendario do Mês de Setembro",
		class: "item"
    },
    {
    	mes: "Outubro",
		src: "../img/outubro.jpg",
		alt:"Calendario do Mês de Outubro",
		class: "item"
    },
    {
    	mes: "Novembro",
		src: "../img/novembro.jpg",
		alt:"Calendario do Mês de Novembro",
		class: "item"
    },
    {
    	mes: "Dezembro",
		src: "../img/dezembro.jpg",
		alt:"Calendario do Mês de Dezembro",
		class: "item"
    }
];

Template.calendario.helpers({listaCal:array_calendario});
//Template.calendario.helpers({listaCal:Calendario.find().fetch()});

var array_notas = [
	{ 	 
		materia: "Português",
		n1: 5,
		n2: 8,
		n3: 9,
		n4: 7,
		media: 7.25
    },
    { 	 
		materia: "Matemática",
		n1: 7,
		n2: 6,
		n3: 6,
		n4: 7,
		media: 6.5
    },
    { 	 
		materia: "Inglês",
		n1: 8,
		n2: 8,
		n3: 9,
		n4: 8,
		media: 8.25
    },
    { 	 
		materia: "Biologia",
		n1: 5,
		n2: 8,
		n3: 5,
		n4: 7,
		media: 6.25
    },
    { 	 
		materia: "Física",
		n1: 9,
		n2: 9,
		n3: 9,
		n4: 7,
		media: 8.5
    },
    { 	 
		materia: "Química",
		n1: 10,
		n2: 8,
		n3: 9,
		n4: 10,
		media: 9.25
    },
    { 	 
		materia: "História",
		n1: 9,
		n2: 7,
		n3: 5,
		n4: 7,
		media: 7
    },
    { 	 
		materia: "Geografia",
		n1: 9,
		n2: 10,
		n3: 9,
		n4: 8,
		media: 9
    }
];
Template.notas.helpers({listaNotas:array_notas});
//Template.notas.helpers({listaNotas:Notas.find().fetch()});

var array_eventos = [
	{ 	 
		datetime: "2017-05-19",
		dia: 19,
		mes: "Maio",
		ano: 2017,
		time: "Evento1",
		title: "19 de Maio",
		desc: "Apresentação....."
    },
    { 	 
		datetime: "2017-05-28",
		dia: 28,
		mes: "Maio",
		ano: 2017,
		time: "Evento2",
		title: "28 de Maio",
		desc: "Reunião..."
    }
];
Template.dadosHome.helpers({listaEventos:array_eventos});
//Template.dadosHome.helpers({listaEventos:Eventos.find().fetch()});
