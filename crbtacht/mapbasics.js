ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.959887, 38.95],
            zoom: 12,
			controls:[]
        }, {
			minZoom:10,
            searchControlProvider: 'yandex#search'
        });
    
	function checkState () {
        var shownObjects,
            terr = new ymaps.GeoQueryResult(),
			track = new ymaps.GeoQueryResult(),
			tmp = new ymaps.GeoQueryResult(),
			main = new ymaps.GeoQueryResult();
		var str = $( "#route" ).val();
			
		main = myObjects.search('geometry.type = "Point"'); 
		tmp = myObjects.search('properties.hintContent = "Автобусная остановка"');
		main = main.remove(tmp);//остановки тоже точки поэтому удаляем
		//добавление территории
        if ($('#ter').prop('checked'))
		{
			terr = myObjects.search('geometry.type = "Polygon"');
			main = main.add(terr);
		}	
		//добавление маршрутов
        if ($('#track').prop('checked'))
		{
			switch (str)
			{
				case '0':
					track = myObjects.search('options.strokeColor = "#4979C1"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '1':
					track = myObjects.search('properties.hintContent = "Маршрут № 1"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '2':
					track = myObjects.search('properties.hintContent = "Маршрут № 2"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '3':
					track = myObjects.search('properties.hintContent = "Маршрут № 3"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '4':
					track = myObjects.search('properties.hintContent = "Маршрут № 4"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '5':
					track = myObjects.search('properties.hintContent = "Маршрут № 5"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '7':
					track = myObjects.search('properties.hintContent = "Маршрут № 7"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '9':
					track = myObjects.search('properties.hintContent = "Маршрут № 9"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '11':
					track = myObjects.search('properties.hintContent = "Маршрут № 11"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '12':
					track = myObjects.search('properties.hintContent = "Маршрут № 12"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '14':
					track = myObjects.search('properties.hintContent = "Маршрут № 14"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '16':
					track = myObjects.search('properties.hintContent = "Маршрут № 16"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '17':
					track = myObjects.search('properties.hintContent = "Маршрут № 17"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '19':
					track = myObjects.search('properties.hintContent = "Маршрут № 19"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '26':
					track = myObjects.search('properties.hintContent = "Маршрут № 26"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '27':
					track = myObjects.search('properties.hintContent = "Маршрут № 27"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '29':
					track = myObjects.search('properties.hintContent = "Маршрут № 29"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '34':
					track = myObjects.search('properties.hintContent = "Маршрут № 34"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '51':
					track = myObjects.search('properties.hintContent = "Маршрут № 51"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '57':
					track = myObjects.search('properties.hintContent = "Маршрут № 57"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case '110':
					track = myObjects.search('properties.hintContent = "Маршрут № 110"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't1':
					track = myObjects.search('properties.hintContent = "Троллейбус № 1"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't2':
					track = myObjects.search('properties.hintContent = "Троллейбус № 2"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't3':
					track = myObjects.search('properties.hintContent = "Троллейбус № 3"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't4':
					track = myObjects.search('properties.hintContent = "Троллейбус № 4"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't5':
					track = myObjects.search('properties.hintContent = "Троллейбус № 5"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't6':
					track = myObjects.search('properties.hintContent = "Троллейбус № 6"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't7':
					track = myObjects.search('properties.hintContent = "Троллейбус № 7"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't8':
					track = myObjects.search('properties.hintContent = "Троллейбус № 8"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't9':
					track = myObjects.search('properties.hintContent = "Троллейбус № 9"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't10':
					track = myObjects.search('properties.hintContent = "Троллейбус № 10"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
				
				case 't11':
					track = myObjects.search('properties.hintContent = "Троллейбус № 11"')
						.add(myObjects.search('properties.hintContent = "Автобусная остановка"'));
				break;
			}
			main = main.add(track);
		}
        shownObjects = main.addToMap(myMap);
        myObjects.remove(shownObjects).removeFromMap(myMap);
    }	
	$('#ter').click(checkState);
	$('#track').click(checkState);
	$( "#route" ).change(checkState);
	
	var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout">A</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [44.606015,40.134608], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	
	var circlePlacemark1= new ymaps.Placemark([44.606015,40.134608], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark2= new ymaps.Placemark([44.605237,40.134142], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark3= new ymaps.Placemark([44.606478,40.132399], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark4= new ymaps.Placemark([44.606138,40.132942], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark5= new ymaps.Placemark([44.607104,40.126301], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark6= new ymaps.Placemark([44.606859,40.126194], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark7= new ymaps.Placemark([44.607579,40.119141], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark8= new ymaps.Placemark([44.608025,40.118065], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark9= new ymaps.Placemark([44.608314,40.112356], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark10= new ymaps.Placemark([44.608766,40.110714], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark11= new ymaps.Placemark([44.609042,40.108601], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark12= new ymaps.Placemark([44.608728,40.108407], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark13= new ymaps.Placemark([44.609479,40.103912], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark14= new ymaps.Placemark([44.609249,40.103687], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark15= new ymaps.Placemark([44.609946,40.099994], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark16= new ymaps.Placemark([44.610291,40.094168], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark17= new ymaps.Placemark([44.610720,40.092237], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark18= new ymaps.Placemark([44.611032,40.087648], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark19= new ymaps.Placemark([44.611515,40.084977], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark20= new ymaps.Placemark([44.611544,40.082415], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark21= new ymaps.Placemark([44.611881,40.081664], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark22= new ymaps.Placemark([44.611842,40.080130], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark23= new ymaps.Placemark([44.612197,40.078824], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark24= new ymaps.Placemark([44.612297,40.071967], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark25= new ymaps.Placemark([44.611944,40.069747], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark26= new ymaps.Placemark([44.612420,40.066807], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark27= new ymaps.Placemark([44.612527,40.063449], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark28= new ymaps.Placemark([44.612374,40.062998], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark29= new ymaps.Placemark([44.612895,40.063288], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark30= new ymaps.Placemark([44.609459,40.062472], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark31= new ymaps.Placemark([44.616944,40.066019], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark32= new ymaps.Placemark([44.616439,40.067916], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark33= new ymaps.Placemark([44.614598,40.071225], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark34= new ymaps.Placemark([44.614353,40.071949], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark35= new ymaps.Placemark([44.613836,40.072580], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark36= new ymaps.Placemark([44.615639,40.077711], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark37= new ymaps.Placemark([44.610544,40.109893], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark38= new ymaps.Placemark([44.610221,40.109839], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark39= new ymaps.Placemark([44.608520,40.109485], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark40= new ymaps.Placemark([44.604732,40.108645], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark41= new ymaps.Placemark([44.602650,40.108293], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark42= new ymaps.Placemark([44.601159,40.107848], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark43= new ymaps.Placemark([44.600300,40.110310], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark44= new ymaps.Placemark([44.600453,40.110975], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark45= new ymaps.Placemark([44.599881,40.116006], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark46= new ymaps.Placemark([44.599567,40.117701], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark47= new ymaps.Placemark([44.599176,40.122804], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark48= new ymaps.Placemark([44.598359,40.131149], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark49= new ymaps.Placemark([44.613522,40.137354], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark50= new ymaps.Placemark([44.611146,40.137064], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark51= new ymaps.Placemark([44.610886,40.136549], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark52= new ymaps.Placemark([44.607438,40.135468], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark53= new ymaps.Placemark([44.607729,40.136047], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark54= new ymaps.Placemark([44.605912,40.134963], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark55= new ymaps.Placemark([44.601513,40.134041], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark56= new ymaps.Placemark([44.598293,40.133032], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark57= new ymaps.Placemark([44.596384,40.132069], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark58= new ymaps.Placemark([44.595618,40.132112], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark59= new ymaps.Placemark([44.592677,40.131309], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark60= new ymaps.Placemark([44.592195,40.130965], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark61= new ymaps.Placemark([44.589839,40.131409], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark62= new ymaps.Placemark([44.582164,40.134890], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark63= new ymaps.Placemark([44.581689,40.134901], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark64= new ymaps.Placemark([44.578072,40.135234], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark65= new ymaps.Placemark([44.576619,40.134767], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark66= new ymaps.Placemark([44.574794,40.133892], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark67= new ymaps.Placemark([44.574584,40.133725], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark68= new ymaps.Placemark([44.570955,40.135725], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark69= new ymaps.Placemark([44.565037,40.139590], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark70= new ymaps.Placemark([44.575827,40.138028], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark71= new ymaps.Placemark([44.572732,40.127446], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark72= new ymaps.Placemark([44.575208,40.133229], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark73= new ymaps.Placemark([44.574556,40.133368], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark74= new ymaps.Placemark([44.614754,40.136154], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark75= new ymaps.Placemark([44.615122,40.131949], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark76= new ymaps.Placemark([44.616271,40.120005], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark77= new ymaps.Placemark([44.616578,40.114169], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark78= new ymaps.Placemark([44.617175,40.110478], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark79= new ymaps.Placemark([44.614815,40.108483], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark80= new ymaps.Placemark([44.609570,40.107579], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark81= new ymaps.Placemark([44.604588,40.119338], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark82= new ymaps.Placemark([44.604128,40.120926], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark83= new ymaps.Placemark([44.603929,40.124552], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark84= new ymaps.Placemark([44.590686,40.119660], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark85= new ymaps.Placemark([44.591406,40.115282], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark86= new ymaps.Placemark([44.590517,40.119724], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark87= new ymaps.Placemark([44.592495,40.115025], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark88= new ymaps.Placemark([44.595163,40.115990], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark89= new ymaps.Placemark([44.596180,40.115929], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark90= new ymaps.Placemark([44.596961,40.116401], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark91= new ymaps.Placemark([44.594232,40.108461], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark92= new ymaps.Placemark([44.595290,40.108955], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark93= new ymaps.Placemark([44.596655,40.109298], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark94= new ymaps.Placemark([44.600115,40.109760], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark95= new ymaps.Placemark([44.585473,40.125701], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark96= new ymaps.Placemark([44.584982,40.125734], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark97= new ymaps.Placemark([44.579644,40.129750], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark98= new ymaps.Placemark([44.578694,40.130548], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark99= new ymaps.Placemark([44.628361,40.077573], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark100= new ymaps.Placemark([44.624088,40.070604], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark101= new ymaps.Placemark([44.622460,40.068669], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark102= new ymaps.Placemark([44.622536,40.068486], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark103= new ymaps.Placemark([44.619028,40.063996], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark104= new ymaps.Placemark([44.618194,40.064397], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark105= new ymaps.Placemark([44.605353,40.062918], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark106= new ymaps.Placemark([44.605567,40.061888], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark107= new ymaps.Placemark([44.605855,40.058636], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark108= new ymaps.Placemark([44.611671,40.035692], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark109= new ymaps.Placemark([44.612070,40.035177], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark110= new ymaps.Placemark([44.614233,40.028672], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark111= new ymaps.Placemark([44.614727,40.028109], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark112= new ymaps.Placemark([44.615524,40.025770], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark113= new ymaps.Placemark([44.617148,40.023023], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark114= new ymaps.Placemark([44.617889,40.022046], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark115= new ymaps.Placemark([44.620402,40.017669], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark116= new ymaps.Placemark([44.620341,40.017519], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark117= new ymaps.Placemark([44.623295,40.012775], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark118= new ymaps.Placemark([44.628012,40.005427], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark119= new ymaps.Placemark([44.591939,40.105079], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark120= new ymaps.Placemark([44.595005,40.094491], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark121= new ymaps.Placemark([44.591026,40.098720], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark122= new ymaps.Placemark([44.618598,40.120996], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark123= new ymaps.Placemark([44.618506,40.121425], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark124= new ymaps.Placemark([44.620805,40.124085], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark125= new ymaps.Placemark([44.616069,40.123291], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark126= new ymaps.Placemark([44.615456,40.122691], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark127= new ymaps.Placemark([44.614199,40.121747], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark128= new ymaps.Placemark([44.614536,40.118249], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark129= new ymaps.Placemark([44.614766,40.117584], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark130= new ymaps.Placemark([44.615180,40.111297], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark131= new ymaps.Placemark([44.615456,40.110610], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark132= new ymaps.Placemark([44.593293,40.137784], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark133= new ymaps.Placemark([44.610405,40.105358], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark134= new ymaps.Placemark([44.612290,40.105508], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark135= new ymaps.Placemark([44.619500,40.107443], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark136= new ymaps.Placemark([44.621577,40.107279], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark137= new ymaps.Placemark([44.621179,40.102807], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark138= new ymaps.Placemark([44.621337,40.100994], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark139= new ymaps.Placemark([44.621421,40.100876], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark140= new ymaps.Placemark([44.621914,40.095922], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark141= new ymaps.Placemark([44.622021,40.095461], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark142= new ymaps.Placemark([44.623093,40.086300], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark143= new ymaps.Placemark([44.623907,40.079116], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark144= new ymaps.Placemark([44.624698,40.071835], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark145= new ymaps.Placemark([44.611314,40.070314], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark146= new ymaps.Placemark([44.611352,40.070658], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark147= new ymaps.Placemark([44.610609,40.076245], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark148= new ymaps.Placemark([44.610243,40.080038], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark149= new ymaps.Placemark([44.609280,40.088906], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark150= new ymaps.Placemark([44.608722,40.094785], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark151= new ymaps.Placemark([44.608531,40.095654], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	var circlePlacemark152= new ymaps.Placemark([44.608019,40.100364], {hintContent: 'Автобусная остановка'},{iconLayout: circleLayout,iconShape: {type: 'Circle',coordinates: [0, 0],radius: 7}});
	
	var route1 = new ymaps.Polyline([
		[44.621822,40.107893],//kr-oktya
		[44.609217,40.105038],//proletka
		[44.608748,40.109591],//gogolya
		[44.600683,40.107810],//pushkina
		[44.602473,40.090954],//starobazarnaya
		[44.602634,40.090906],//
		[44.603400,40.090954],//
		[44.603580,40.090975],//
		[44.603868,40.090970],//
		[44.603929,40.090927],//
		[44.604025,40.090804],//komsomolskaya
		[44.604098,40.088626],//
		[44.604082,40.088368],//
		[44.603917,40.087896],//
		[44.603734,40.087606],//
		[44.603569,40.087451],//voroshilova
		[44.603504,40.087322],//
		[44.603238,40.086491],//
		[44.602943,40.085510],//
		[44.602533,40.084120],//
		[44.602190,40.082660],//
		[44.600177,40.072693],//zapadnaya
		[44.599364,40.073015],//voroshilova
		[44.599456,40.072742],//
		[44.599475,40.072532],//
		[44.599207,40.067855],//
		[44.599165,40.067630],//9janvarya
		[44.597571,40.067276],//goncharova
		[44.597548,40.066149],//
		[44.597559,40.065135],//j.popova
		[44.600144,40.065458],//voroshilova
		[44.601012,40.056576],//spartak.
		[44.605972,40.057648],//stepnaya
		[44.605483,40.062111],//aerodromnaya
		[44.607721,40.062572],//
		[44.608457,40.062395],//
		[44.608518,40.062395],//chkalova
		[44.612616,40.063161],//deputatskaya
		[44.611989,40.069839],//
		[44.611989,40.070032],//
		[44.612276,40.072699],//3 internats
		[44.611058,40.072496],//
		[44.604539,40.071128],//zapadnaya
		[44.604404,40.071139],//
		[44.604037,40.071225],//
		[44.599361,40.073025],//mopra
		[44.599300,40.073223],//
		[44.599311,40.073384],//
		[44.600237,40.077902],//
		[44.600229,40.078004],//
		[44.600180,40.078155],//
		[44.600091,40.078326],//
		[44.600038,40.078546],//
		[44.600038,40.078766],//
		[44.600099,40.078949],//
		[44.600233,40.079099],//
		[44.600410,40.079238],//
		[44.600513,40.079372],//
		[44.600720,40.080300],//
		[44.600866,40.080472],//
		[44.602500,40.086819],//koltsova
		[44.601821,40.087173],//pushkina
		[44.602206,40.088897],//
		[44.602213,40.088972],//
		[44.602229,40.089524],//
		[44.602287,40.090104],//
		[44.602413,40.090796],//
		[44.602467,40.090951],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 1"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route2 = new ymaps.Polyline([
		[44.621822,40.107893],//kr-oktya
		[44.609217,40.105038],//proletka
		[44.608748,40.109591],//gogolya
		[44.600683,40.107810],//pushkina
		[44.602467,40.090951],//
		[44.602413,40.090796],//
		[44.602287,40.090104],//
		[44.602229,40.089524],//
		[44.602213,40.088972],//
		[44.602206,40.088897],//
		[44.601818,40.087168],//koltsova
		[44.603236,40.086487],//voroshilova
		[44.602536,40.084123],//
		[44.602183,40.082653],//
		[44.600177,40.072693],//zapadnaya
		[44.602791,40.071710],//pirogova
		[44.603175,40.068491],//9janvarya
		[44.597568,40.067282],//goncharova
		[44.597553,40.065147],//j.popova
		[44.600144,40.065458],//voroshilova
		[44.601012,40.056576],//spartak.
		[44.605972,40.057648],//stepnaya
		[44.605483,40.062111],//aerodromnaya
		[44.607721,40.062572],//
		[44.608457,40.062395],//
		[44.608518,40.062395],//chkalova
		[44.612616,40.063161],//deputatskaya
		[44.611989,40.069839],//
		[44.611989,40.070032],//
		[44.612484,40.075115],//proletarskaya
		[44.608748,40.109590],//gogolya
		[44.612002,40.110309],//kurgannaya
		[44.612508,40.105769],//kr-okt
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 2"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route3 = new ymaps.Polyline([
		[44.575259,40.134138],//batareinaya
		[44.579080,40.135749],//
		[44.579463,40.135883],//
		[44.579704,40.135910],//
		[44.579942,40.135824],//
		[44.580249,40.135695],//
		[44.582175,40.134744],//
		[44.583639,40.133977],//
		[44.585601,40.133017],//zheleznodor.
		[44.588365,40.131817],//
		[44.589554,40.131366],//
		[44.589853,40.131275],//
		[44.590128,40.131228],//
		[44.592003,40.131027],//
		[44.593353,40.131258],//
		[44.594659,40.131660],//
		[44.595775,40.132090],//
		[44.598052,40.132797],//pushkina
		[44.600687,40.107813],//gogolya
		[44.608748,40.109596],//proletka
		[44.612489,40.075098],//dimitrova
		[44.612702,40.074809],//
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//deputat
		[44.611990,40.069777],//
		[44.611994,40.070078],//
		[44.612489,40.075098]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 3"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
		
	var route4 = new ymaps.Polyline([
		[44.585368,40.155891],//2-ya karotkaya
		[44.587093,40.151771],//
		[44.587485,40.150483],//
		[44.590634,40.143506],//
		[44.591355,40.141693],//
		[44.591654,40.141210],//
		[44.591999,40.141028],//
		[44.592336,40.140335],//
		[44.595780,40.132092],//
		[44.598052,40.132797],//pushkina
		[44.600687,40.107813],//gogolya
		[44.608748,40.109596],//proletka
		[44.609223,40.105036],//kr-okt
		[44.612504,40.105757],//kurgannaya
		[44.612001,40.110310],//gogolya
		[44.608745,40.109603],//proletarskaya
		[44.612489,40.075098],//deputatskaya
		[44.612274,40.072695],//3int
		[44.611076,40.072488],//pioners
		[44.609854,40.083983],//
		[44.608082,40.100130],//
		[44.607860,40.102405],//lenina
		[44.609481,40.102748],//proletka
		[44.607860,40.102405],//pionersL
		[44.608082,40.100130],//
		[44.609854,40.083983],//
		[44.611076,40.072488],//3intL
		[44.612274,40.072695],//deputatskayaL
		[44.611994,40.070078],//
		[44.611990,40.069777],//
		[44.612615,40.063170],//chkalova
		[44.608672,40.062425],//12marta
		[44.609475,40.054133],//yunatov
		[44.612799,40.054783],//
		[44.612944,40.054880],//
		[44.613029,40.054993],//
		[44.618744,40.063500],//dimitrova
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 4"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route5 = new ymaps.Polyline([
		[44.575917,40.138720],//mihailova
		[44.574576,40.133989],//
		[44.574561,40.133941],//
		[44.574618,40.133930],//
		[44.575259,40.134138],//batareinaya
		[44.579080,40.135749],//
		[44.579463,40.135883],//
		[44.579704,40.135910],//
		[44.579942,40.135824],//
		[44.580249,40.135695],//
		[44.582175,40.134744],//
		[44.583639,40.133977],//
		[44.585601,40.133017],//zheleznodor.
		[44.588365,40.131817],//
		[44.589554,40.131366],//
		[44.589853,40.131275],//
		[44.590128,40.131228],//
		[44.592003,40.131027],//
		[44.593353,40.131258],//
		[44.594659,40.131660],//
		[44.595775,40.132090],//
		[44.598052,40.132797],//pushkina
		[44.600687,40.107813],//gogolya
		[44.608748,40.109596],//proletka
		[44.609223,40.105036],//kr-okt
		[44.621490,40.107811],//p.vokzalnyi
		[44.621758,40.105708],//
		[44.621735,40.105585],//
		[44.621685,40.105526],//lenina
		[44.620858,40.105285],//privokzalnaya
		[44.624745,40.071811],//
		[44.624784,40.071666],//yunatov
		[44.626704,40.074432],//
		[44.627183,40.076277],//yubileynaya
		[44.631022,40.081226],//
		[44.631122,40.081269],//
		[44.631260,40.081210],//
		[44.633533,40.077460],//
		[44.633797,40.077766],//
		[44.633855,40.077906],//promyshlenaya
		[44.633843,40.078018],//
		[44.631735,40.081667],//
		[44.631800,40.081898],//
		[44.631884,40.082075],//
		[44.639348,40.092475],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 5"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route7 = new ymaps.Polyline([
		[44.574580,40.133512],//shosseynaya
		[44.577265,40.131908],//
		[44.577782,40.131495],//
		[44.581451,40.127852],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.612006,40.110306],//proletarskaya
		[44.612498,40.105768],//kr-okt
		[44.609216,40.105041],//proletka
		[44.608743,40.109592],//gogolyaL
		[44.609216,40.105041],//proletkaL
		[44.612484,40.075121],//deputatskaya
		[44.612268,40.072695],//3intenats
		[44.611069,40.072486],//pionerskaya
		[44.608083,40.100124],//pobedy
		[44.609717,40.100483],//proletka
		[44.608083,40.100124],//pionerskayaL
		[44.611069,40.072486],//3intenatsL
		[44.612268,40.072695],//deputatskayaL
		[44.612032,40.070460],//
		[44.611994,40.070031],//
		[44.611994,40.069779],//
		[44.612612,40.063169],//chkalova
		[44.608461,40.062404],//aerodromnaya
		[44.607733,40.062575],//
		[44.600558,40.061047],//voroshilova
		[44.601489,40.051841],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 7"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route9 = new ymaps.Polyline([
		[44.592354,40.104611],//kirova
		[44.593577,40.103366],
		[44.593688,40.103221],//
		[44.597096,40.097744],
		[44.597334,40.097208],//sverdlova
		[44.595091,40.094622],//
		[44.594973,40.094509],//
		[44.594770,40.094380],//
		[44.594096,40.094214],//
		[44.589903,40.093511],//apsheronskaya
		[44.589860,40.093667],//
		[44.589849,40.093833],//
		[44.589872,40.094026],//
		[44.590044,40.094498],//
		[44.590198,40.095002],//
		[44.590262,40.095447],//
		[44.590350,40.096364],//
		[44.590472,40.096900],//
		[44.590591,40.097303],//
		[44.592477,40.103103],//
		[44.592508,40.103452],//
		[44.592496,40.103790],//
		[44.592339,40.104638],//kirova
		[44.591747,40.105381],//gagarina
		[44.593024,40.108221],//
		[44.593165,40.108355],//
		[44.593372,40.108441],//
		[44.600443,40.110014],//pushkina
		[44.600685,40.107809],//gogolya
		[44.610371,40.109950],//krestyanskaya
		[44.610861,40.105380],//kr-okt
		[44.621491,40.107815],//per.vokzalnyi
		[44.621756,40.105723],//
		[44.621736,40.105594],//
		[44.621679,40.105524],//lenina
		[44.620856,40.105283],//privokzalnaya
		[44.624739,40.071847],//
		[44.624792,40.071665],//yunatov
		[44.622999,40.069219],//
		[44.621796,40.067684],//
		[44.618734,40.063505],//dmitrova
		[44.617194,40.066391],//chkalova
		[44.614382,40.063523],//
		[44.614286,40.063486],//
		[44.612612,40.063169],//deputatskaya
		[44.611994,40.069779],//
		[44.611994,40.070031],//
		[44.612032,40.070460],//
		[44.612484,40.075121],//proletka
		[44.608745,40.109598],//gogolya
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 9"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route11 = new ymaps.Polyline([
		[44.605797,40.134488],//zheleznodor.
		[44.602833,40.133596],//sovetskaya
		[44.605268,40.111170],//
		[44.608495,40.111908],//proletarskaya
		[44.608750,40.109595],//gogolya
		[44.600684,40.107811],//pushkina
		[44.601985,40.095929],
		[44.602468,40.090949],//starobozarnaya
		[44.602644,40.090890],//
		[44.603418,40.090949],//
		[44.603579,40.090981],//
		[44.603847,40.090976],//
		[44.603957,40.090901],//
		[44.604019,40.090794],//komsomolskaya
		[44.604097,40.088649],//
		[44.604082,40.088397],//
		[44.603932,40.087920],//
		[44.603752,40.087635],//voroshilova
		[44.603580,40.087458],//
		[44.603495,40.087319],//
		[44.602943,40.085510],//
		[44.602545,40.084116],//
		[44.602188,40.082646],//
		[44.601689,40.080101],//
		[44.601315,40.078274],//svobody
		[44.600871,40.078446],//
		[44.600786,40.078430],//
		[44.600710,40.078365],//
		[44.600671,40.078306],//
		[44.600572,40.078167],//
		[44.600476,40.078097],//
		[44.600357,40.078076],//
		[44.600212,40.078140],//
		[44.600116,40.078269],//
		[44.600058,40.078430],//
		[44.600035,40.078575],//
		[44.599993,40.078671],//
		[44.599953,40.078748],//
		[44.599822,40.078866],//
		[44.591687,40.082015],//
		[44.599822,40.078866],//L
		[44.599960,40.078880],//
		[44.600109,40.078981],//
		[44.600259,40.079116],//
		[44.600381,40.079217],//
		[44.600496,40.079335],//mopra
		[44.600523,40.079432],//
		[44.600703,40.080280],//
		[44.600864,40.080473],//
		[44.600943,40.080737],//
		[44.602503,40.086803],//koltsova
		[44.601821,40.087167],//pushkina
		[44.602204,40.088905],//
		[44.602227,40.089538],//
		[44.602296,40.090107],//
		[44.602364,40.090536],//
		[44.602417,40.090826],//
		[44.602467,40.090960],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 11"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route12 = new ymaps.Polyline([
		[44.575259,40.134138],//batareinaya
		[44.579080,40.135749],//
		[44.579463,40.135883],//
		[44.579704,40.135910],//
		[44.579942,40.135824],//
		[44.580249,40.135695],//
		[44.582175,40.134744],//
		[44.583639,40.133977],//
		[44.585601,40.133017],//zheleznodor.
		[44.588365,40.131817],//
		[44.589554,40.131366],//
		[44.589853,40.131275],//
		[44.590128,40.131228],//
		[44.592003,40.131027],//
		[44.593353,40.131258],//
		[44.594659,40.131660],//
		[44.595775,40.132090],//
		[44.598052,40.132797],//pushkina
		[44.600687,40.107813],//gogolya
		[44.612010,40.110313],//kurgannaya
		[44.612505,40.105757],//kr-okt
		[44.609220,40.105031],//proletka
		[44.608749,40.109597],//gogolyaL
		[44.609220,40.105031],//proletkaL
		[44.612493,40.075105],//deputatskaya
		[44.612003,40.070151],//
		[44.611995,40.069931],//
		[44.611995,40.069722],//
		[44.612620,40.063164],//chkalova
		[44.612087,40.063078],//pionerskaya
		[44.611413,40.070003],//
		[44.611156,40.071741],//
		[44.611068,40.072492],//
		[44.609857,40.083970],//
		[44.608086,40.100124],//pobedy
		[44.609722,40.100484],//proletka
		[44.608086,40.100124],//pionerskayaL
		[44.609857,40.083970],//
		[44.611068,40.072492],//
		[44.611156,40.071741],//
		[44.611413,40.070003],//
		[44.612087,40.063078],//chkalovaL
		[44.614291,40.063487],//
		[44.614378,40.063519],//
		[44.617214,40.066388],//dimitrova
		[44.618746,40.063502],//yunatov
		[44.621796,40.067708],//
		[44.623387,40.069732],
		[44.626597,40.074212],//solnechnaya
		[44.630577,40.067932],//centralnaya
		[44.632791,40.070843],//novaya
		[44.629923,40.074576],
		[44.628061,40.077373],//yubileynaya
		[44.627230,40.076375],//
		[44.627176,40.076273],//
		[44.626762,40.074594],//
		[44.626724,40.074438],//
		[44.626640,40.074272],//
		[44.626594,40.074213],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 12"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route14 = new ymaps.Polyline([
		[44.631672,40.000228],//
		[44.628165,40.004846],//
		[44.628066,40.005136],//
		[44.626388,40.007646],//
		[44.626036,40.007861],//
		[44.623619,40.011342],//
		[44.623511,40.012286],//
		[44.615036,40.026941],//
		[44.614619,40.027989],//
		[44.611634,40.036125],//
		[44.611496,40.036447],//
		[44.610960,40.037842],//
		[44.610255,40.040567],//
		[44.609887,40.041618],//
		[44.609519,40.042648],//
		[44.609213,40.044258],//
		[44.608737,40.046918],//
		[44.608262,40.048898],//
		[44.608048,40.049665],//
		[44.607821,40.050177],//
		[44.607136,40.051191],//
		[44.606840,40.051673],//
		[44.606637,40.052221],//
		[44.606538,40.052634],//
		[44.606469,40.053111],//stepnaya
		[44.605491,40.062102],//aerodromn
		[44.607731,40.062567],//
		[44.608440,40.062390],//chkalova
		[44.612094,40.063084],//pionerskaya
		[44.611399,40.069995],//
		[44.611150,40.071741],//
		[44.611066,40.072487],//
		[44.610821,40.074761],//
		[44.609864,40.083975],//
		[44.608082,40.100114],//
		[44.607867,40.102410],//lenina
		[44.609487,40.102748],//proletarskaya
		[44.612481,40.075118],//deputatskaya
		[44.611991,40.070087],//
		[44.611995,40.069770],//
		[44.612619,40.063161],//chkalova
		[44.612090,40.063075],//pionerskayaL
		[44.612619,40.063161],//depupatskayaL
		[44.611995,40.069770],//L
		[44.611991,40.070087],//L
		[44.612481,40.075118],//proletarskayaL
		[44.609487,40.102748],//leninaL
		[44.608745,40.109593],//gogolya
		[44.600690,40.107811],//pushkina
		[44.600441,40.110020],//gagarina
		[44.605272,40.111162],//sovetskaya
		[44.605517,40.108893],//gogolya
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 14"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.5
    });
	
	var route16 = new ymaps.Polyline([
		[44.576223,40.139783],//mihailovo
		[44.574577,40.134036],//
		[44.574577,40.133929],//batareynaya
		[44.574804,40.133961],//
		[44.579453,40.135879],//
		[44.579637,40.135906],//
		[44.579809,40.135885],//
		[44.580231,40.135708],//
		[44.582175,40.134746],//
		[44.583030,40.134280],//
		[44.585597,40.133026],//zheleznodor.
		[44.589567,40.131363],//
		[44.589846,40.131282],//
		[44.590160,40.131234],//
		[44.591977,40.131035],//
		[44.593373,40.131266],//
		[44.594712,40.131668],//
		[44.595773,40.132092],//!!
		[44.614288,40.137839],//hakurate
		[44.614418,40.136873],//
		[44.614537,40.136337],//
		[44.617168,40.109171],//zhukovskogo
		[44.610609,40.107701],//krestyanskaya
		[44.610364,40.109944],//gogalya
		[44.608739,40.109600],//proletarskaya
		[44.608976,40.107326],//Zhukovskogo
		[44.610609,40.107701],//krestyanskaya(petlya)
		[44.608976,40.107326],//proletarskaya(petlya)
		[44.609217,40.105036],//krasnookt
		[44.612507,40.105755],//kurganaya
		[44.616420,40.069481],//
		[44.616612,40.067517],//dimitrova
		[44.617210,40.066399],//chkalova
		[44.614359,40.063502],//
		[44.614098,40.063438],//
		[44.612617,40.063175],//depupatskaya
		[44.611993,40.069734],//
		[44.611981,40.070007],//
		[44.612000,40.070152],//
		[44.612487,40.075120],//proletarskaya
		[44.609217,40.105036],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 16"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.5
    });
	
	var route17 = new ymaps.Polyline([
		[44.575917,40.138720],//mihailova
		[44.574576,40.133989],//
		[44.574561,40.133941],//
		[44.574618,40.133930],//
		[44.574580,40.133512],//shosseynaya
		[44.577265,40.131908],//
		[44.577782,40.131495],//
		[44.581451,40.127852],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.608750,40.109599],//proletarskaya
		[44.612494,40.075100],//dimitrova
		[44.617203,40.066383],//chkalova
		[44.614376,40.063517],//
		[44.614261,40.063474],//
		[44.608668,40.062432],//aerodromnaya
		[44.608435,40.062393],//
		[44.607814,40.062570],//
		[44.607695,40.062564],//
		[44.605489,40.062104],//stepnaya
		[44.605974,40.057643],//spartak.
		[44.601023,40.056579],//voroshilova
		[44.600134,40.065463],//zh.popova
		[44.597554,40.065130],//goncharova
		[44.597561,40.067289],//9 janvarya
		[44.596095,40.066921],//
		[44.595988,40.066931],//
		[44.595907,40.066980],//
		[44.594707,40.068128],//
		[44.594370,40.068342],//
		[44.594163,40.068353],//
		[44.593987,40.068224],//nizpotashnaya
		[44.593753,40.067081],//
		[44.592903,40.063968],//
		[44.591895,40.064634],//
		[44.591853,40.064730],//
		[44.592026,40.065497],//
		[44.592190,40.066136],//
		[44.592344,40.066500],//
		[44.592769,40.067191],//
		[44.591305,40.069441],//a
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 17"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.8
    });
	
	var route19 = new ymaps.Polyline([
		[44.605868,40.134517],//zheleznodorozhnaya
		[44.602824,40.133599],//sovetskaya
		[44.605276,40.111168],//gagarina
		[44.600440,40.110017],//pushkina
		[44.600686,40.107807],//gogalya
		[44.610369,40.109945],//krestyanskaya
		[44.610610,40.107676],//zhukovsk.
		[44.618752,40.109490],//kalinina
		[44.618999,40.107227],//krasnookt.
		[44.621492,40.107822],//vokzalnyi per.
		[44.621761,40.105714],//
		[44.621695,40.105535],//lenina
		[44.620849,40.105282],//privokzalnaya
		[44.623796,40.079757],//svobody
		[44.625466,40.080090],//gertsina
		[44.626245,40.073712],//yunatov
		[44.617211,40.066395],//dmitrova
		[44.614405,40.063546],//chkalova
		[44.614298,40.063476],//
		[44.612623,40.063171],//deputatskaya
		[44.611994,40.069818],//
		[44.611994,40.070054],//
		[44.612488,40.075118],//proletarskaya
		[44.608745,40.109598],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 19"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.8
    });
	
	var route26 = new ymaps.Polyline([
		[44.596272,40.062520],//goncharova
		[44.596268,40.062745],//
		[44.596268,40.062928],//
		[44.596322,40.063223],//
		[44.596387,40.063486],//
		[44.596602,40.063872],//
		[44.597339,40.064903],//
		[44.597565,40.065139],//
		[44.600150,40.065467],//Zheni popova
		[44.601034,40.056571],//spartakovskaya
		[44.605973,40.057648],//stepnaya
		[44.605475,40.062101],//aerodromnaya
		[44.607774,40.062573],//
		[44.608487,40.062402],//chkalova
		[44.612614,40.063180],//deputatskaya
		[44.611994,40.069818],//
		[44.611994,40.070054],//
		[44.612271,40.072694],//3 internats
		[44.611075,40.072490],//pionerskaya
		[44.609859,40.083977],//
		[44.607862,40.102394],//lenina
		[44.609487,40.102753],//proletka
		[44.608976,40.107334],//zhukovskogo
		[44.612286,40.108064],//kurgannnaya
		[44.612002,40.110312],//gogolya
		[44.608747,40.109604],//proletka
		[44.608976,40.107334],//zhukovskogo
		[44.617162,40.109158],//hakurate
		[44.616936,40.111458],//
		[44.614532,40.136327],//
		[44.614306,40.137545],//
		[44.614287,40.137840],//
		[44.598053,40.132792],//zheleznodorozhnaya
		[44.595876,40.132116],//
		[44.595772,40.132089],//
		[44.594814,40.131703],//
		[44.593779,40.131376],//
		[44.593373,40.131263],//
		[44.592614,40.131123],//
		[44.591989,40.131032],//
		[44.590011,40.131247],//
		[44.589566,40.131370],//
		[44.585589,40.133031],//batareynyi
		[44.579885,40.135864],//
		[44.579574,40.135917],//
		[44.579451,40.135874],//
		[44.574858,40.133970],//??
		[44.574567,40.133938],//
		[44.573869,40.133949],//shosey na min.ist
		[44.572200,40.134915],//
		[44.566735,40.138963],//
		[44.565983,40.138448],//
		[44.565753,40.138470],//
		[44.564802,40.139886],//min.ist
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 26"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.8
    });
	
	var route27 = new ymaps.Polyline([
			[44.612276,40.108057],//
			[44.612513,40.105763],//krasnooktybr
			[44.609214,40.105033],//proletarskaya
			[44.612488,40.075118],//deputatskaya
			[44.611994,40.070054],//
			[44.611994,40.069818],//
			[44.612623,40.063171],//chkalova
			[44.614298,40.063476],//
			[44.614405,40.063546],//
			[44.617211,40.066395],//dmitrova
			[44.618751,40.063498],//yunatov
			[44.621807,40.067695],//
			[44.624791,40.071661],//
			[44.624783,40.071659],//privokzalnaya
			[44.624733,40.071815],//
			[44.620847,40.105281],//lenina
			[44.621659,40.105517],//
			[44.621743,40.105688],//vokzalnyi per.
			[44.621483,40.107813],//krasnookt
			[44.618994,40.107233],//kalinina
			[44.618749,40.109497],//zhukovskogo
			[44.612276,40.108057],//kurgannaya
			[44.612000,40.110305],//gogolya
			[44.600680,40.107814],//pushkino
			[44.598053,40.132792],//zheleznodorozhnaya
			[44.595876,40.132116],//
			[44.595772,40.132089],//
			[44.594814,40.131703],//
			[44.593779,40.131376],//
			[44.593373,40.131263],//
			[44.592614,40.131123],//
			[44.591989,40.131032],//
			[44.590011,40.131247],//
			[44.589566,40.131370],//
			[44.585589,40.133031],//batareynyi
			[44.579885,40.135864],//
			[44.579574,40.135917],//
			[44.579451,40.135874],//
			[44.575273,40.134153],//??
			[44.575008,40.133257],//shoseynaya
			[44.577377,40.131836],//
			[44.577776,40.131509],//
			[44.579520,40.129808],//
			[44.581226,40.128065],//
			[44.581491,40.127839],//
			[44.584674,40.126007],//
			[44.586142,40.125159],//
			[44.586437,40.124628],//profsoyuz.per.
			[44.587622,40.120912],//
			[44.587799,40.120751],//
			[44.590054,40.120756],//
			[44.590265,40.120670],//
			[44.590399,40.120547],//
			[44.590487,40.120413],//
			[44.590529,40.120279],//lesnaya
			[44.590651,40.119723],//
			[44.591368,40.114923],//shovgenova
			[44.599712,40.116931],//pushkina
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 27"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.8
    });
	
	var route29 = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
			[44.572635,40.127461],//7-y pereulok
			[44.573578,40.134124],//shoseynaya
			[44.577338,40.131862],//
			[44.577775,40.131497],//
			[44.581398,40.127899],//
			[44.586134,40.125165],//
			[44.586402,40.124715],//profsoyuznyi
			[44.587606,40.120938],//
			[44.587790,40.120754],//
			[44.590060,40.120737],//
			[44.590366,40.120576],//
			[44.590550,40.120179],//lesnaya
			[44.591382,40.114941],//shovgenova
			[44.593222,40.115391],//sportivnaya
			[44.593928,40.108589],//gagarina
			[44.602069,40.110416],//komsomolskaya
			[44.602276,40.108152],//gogolya
			[44.612005,40.110309],//kurganaya
			[44.612281,40.108061],//zhukovskogo
			[44.618757,40.109483],//kalinina
			[44.618995,40.107219],//kr-okt
			[44.621490,40.107811],//p.vokzalnyi
			[44.621758,40.105708],//
			[44.621735,40.105585],//
			[44.621685,40.105526],//lenina
			[44.620858,40.105285],//privokzalnaya
			[44.624745,40.071811],//
			[44.624784,40.071666],//yunatov
			[44.618747,40.063496],//dmitrova
			[44.617204,40.066394],//chkalova
			[44.614383,40.063527],//
			[44.614307,40.063484],//
			[44.612614,40.063172],//depupatskaya
			[44.611991,40.069781],//
			[44.611991,40.070076],//
			[44.612482,40.075108],//proletarskaya
			[44.608750,40.109594],//gogolya
			[44.600690,40.107804],//pushkina
			[44.600441,40.110014]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 29"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#0B13E0",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.4
    });
	
	var route34 = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
			[44.564877,40.139748],//
			[44.565697,40.138524],//
			[44.565939,40.138417],//
			[44.566529,40.138836],//
			[44.566736,40.138879],//
			[44.569360,40.137016],
			[44.566928,40.138852],//
			[44.567074,40.138761],//,!!!
			[44.577265,40.131908],//
			[44.577782,40.131495],//
			[44.581451,40.127852],//
			[44.586143,40.125160],//
			[44.586357,40.124839],//profsoyuznyi
			[44.587641,40.120877],//
			[44.587817,40.120738],//
			[44.590066,40.120751],//
			[44.590281,40.120650],//
			[44.590434,40.120483],//
			[44.590523,40.120301],//
			[44.590634,40.119856],//lesnaya
			[44.591367,40.114922],//shovgenova
			[44.593208,40.115388],//sportivnya
			[44.593936,40.108581],//gagarina
			[44.600445,40.110014],//pushkina
			[44.600683,40.107809],//gogolya
			[44.612005,40.110309],//kurgannaya
			[44.612284,40.108067],//
			[44.612506,40.105754],//krasnooktyamrskaya
			[44.609220,40.105035],//proletarskaya
			[44.609720,40.100479],//pobedy
			[44.608082,40.100127],//pionerskaya
			[44.609862,40.083978],
			[44.611153,40.071736],//
			[44.611406,40.070003],//
			[44.612095,40.063075],//
			[44.614292,40.063483],//
			[44.614392,40.063547],//
			[44.617207,40.066390],//
			[44.618744,40.063478],//yunatov
			[44.626245,40.073707],//gertsena
    ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 34"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#0B13E0",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.4
    });
	
	var route51 = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [44.575924,40.138777],//михайлова
			[44.574567,40.133928],//
			[44.574605,40.133488],//
			[44.577343,40.131868],//шоссейная
			[44.577811,40.131460],
			[44.581385,40.127890],
			[44.586185,40.125100],//профсоюзный
			[44.587718,40.120787],
			[44.590248,40.120702],
			[44.590555,40.120273],//lesnaya
			[44.591383,40.114972],//shovgenova
			[44.593208,40.115380],//sportivnaya
			[44.593928,40.108600],//gagarina
			[44.600444,40.110016],//pushkina
			[44.600674,40.107806],//gogolya
			[44.608737,40.109608],//proletarskaya
			[44.608480,40.111875],//gagarina
			[44.605261,40.111167],//sovetskaya
			[44.605522,40.108892],//gogolya
			[44.600674,40.107806],//
			[44.602491,40.090929],//starobozarnaya
			[44.603712,40.090971],//
			[44.604036,40.090775],//komsomolskaya
			[44.604105,40.088372],//
			[44.603885,40.087840],
			[44.603751,40.087647],
			[44.603523,40.087342],//voroshilova
			[44.602158,40.082643],//
			[44.600181,40.072686],//zapadnaya
			[44.604534,40.071141],//stepnaya
			[44.605490,40.062115],//aerodromnaya
			[44.600531,40.061064],//voroshilova
			[44.600102,40.065484],//Zh.Popova
			[44.597541,40.065119],//Goncharova
			[44.597557,40.067265],//9 janvara
			[44.599177,40.067625],//voroshilova
			[44.599342,40.070031],
			[44.599473,40.072515],//
			[44.599310,40.073303],//MOPRA
			[44.600234,40.077928],//
			[44.600180,40.078153],//
			[44.600088,40.078319],//
			[44.600035,40.078577],//
			[44.600054,40.078813],//
			[44.600142,40.078984],//
			[44.600380,40.079199],//
			[44.600502,40.079360],//
			[44.600721,40.080315],//
			[44.600875,40.080503],//
			[44.602500,40.086812],//koltsova
			[44.601814,40.087171],//pushkina
			[44.602209,40.088909],//
			[44.602228,40.089542],//
			[44.602288,40.090124],//
			[44.602464,40.090955],//
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 51"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.8
    });
	
	var route57 = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [44.608286,40.143087],
			[44.607418,40.142787],
			[44.606948,40.142230],
			[44.606966,40.140583],
			[44.606930,40.139993],
			[44.607570,40.135750],
			[44.614285,40.137832],
			[44.614537,40.136291],
			[44.615304,40.127965],
			[44.607002,40.125858],
			[44.608983,40.107327],
			[44.618755,40.109487],
			[44.618758,40.109492],
			[44.618996,40.107224],
			[44.62147767,40.10781076],
			[44.621737,40.10559],
			[44.620855,40.105291],
			[44.624764,40.071736],
			[44.618750,40.063513],
			[44.612919,40.054866],
			[44.60948712,40.05414085],
			[44.608675,40.062427],
			[44.612095,40.063070],
			[44.609858,40.083985],
			[44.611475,40.084290],
			[44.608983,40.107336],
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 57"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			strokeOpacity: 0.8
    });
	
		var route110 = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [44.729486,40.085541],
			[44.728453,40.084018],
			[44.728255,40.081067],
			[44.728140,40.080681],
			[44.727849,40.080177],
			[44.725724,40.077937],
			[44.720997,40.061008],
			[44.717439,40.060889],
			[44.716375,40.061318],
			[44.713299,40.061596],
			[44.711585,40.063312],
			[44.697257,40.075836],
			[44.688073,40.089138],
			[44.683618,40.092786],
			[44.681674,40.094845],
			[44.676285,40.098708],
			[44.675504,40.098772],
			[44.673695,40.100112],
			[44.672501,40.102429],
			[44.671184,40.104403],
			[44.669852,40.105476],
			[44.668213,40.106142],
			[44.666605,40.110970],
			[44.665564,40.113201],
			[44.663528,40.113417],
			[44.663379,40.113465],
			[44.663203,40.113600],
			[44.662713,40.114174],
			[44.662015,40.113918],
			[44.655967,40.113017],
			[44.623316,40.112341],//келермесское шоссе
			[44.623063,40.112158],//промышленая
			[44.624674,40.096273],//адыгейская
			[44.618687,40.095094],//хакурате
			[44.617390,40.106864],//красноокт
			[44.609219,40.105044],//пролетарская
			[44.608750,40.109594],//гоголя
			[44.607144,40.109214],//пионерская
			[44.606906,40.111526],//гагарина
			[44.605270,40.111162],//советская
			[44.605523,40.108887],//гоголя
			[44.607136,40.109214]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Маршрут № 110"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#3b5998",
            // Ширина линии.
            strokeWidth: 5,
			strokeOpacity: 0.8
    });
	
	var route_troll1 = new ymaps.Polyline([
		[44.618986,40.107216],//kr-okt/kalinina
		[44.621488,40.107812],//per. vokzalnyi
		[44.621760,40.105704],//
		[44.621729,40.105585],//
		[44.621683,40.105526],//lenina
		[44.619239,40.104917],//kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
		[44.612487,40.075112],//deputatskaya
		[44.612489,40.075098],//dimitrova
		[44.612702,40.074809],//
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//deputat
		[44.611990,40.069777],//
		[44.611994,40.070078],//
		[44.612489,40.075098]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 1"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
		var route_troll2 = new ymaps.Polyline([
		[44.620854,40.105284],//lenina
		[44.621683,40.105526],//vokzalnyi
		[44.621729,40.105585],//
		[44.621760,40.105704],//
		[44.621488,40.107812],//kr-okt
		[44.618986,40.107216],//kr-okt/kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
		[44.606087,40.134379],//
		[44.605987,40.134502],//zheleznodor
		[44.605933,40.134524],//
		[44.605880,40.134518],//
		[44.605435,40.134368],//
		[44.604527,40.134100],//pionerskaya
		[44.604711,40.132330],//vostochnaya
		[44.606276,40.132728],//proletka
		[44.612486,40.075120],//dimitrova
		[44.618749,40.063494],//yunatov
		[44.621798,40.067703],//
		[44.622729,40.068867],//
		[44.623123,40.069393],//
		[44.623518,40.069903],//
		[44.624023,40.070573],//
		[44.624782,40.071667],//privokzal
		[44.624736,40.071802],//
		[44.620854,40.105284],//lenina
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 2"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
		
			var route_troll3 = new ymaps.Polyline([
		[44.620540,40.124062],//pryamaya
		[44.614190,40.122646],//nekrasova
		[44.615524,40.108837],//zhukovskogo
		[44.608980,40.107347],//proletka
		[44.612487,40.075112],//deputatskaya
		[44.612489,40.075098],//dimitrova
		[44.612702,40.074809],//
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//deputat
		[44.611990,40.069777],//
		[44.611994,40.070078],//
		[44.612489,40.075098]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 3"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll4 = new ymaps.Polyline([
		[44.581762,40.127646],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.608747,40.109596],//gogolya
		[44.612487,40.075112],//deputatskaya
		[44.612489,40.075098],//dimitrova
		[44.612702,40.074809],//
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//deputat
		[44.611990,40.069777],//
		[44.611994,40.070078],//
		[44.612489,40.075098]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 4"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll5 = new ymaps.Polyline([
		[44.581762,40.127646],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.608747,40.109596],//proletka
		[44.612487,40.075104],//deputatskaya
		[44.611985,40.070046],//
		[44.611993,40.069793],//
		[44.612627,40.063168],//chkalova
		[44.614302,40.063485],//
		[44.614408,40.063550],//
		[44.617203,40.066385],//dimitrova
		[44.618749,40.063494],//yunatov
		[44.621798,40.067703],//
		[44.622729,40.068867],//
		[44.623123,40.069393],//
		[44.623518,40.069903],//
		[44.624023,40.070573],//
		[44.624782,40.071667],//privokzal
		[44.624736,40.071802],//
		[44.620854,40.105284],//lenina
		[44.621674,40.105525],//
		[44.621683,40.105526],//lenina
		[44.621729,40.105585],//
		[44.621760,40.105704],//
		[44.621488,40.107812],//per. vokzalnyi
		[44.618986,40.107216],//kr-okt/kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 5"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
		var route_troll6 = new ymaps.Polyline([
		[44.608980,40.107347],//proletka
		[44.612487,40.075104],//deputatskaya
		[44.611985,40.070046],//
		[44.611993,40.069793],//
		[44.612627,40.063168],//chkalova
		[44.614302,40.063485],//
		[44.614408,40.063550],//
		[44.617203,40.066385],//dimitrova
		[44.618749,40.063494],//yunatov
		[44.621798,40.067703],//
		[44.622729,40.068867],//
		[44.623123,40.069393],//
		[44.623518,40.069903],//
		[44.624023,40.070573],//
		[44.624782,40.071667],//privokzal
		[44.624736,40.071802],//
		[44.620854,40.105284],//lenina
		[44.621674,40.105525],//
		[44.621683,40.105526],//lenina
		[44.621729,40.105585],//
		[44.621760,40.105704],//
		[44.621488,40.107812],//per. vokzalnyi
		[44.618986,40.107216],//kr-okt/kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 6"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll7 = new ymaps.Polyline([
		[44.581762,40.127646],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.608744,40.109599],//proletka
		[44.612489,40.075098],//deputat
		[44.611994,40.070078],//
		[44.611990,40.069777],//
		[44.612622,40.063173],//chkalova
		[44.614300,40.063489],//
		[44.614384,40.063532],//
		[44.617203,40.066385],//dimitrova
		[44.618749,40.063494],//yunatov
		[44.621798,40.067703],//
		[44.622729,40.068867],//
		[44.623123,40.069393],//
		[44.623518,40.069903],//
		[44.624023,40.070573],//
		[44.624782,40.071667],//privokzal
		[44.624736,40.071802],//
		[44.620854,40.105284],//lenina
		[44.621674,40.105525],//
		[44.621683,40.105526],//lenina
		[44.621729,40.105585],//
		[44.621760,40.105704],//
		[44.621488,40.107812],//per. vokzalnyi
		[44.618986,40.107216],//kr-okt/kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 7"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll8 = new ymaps.Polyline([
		[44.631693,40.124144],//zarem-shovgenova
		[44.619103,40.121289],
		[44.614425,40.120346],//nekrasova
		[44.615527,40.108826],//zhukovskogo
		[44.608980,40.107347],//proletka
		[44.612487,40.075104],//deputatskaya
		[44.611985,40.070046],//
		[44.611993,40.069793],//
		[44.612627,40.063168],//chkalova
		[44.614302,40.063485],//
		[44.614408,40.063550],//
		[44.617203,40.066385],//dimitrova
		[44.612777,40.074685],
		[44.612483,40.075119],//proletka		
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 8"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
		var route_troll9 = new ymaps.Polyline([
		[44.581762,40.127646],//
		[44.586143,40.125160],//
		[44.586357,40.124839],//profsoyuznyi
		[44.587641,40.120877],//
		[44.587817,40.120738],//
		[44.590066,40.120751],//
		[44.590281,40.120650],//
		[44.590434,40.120483],//
		[44.590523,40.120301],//
		[44.590634,40.119856],//lesnaya
		[44.591367,40.114922],//shovgenova
		[44.593208,40.115388],//sportivnya
		[44.593936,40.108581],//gagarina
		[44.600445,40.110014],//pushkina
		[44.600683,40.107809],//gogolya
		[44.608744,40.109599],//proletka
		[44.608980,40.107347],//zhukovskogo
		[44.615527,40.108826],//nekrasova
		[44.614425,40.120346],//shovgenova
		[44.619103,40.121289],
		[44.631693,40.124144],//zarem-shovgenova
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 9"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll10 = new ymaps.Polyline([
		[44.606278,40.132736],
		[44.606087,40.134379],//
		[44.605987,40.134502],//zheleznodor
		[44.605933,40.134524],//
		[44.605880,40.134518],//
		[44.605435,40.134368],//
		[44.604527,40.134100],//pionerskaya
		[44.604711,40.132330],//vostochnaya
		[44.606276,40.132728],//proletka
		[44.608744,40.109599],//proletka
		[44.612489,40.075098],//deputat
		[44.611994,40.070078],//
		[44.611990,40.069777],//
		[44.612622,40.063173],//chkalova
		[44.614300,40.063489],//
		[44.614384,40.063532],//
		[44.617203,40.066385],//dimitrova
		[44.618749,40.063494],//yunatov
		[44.621798,40.067703],//
		[44.622729,40.068867],//
		[44.623123,40.069393],//
		[44.623518,40.069903],//
		[44.624023,40.070573],//
		[44.624782,40.071667],//privokzal
		[44.624736,40.071802],//
		[44.620854,40.105284],//lenina
		[44.621674,40.105525],//
		[44.621683,40.105526],//lenina
		[44.621729,40.105585],//
		[44.621760,40.105704],//
		[44.621488,40.107812],//per. vokzalnyi
		[44.618986,40.107216],//kr-okt/kalinina
		[44.618753,40.109498],//zhukovskogo
		[44.608980,40.107347],//proletka
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 10"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	
	var route_troll11 = new ymaps.Polyline([
		[44.606278,40.132736],
		[44.606087,40.134379],//
		[44.605987,40.134502],//zheleznodor
		[44.605933,40.134524],//
		[44.605880,40.134518],//
		[44.605435,40.134368],//
		[44.604527,40.134100],//pionerskaya
		[44.604711,40.132330],//vostochnaya
		[44.606276,40.132728],//proletka
		[44.608744,40.109599],//proletka
		[44.612487,40.075112],//deputatskaya
		[44.612489,40.075098],//dimitrova
		[44.612702,40.074809],//
		[44.617203,40.066385],//chkalova
		[44.614384,40.063532],//
		[44.614300,40.063489],//
		[44.612622,40.063173],//deputat
		[44.611990,40.069777],//
		[44.611994,40.070078],//
		[44.612489,40.075098],
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Троллейбус № 11"
        }, {
            // Задаем опции геообъекта.
            // Цвет линии.
            strokeColor: "#EB053B",
            // Ширина линии.
            strokeWidth: 5,
			//прозрачность			
			strokeOpacity: 0.3
    });
	



	myGeoObject1 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.927362, 38.983563]
        },
            // Свойства.
        properties: {
		hintContent: 'Тахтамукайская поликлиника<br/>Взрослое население<br/>ул. Ленина, 15',
		balloonContentBody: [
            '<strong>Тахтамукайская поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'ул. Ленина, 15</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });

	myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.927337, 38.984206]
        },
            // Свойства.
        properties: {
		hintContent: 'Тахтамукайская поликлиника<br/>Детское население<br/>ул. Ленина, 15',
		balloonContentBody: [
            '<strong>Тахтамукайская поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'ул. Ленина, 15</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });

	myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.990015, 38.932497]
        },
            // Свойства.
        properties: {
		hintContent: 'Яблоновская поликлиника<br/>Взрослое население<br/>ул. Гагарина, 144',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'ул. Гагарина, 144</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });

	myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.990225, 38.933095]
        },
            // Свойства.
        properties: {
		hintContent: 'Яблоновская поликлиника<br/>Детское население<br/>ул. Гагарина, 144',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'ул. Гагарина, 144</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });

	myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.925055, 38.908412]
        },
            // Свойства.
        properties: {
		hintContent: 'Энемская поликлиника<br/>Детское население<br/>пер. Ильницкого, 2/1',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'пер. Ильницкого, 2/1</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });

	myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.924925, 38.908628]
        },
            // Свойства.
        properties: {
		hintContent: 'Энемская поликлиника<br/>Взрослое население<br/>пер. Ильницкого, 2/1',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'пер. Ильницкого, 2/1</strong>',
			'<br/>',
			'<br/>',
			'Обслуживаемое население: 9999',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Врач: 1</li><li>Медсестра: 2</li><li>Фельдшер: 3</li></ul>',
			'Кабинет: №123',
			'<br/>',
			'Укладка: текст',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redMedicalCircleIcon',
    });






































		var gran1 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.963983,38.934619999999995],[44.978499,38.945703],[44.977289,38.950793],[44.978992,38.95162],[44.977533,38.957941999999996],[44.986362,38.962284],[44.985839999999996,38.963975999999995],[44.985606999999995,38.966062],[44.985045,38.965685],[44.983926,38.970313],[44.983578,38.970272],[44.983132999999995,38.972165],[44.983419,38.972276],[44.976047,39.002426],[44.967116999999995,38.999935],[44.953482,38.997133999999996],[44.953285,38.999125],[44.954164,38.999358],[44.953609,39.004053],[44.951688999999995,39.003712],[44.949189,39.022227],[44.948277,39.021913],[44.948420999999996,39.021011],[44.948719,39.02101],[44.949313,39.016782],[44.931894,39.012177],[44.932396999999995,39.008382999999995],[44.934884,39.000406999999996],[44.923831,39.004633],[44.923274,39.006057999999996],[44.922374,39.010407],[44.921084,39.015162],[44.91898,39.021654],[44.91814,39.024936],[44.917404999999995,39.031019],[44.916669,39.030999],[44.915896,39.029559],[44.915109,39.024569],[44.91448,39.022549],[44.911196,39.017767],[44.905336,39.006024],[44.89845,39.009888],[44.897714,39.004996999999996],[44.900898999999995,39.003215999999995],[44.898433999999995,38.994979],[44.89956,38.991513],[44.900172999999995,38.990902],[44.900749,38.990966],[44.901827,38.989791],[44.902778,38.989775],[44.903098,38.989427],[44.903251,38.988627],[44.903037,38.987485],[44.904112,38.98771],[44.904402,38.987458],[44.905778,38.983258],[44.907909,38.982619],[44.908556999999995,38.9818],[44.90941,38.982236],[44.910028999999994,38.982262999999996],[44.910986,38.981169],[44.911652,38.981117],[44.911925,38.981652],[44.912112,38.981665],[44.913954,38.979865],[44.914842,38.980272],[44.915386,38.979853],[44.915668,38.978876],[44.924498,38.970586],[44.934911,38.973309],[44.938922999999996,38.972888],[44.939901,38.9725],[44.940895999999995,38.971725],[44.941638,38.970672],[44.942816,38.971844],[44.938708999999996,38.979669],[44.937961,38.979670999999996],[44.935669999999995,38.97826],[44.934019,38.980571],[44.936054,38.983162],[44.935908999999995,38.98364],[44.938483999999995,38.985526],[44.942191,38.990339],[44.943667999999995,38.98993],[44.946039,38.98972],[44.947216999999995,38.988994999999996],[44.949199,38.985968],[44.951975,38.976475],[44.952846,38.975651],[44.953154999999995,38.97277],[44.953761,38.970309]


				]
            ],
        },
        // Описываем свойства геообъекта.
        properties:{
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.3,
        // Ширина обводки.
        strokeWidth: 1
    });



		var gran2 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.898041,38.963772],
[44.898596999999995,38.969122999999996],
[44.898415,38.969947999999995],
[44.896577,38.969077999999996],
[44.896422,38.969685999999996],
[44.895213999999996,38.969138],
[44.894814,38.968979999999995],
[44.893982,38.968723],
[44.893496,38.968644],
[44.893119999999996,38.968616],
[44.893153999999996,38.969736999999995],
[44.891056999999996,38.969878],
[44.890997999999996,38.968061999999996],
[44.891059999999996,38.967517],
[44.891123,38.967121999999996],
[44.891262999999995,38.966696999999996],
[44.891458,38.966305999999996],
[44.891667,38.965981],
[44.891942,38.965661999999995],
[44.892284,38.965379999999996],
[44.892694999999996,38.965151999999996],
[44.893226,38.964889],
[44.894028,38.9646]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran3 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.977266,38.916799],
[44.978811,38.917237],
[44.979701999999996,38.917806999999996],
[44.980633,38.918541],
[44.983087,38.92102],
[44.984814,38.92244],
[44.986233999999996,38.923463999999996],
[44.988211,38.924589999999995],
[44.995357999999996,38.927391],
[45.008706,38.931799999999996],
[45.009102,38.932103],
[45.008531,38.933321],
[45.01005,38.934505],
[45.009926,38.935701],
[45.010892999999996,38.936057],
[45.010763,38.937957],
[45.008781,38.936184],
[45.008300999999996,38.936665999999995],
[45.007912999999995,38.937868],
[45.007903,38.938597],
[45.007548,38.938722999999996],
[45.008181,38.94019],
[45.009411,38.94424],
[45.009814,38.944069],
[45.009961999999994,38.944691999999996],
[45.009282,38.94517],
[45.008567,38.945395],
[45.008598,38.946875999999996],
[45.00678,38.946994],
[45.005075,38.947466],
[45.003502,38.948361999999996],
[45.002052,38.949765],
[45.001521,38.950120999999996],
[44.999851,38.950706],
[44.998968,38.951192],
[44.996913,38.952891],
[44.996904,38.953058],
[44.995835,38.954505999999995],
[44.995112999999996,38.95606],
[44.99451,38.956956],
[44.994259,38.957460999999995],
[44.994053,38.958501],
[44.99317,38.959680999999996],
[44.992385999999996,38.961484],
[44.990984999999995,38.963909],
[44.990314999999995,38.965807999999996],
[44.990224,38.966698],
[44.990314999999995,38.967867],
[44.991,38.970807],
[44.991931,38.971761],
[44.99039,38.971868],
[44.990248,38.970517],
[44.985437,38.969556],
[44.985923,38.964262],
[44.986129,38.963018],
[44.986362,38.962284],
[44.977533,38.957941999999996],
[44.978992,38.95162],
[44.977289,38.950793],
[44.978499,38.945703],
[44.963983,38.934619999999995],
[44.965028,38.932392],
[44.969072999999995,38.925986],
[44.973583,38.918541999999995],
[44.97417,38.917899999999996],
[44.974996999999995,38.917333],
[44.975806,38.917012]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran4 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.020813,38.912337],
[45.021387999999995,38.913523],
[45.022354,38.913556],
[45.023454,38.915285999999995],
[45.022614,38.91641],
[45.020340999999995,38.919658999999996],
[45.018054,38.916379]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran5 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.991931,38.971761],
[44.992369,38.972136],
[44.99352,38.972581],
[44.995177999999996,38.972925],
[44.995566,38.972961],
[44.997291,38.972761],
[44.998056,38.972628],
[44.998798,38.972426999999996],
[45.000056,38.972215999999996],
[45.00163,38.972166],
[45.002514999999995,38.972212999999996],
[45.003474,38.972552],
[45.004522,38.972764999999995],
[45.005224999999996,38.973015],
[45.006011,38.973563],
[45.006585,38.973883],
[45.006955999999995,38.974160999999995],
[45.007946,38.975274],
[45.008786,38.976425],
[45.009268,38.977326],
[45.009612999999995,38.978317],
[45.009782,38.979084],
[45.009848999999996,38.980208],
[45.009746,38.982431999999996],
[45.009674,38.983106],
[45.009518,38.983644],
[45.009194,38.984213],
[45.008317999999996,38.985208],
[45.006847,38.987728],
[45.006499,38.987947999999996],
[45.006473,38.987755],
[45.006201,38.987171],
[45.003796,38.988904999999995],
[45.003797,38.988468],
[45.003712,38.987317999999995],
[45.003673,38.987162],
[45.002801999999996,38.986227],
[45.002525,38.985655],
[45.002265,38.985307999999996],
[45.001523999999996,38.984781999999996],
[45.00134,38.984493],
[45.001118,38.983872],
[44.998695,38.980536],
[44.995954,38.978812],
[44.994144,38.976577999999996],
[44.993901,38.976352],
[44.993688,38.975781999999995],
[44.992784,38.974011],
[44.99057,38.972073],
[44.99039,38.971868]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran6 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.993777,38.871711999999995],
[44.993548,38.876325],
[44.992366,38.877328],
[44.991775999999994,38.877953999999995],
[44.988748,38.880067],
[44.987851,38.880336],
[44.987041,38.88069],
[44.985771,38.881085999999996],
[44.984466999999995,38.881578],
[44.983709,38.881814],
[44.983627999999996,38.882446],
[44.983042,38.882450999999996],
[44.983339,38.879881999999995],
[44.983708,38.876084],
[44.989593,38.874421],
[44.990747,38.874029],
[44.991265,38.873684999999995],
[44.991913,38.873072],
[44.993316,38.871975]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran7 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.036260999999996,38.878219],
[45.036468,38.878504],
[45.03705,38.879695],
[45.03789,38.880795],
[45.038221,38.881524],
[45.038891,38.882131],
[45.043527,38.885676],
[45.046386999999996,38.888504],
[45.047914999999996,38.889877],
[45.04879,38.890842],
[45.050121,38.892645],
[45.051817,38.895624999999995],
[45.052707,38.898157],
[45.052873999999996,38.899004],
[45.052958,38.900892999999996],
[45.052836,38.902105],
[45.052076,38.905313],
[45.051756,38.906161],
[45.051536,38.906472],
[45.050882,38.907019],
[45.050464,38.907222999999995],
[45.04965,38.907394],
[45.049277,38.907340999999995],
[45.046923,38.907458999999996],
[45.045246,38.90723],
[45.043869,38.907284],
[45.041793,38.906951],
[45.041367,38.906769],
[45.04072,38.906275],
[45.039522,38.904635],
[45.039066,38.903572],
[45.038388999999995,38.902575],
[45.03797,38.902091999999996],
[45.036837,38.901168999999996],
[45.034912,38.900043],
[45.033139999999996,38.899259],
[45.030631,38.89879],
[45.026226,38.898629],
[45.024704,38.898801],
[45.023768,38.898286],
[45.023525,38.898232],
[45.023221,38.898295999999995],
[45.022726,38.898522],
[45.022133,38.898961],
[45.021547,38.899605],
[45.021021999999995,38.900528],
[45.020815999999996,38.901106999999996],
[45.02071,38.902319999999996],
[45.020722,38.903511],
[45.018395,38.902302],
[45.018248,38.903203999999995],
[45.017908999999996,38.903096999999995],
[45.018153,38.901129999999995],
[45.018862999999996,38.900253],
[45.020309,38.898859],
[45.020703999999995,38.897898],
[45.024567999999995,38.895489999999995],
[45.024741,38.893138],
[45.025611,38.889216],
[45.025662999999994,38.882742],
[45.026094,38.881727],
[45.026309999999995,38.881403],
[45.028197,38.884205],
[45.030377,38.885466],
[45.031825,38.884254],
[45.032655,38.884795],
[45.034364,38.882374999999996],
[45.034151,38.882083]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran8 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.025272,38.920628],
[45.025569,38.921143],
[45.025667999999996,38.921046],
[45.025774,38.921186],
[45.026275,38.920943],
[45.026399,38.921464],
[45.027125,38.923027],
[45.028318999999996,38.924831999999995],
[45.030159999999995,38.927299999999995],
[45.030255,38.92745],
[45.028619,38.929744],
[45.026292999999995,38.92626],
[45.024315,38.923621],
[45.023635,38.922868],
[45.024353999999995,38.921752],
[45.02442,38.921861]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran9 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.004526,38.896735],
[45.002151,38.902294],
[45.005243,38.904939999999996],
[45.007659,38.899501],
[45.006069,38.898087],
[45.008877999999996,38.89198],
[45.007236999999996,38.890601]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran10 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.009819,38.945007],
[45.009989999999995,38.945513999999996],
[45.009854,38.94565],
[45.009937,38.945749],
[45.009751,38.945961],
[45.009373,38.946025999999996],
[45.009282,38.94517]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran11 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.017215,38.910743],[45.017081999999995,38.910508],[45.017317,38.909984],[45.013991,38.906923],[45.011796,38.910502],[45.015448,38.913869],[45.014680999999996,38.91524],[45.01293,38.917811],[45.01009,38.921306],[45.006859,38.918845],[45.001151,38.914142999999996],[45.000291999999995,38.916136],[45.001947,38.917578999999996],[44.997076,38.927244],[44.998019,38.927509],[45.000409,38.928638],[45.009336999999995,38.931616999999996],[45.008531,38.933321],[45.01005,38.934505],[45.009926,38.935701],[45.010892999999996,38.936057],[45.010763,38.937957],[45.008781,38.936184],[45.008300999999996,38.936665999999995],[45.007912999999995,38.937868],[45.007903,38.938597],[45.007759,38.938646999999996],[45.008244,38.939417999999996],[45.009127,38.940126],[45.009561,38.940329999999996],[45.010131,38.940425999999995],[45.011424999999996,38.940126],[45.012068,38.940222999999996],[45.012885,38.943667999999995],[45.011936999999996,38.94425],[45.012139,38.947022],[45.013073999999996,38.946529],[45.012944999999995,38.943914],[45.013833999999996,38.943452],[45.014976,38.943137],[45.018246999999995,38.94177],[45.018361,38.941814],[45.018421,38.942009999999996],[45.018235999999995,38.945447],[45.020235,38.946407],[45.020303999999996,38.946559],[45.02301,38.948546],[45.023919,38.95015],[45.026302,38.948071999999996],[45.026841999999995,38.947251],[45.031203,38.938699],[45.031797999999995,38.937345],[45.032441999999996,38.935451],[45.026292999999995,38.92626],[45.024315,38.923621],[45.023635,38.922868],[45.022725,38.922194999999995],[45.022304,38.921729],[45.021663,38.921443],[45.021586,38.921527],[45.020809,38.920575],[45.02084,38.920404],[45.020340999999995,38.919658999999996],[45.018054,38.916379],[45.017413999999995,38.915611],[45.017354999999995,38.915008],[45.017565,38.912012],[45.017486999999996,38.911224]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran12 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.981698,38.879694],
[44.983076,38.879808],
[44.982606999999994,38.883883999999995],
[44.981168,38.883634],
[44.981370999999996,38.881748],
[44.981513,38.880258999999995],
[44.98149,38.879905]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran13 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.017869999999995,38.910413],
[45.019026,38.910764],
[45.019656,38.911127],
[45.02052,38.911753],
[45.020813,38.912337],
[45.018054,38.916379],
[45.017413999999995,38.915611],
[45.017354999999995,38.915008],
[45.017565,38.912012],
[45.017486999999996,38.911224]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran14 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.028518999999996,38.943988999999995],
[45.030226,38.946037],
[45.031245999999996,38.947297999999996],
[45.033853,38.950451],
[45.033629999999995,38.951012999999996],
[45.033279,38.951558],
[45.032509999999995,38.952518999999995],
[45.032015,38.953069],
[45.031510999999995,38.953495],
[45.031276999999996,38.953643],
[45.031006,38.953748999999995],
[45.030668999999996,38.95202],
[45.030550999999996,38.951693],
[45.029908,38.950722],
[45.029041,38.949830999999996],
[45.026841999999995,38.947251],
[45.027499,38.945935999999996]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran15 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.026841999999995,38.947251],
[45.029041,38.949830999999996],
[45.029908,38.950722],
[45.030550999999996,38.951693],
[45.030668999999996,38.95202],
[45.031006,38.953748999999995],
[45.030707,38.953735],
[45.030349,38.953828],
[45.028241,38.954764999999995],
[45.027649,38.955051],
[45.027134,38.955366],
[45.026156,38.954366],
[45.0258,38.953717],
[45.025591,38.953181],
[45.025079999999996,38.950863999999996],
[45.024646999999995,38.949540999999996],
[45.026302,38.948071999999996]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran16 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.977340999999996,38.875198999999995],
[44.978190999999995,38.875293],
[44.977864,38.879649],
[44.98149,38.879905],
[44.981513,38.880258999999995],
[44.981370999999996,38.881748],
[44.981168,38.883634],
[44.976875,38.882768],
[44.977287,38.876068],
[44.97714,38.876045999999995],
[44.977143999999996,38.875769999999996],
[44.977306,38.875754]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran17 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.018246999999995,38.94177],
[45.018361,38.941814],
[45.018409,38.941911999999995],
[45.018421,38.942009999999996],
[45.018235999999995,38.945447],
[45.018125999999995,38.945403999999996],
[45.014064,38.946297],
[45.012653,38.946807],
[45.012139,38.947022],
[45.011823,38.947033999999995],
[45.011601,38.947067],
[45.011509,38.946971],
[45.011305,38.945719],
[45.010656,38.945824],
[45.010379,38.945499],
[45.010183999999995,38.944902],
[45.010746,38.944794],
[45.011514999999996,38.944764],
[45.011492,38.944514999999996],
[45.012097,38.944359],
[45.012496,38.944161],
[45.013355999999995,38.943678],
[45.013833999999996,38.943452],
[45.014337999999995,38.943374999999996],
[45.014976,38.943137]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran18 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.996227,38.973279999999995],
[45.00586,38.986052],
[45.005587999999996,38.986464],
[45.005244,38.986256999999995],
[45.005013999999996,38.986421],
[44.995171,38.973476]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran19 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.010183999999995,38.944902],
[45.010379,38.945499],
[45.010656,38.945824],
[45.011305,38.945719],
[45.011509,38.946971],
[45.010901999999994,38.947126999999995],
[45.010126,38.947204],
[45.008987999999995,38.94716],
[45.008598,38.946875999999996],
[45.008567,38.945395],
[45.009282,38.94517],
[45.009373,38.946025999999996],
[45.009751,38.945961],
[45.009937,38.945749],
[45.009854,38.94565],
[45.009989999999995,38.945513999999996],
[45.009819,38.945007]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran20 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.032258999999996,38.935995],
[45.033828,38.937751999999996],
[45.03472,38.940281],
[45.035045,38.940211],
[45.035526999999995,38.944174],
[45.035578,38.944933],
[45.035394,38.944883],
[45.033705,38.943151],
[45.031245999999996,38.947297999999996],
[45.030226,38.946037],
[45.028518999999996,38.943988999999995],
[45.029249,38.942516999999995],
[45.029398,38.942155],
[45.031203,38.938699],
[45.031797999999995,38.937345]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran21 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.976682,38.882735],
[44.981168,38.883634],
[44.982606999999994,38.883883999999995],
[44.982212,38.887792],
[44.97641,38.887035],
[44.976597,38.884361]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran22 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.970206,38.882318999999995],
[44.971989,38.882514],
[44.9717,38.886356],
[44.967,38.885709999999996],
[44.967137,38.883725],
[44.970045999999996,38.884133]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran23 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.998377,38.972991],
[45.006961,38.984795],
[45.00586,38.986052],
[44.996227,38.973279999999995]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran24 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.972575,38.874671],
[44.977340999999996,38.875198999999995],
[44.977306,38.875754],
[44.977143999999996,38.875769999999996],
[44.97714,38.876045999999995],
[44.977287,38.876068],
[44.976875,38.882768],
[44.972014,38.882169]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran25 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.033705,38.943151],
[45.035394,38.944883],
[45.035578,38.944933],
[45.035526999999995,38.947599],
[45.034994,38.947554],
[45.034985,38.947753999999996],
[45.034898,38.947886],
[45.034831999999994,38.948299999999996],
[45.034627,38.949017999999995],
[45.034003,38.950086],
[45.033853,38.950451],
[45.031245999999996,38.947297999999996]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran26 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.018397,38.902839],
[45.019847,38.903421],
[45.019521999999995,38.904423],
[45.019313,38.906468],
[45.019117,38.908508],
[45.019026,38.910764],
[45.017869999999995,38.910413],
[45.017978,38.90978],
[45.018403,38.907748999999995],
[45.018443,38.907002],
[45.018352,38.903518]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran27 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.991931,38.971761],
[44.992369,38.972136],
[44.992799,38.972328999999995],
[44.99352,38.972581],
[44.994707999999996,38.972814],
[44.994935999999996,38.972879999999996],
[44.995177999999996,38.972925],
[44.995566,38.972961],
[44.997291,38.972761],
[44.998056,38.972628],
[44.998066,38.972862],
[44.995092,38.973341999999995],
[44.995042,38.973794999999996],
[44.994445,38.976074],
[44.994144,38.976577999999996],
[44.993901,38.976352],
[44.993688,38.975781999999995],
[44.992784,38.974011],
[44.99057,38.972073],
[44.99039,38.971868]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran28 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.030255,38.92745],
[45.031811999999995,38.929894],
[45.032545999999996,38.931965],
[45.033370999999995,38.933909],
[45.034106,38.935725999999995],
[45.034742,38.937149],
[45.03483,38.938444],
[45.035045,38.940211],
[45.03472,38.940281],
[45.033828,38.937751999999996],
[45.032258999999996,38.935995],
[45.032441999999996,38.935451],
[45.028619,38.929744]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran29 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.894169999999995,38.856013],
[44.895404,38.859637],
[44.904678999999994,38.872695],
[44.904831,38.872476999999996],
[44.911471999999996,38.882315],
[44.911487,38.879267999999996],
[44.920457999999996,38.879477],
[44.920595,38.871463],
[44.920466,38.871291],
[44.920480999999995,38.868834],
[44.921867999999996,38.868877],
[44.921884,38.879477],
[44.922438,38.879387],
[44.922436,38.880213999999995],
[44.922844999999995,38.880697],
[44.923328,38.879861999999996],
[44.923348,38.879306],
[44.930537,38.878456],
[44.933823,38.882249],
[44.933628999999996,38.882466],
[44.934832,38.884077],
[44.934768,38.884941999999995],
[44.93543,38.885754],
[44.93531,38.886272999999996],
[44.935555,38.886511999999996],
[44.936668999999995,38.884046999999995],
[44.936372999999996,38.883759999999995],
[44.938067,38.88031],
[44.939138,38.879076],
[44.940701,38.881011],
[44.939609999999995,38.882647999999996],
[44.938624999999995,38.884779],
[44.938455,38.888182],
[44.945834999999995,38.897081],
[44.941444,38.905345],
[44.941615999999996,38.905516999999996],
[44.942001999999995,38.904787],
[44.946545,38.908744999999996],
[44.946827,38.908229999999996],
[44.947733,38.909368],
[44.968525,38.926165],
[44.964859999999994,38.932127],
[44.963859,38.934503],
[44.963983,38.934619999999995],
[44.963732,38.935859],
[44.958175999999995,38.955041],
[44.945615,38.947821999999995],
[44.933527,38.938005],
[44.932902,38.937194999999996],
[44.930802,38.9431],
[44.930098,38.942695],
[44.930806,38.940304999999995],
[44.931779,38.935975],
[44.92529,38.930821],
[44.923156999999996,38.929914],
[44.921184,38.928763],
[44.918903,38.926998999999995],
[44.917983,38.929417],
[44.905263,38.919546],
[44.905248,38.918656999999996],
[44.905117,38.91888],
[44.904922,38.918381],
[44.905479,38.917446999999996],
[44.905377,38.917378],
[44.906496999999995,38.914921],
[44.907053999999995,38.914288],
[44.906513,38.914524],
[44.907407,38.913119],
[44.910301,38.906524],
[44.908834,38.905282],
[44.909721999999995,38.902124],
[44.909531,38.902049],
[44.909839,38.90117],
[44.914018,38.895739999999996],
[44.913129,38.895965],
[44.912763999999996,38.895762],
[44.913709,38.894555],
[44.912943999999996,38.891552],
[44.911958,38.890771],
[44.911339999999996,38.890620999999996],
[44.910672999999996,38.89105],
[44.911546,38.889424999999996],
[44.912084,38.889151],
[44.912926,38.889103],
[44.911640999999996,38.886679],
[44.911736999999995,38.886587999999996],
[44.911587999999995,38.886213],
[44.91057,38.884464],
[44.909423,38.886331],
[44.908739999999995,38.885354],
[44.909979,38.883455],
[44.903262,38.873934],
[44.902702999999995,38.874365999999995],
[44.903228999999996,38.875105999999995],
[44.902812999999995,38.875696],
[44.902234,38.875040999999996],
[44.902291,38.874092],
[44.901933,38.874128999999996],
[44.901782999999995,38.873292],
[44.901523999999995,38.87363],
[44.901055,38.872980999999996],
[44.90165,38.871983],
[44.901391,38.871328999999996],
[44.900307999999995,38.869794999999996],
[44.898126999999995,38.873785999999996],
[44.897417,38.873796999999996],
[44.897433,38.873560999999995],
[44.897073999999996,38.873582],
[44.897096999999995,38.874086],
[44.895151999999996,38.874204],
[44.895297,38.871157],
[44.894664,38.870309999999996],
[44.895246,38.869481],
[44.89691,38.871818],
[44.898514999999996,38.867762],
[44.897891,38.866872],
[44.898075999999996,38.866800999999995],
[44.893673,38.860847],
[44.893479,38.86096],
[44.893564999999995,38.860583999999996],
[44.893162,38.860047],
[44.893682999999996,38.857422],
[44.893862,38.857310999999996],
[44.893626,38.856666],
[44.893890999999996,38.856487],
[44.893806999999995,38.856235]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran30 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[45.007759,38.938646999999996],[45.007548,38.938722999999996],[45.007664,38.93909],[45.007740999999996,38.939225],[45.007728,38.939239],[45.007926999999995,38.939577],[45.008181,38.94019],[45.008410999999995,38.940957999999995],[45.0086,38.941744],[45.008789,38.942223999999996],[45.009057999999996,38.943034],[45.009474999999995,38.942789999999995],[45.009814,38.944069],[45.009961999999994,38.944691999999996],[45.012079,38.944221],[45.012885,38.943667999999995],[45.012068,38.940222999999996],[45.011424999999996,38.940126],[45.011151,38.940146999999996],[45.01087,38.940287],[45.010131,38.940425999999995],[45.009561,38.940329999999996],[45.009127,38.940126],[45.008739,38.939751],[45.008244,38.939417999999996],[45.008016,38.939085]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });

		var gran31 = new ymaps.GeoObject({
        geometry: {         // Описываем геометрию геообъекта.
            type: "Polygon",             // Тип геометрии - "Многоугольник".
            coordinates: [             // Указываем координаты вершин многоугольника.
				[

						[44.999852999999995,38.858439],[44.999735,38.858832],[44.999713,38.859223],[44.999784999999996,38.859657],[44.999758,38.860150999999995],[44.999823,38.860816],[45.000048,38.861674],[45.000215,38.862007],[45.000501,38.862345],[45.000626,38.862837999999996],[45.000729,38.862994],[45.000927,38.863116999999995],[45.001182,38.863396],[45.001399,38.863696999999995],[45.001627,38.864217],[45.001825,38.864484999999995],[45.001928,38.864807],[45.002083999999996,38.865069999999996],[45.002235999999996,38.865108],[45.002308,38.865247],[45.002308,38.865466999999995],[45.002373,38.865628],[45.002632,38.865843],[45.002722999999996,38.866025],[45.00329,38.866406],[45.003443,38.866448999999996],[45.003698,38.866744],[45.003907,38.866883],[45.004191999999996,38.867269],[45.004554,38.867526999999995],[45.004853999999995,38.867581],[45.004982,38.867667],[45.004416,38.869613],[45.002396,38.872507],[45.00076,38.873233],[45.000481,38.874133],[45.000332,38.874398],[44.999962,38.874869],[44.995340999999996,38.872959],[44.994968,38.874565],[44.994823,38.876289],[44.993879,38.876205999999996],[44.994138,38.870456999999995],[44.993724,38.869738],[44.997066,38.86593],[44.997243,38.865590999999995],[44.997384,38.865179],[44.997665999999995,38.863833],[44.998098999999996,38.863897],[44.998718,38.863853999999996],[44.998812,38.863223999999995],[44.998712,38.863146],[44.998549,38.861996],[44.998674,38.862048],[44.998712999999995,38.861844999999995],[44.998511,38.861751999999996],[44.998352999999994,38.860749999999996],[44.998318999999995,38.860761],[44.998774,38.85867],[44.999081,38.858748999999996],[44.999094,38.858813],[44.999483999999995,38.858709999999995],[44.999537,38.858497]


				]
            ],
        },
        properties:{         // Описываем свойства геообъекта.
        }
    }, {
        // Описываем опции геообъекта.
        fillColor: '#00FF00',         // Цвет заливки.
        strokeColor: '#0000FF',         // Цвет обводки.
        opacity: 0.3,         // Общая прозрачность (как для заливки, так и для обводки).
        strokeWidth: 1         // Ширина обводки.
    });



















	var _minist_sedper = new ymaps.Polyline([
		[44.565059,40.139487],
		[44.565650,40.138575],
		[44.565773,40.138452],
		[44.565869,40.138420],
		[44.565961,40.138436],
		[44.566033,40.138447],
		[44.566129,40.138499],
		[44.566498,40.138805],
		[44.566597,40.138869],
		[44.566724,40.138880],
		[44.566824,40.138876],
		[44.567001,40.138806],
		[44.567112,40.138731],
		[44.568722,40.137503],
		[44.570167,40.136400],
		[44.571071,40.135689],
		[44.571297,40.135517],
		[44.572398,40.134809],
		[44.573180,40.134348],
		[44.573563,40.134133],
        ], {
            hintContent: "Маршруты № 26,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _sedper = new ymaps.Polyline([
		[44.572655,40.127593],
		[44.573563,40.134133],
        ], {
            hintContent: "Маршруты № 29"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _sedper_razvyazka = new ymaps.Polyline([
		[44.573563,40.134133],
		[44.573820,40.133967],
		
        ], {

            hintContent: "Маршруты № 26,29,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _29_34_shosseynaya = new ymaps.Polyline([
		[44.573820,40.133967],
		[44.574580,40.133511],
		
        ], {
            hintContent: "Маршруты № 29,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _mihailova = new ymaps.Polyline([
		[44.575829,40.138437],
		[44.574590,40.134076],
		[44.574571,40.133936],
		[44.574616,40.133942],		
        ], {
            hintContent: "Маршруты № 3,5,16,17,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _17_51 = new ymaps.Polyline([
		[44.574616,40.133942],	
		[44.574580,40.133511],		
        ], {
            hintContent: "Маршруты № 17,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _shosseynaya_batareynaya = new ymaps.Polyline([
		[44.574580,40.133511],
		[44.575011,40.133261],
		
        ], {
            hintContent: "Маршруты № 17,29,34,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _26 = new ymaps.Polyline([
		[44.573820,40.133967],
		[44.574002,40.133943],
		[44.574248,40.133932],
		[44.574616,40.133932],
        ], {
            hintContent: "Маршруты № 26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _26_5 = new ymaps.Polyline([
		[44.574616,40.133932],
		[44.574846,40.133975],
		[44.575275,40.134144],
        ], {
            hintContent: "Маршруты № 3,5,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _27 = new ymaps.Polyline([
		[44.575011,40.133261],
		[44.575275,40.134144],
        ], {
            hintContent: "Маршруты № 27"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _shoseynaya_bez_troleybusov = new ymaps.Polyline([
		[44.575011,40.133261],
		[44.575566,40.132937],
		[44.576755,40.132207],
		[44.577284,40.131891],
		[44.577438,40.131783],
		[44.577771,40.131504],
		[44.578609,40.130701],
		[44.579518,40.129800],
		[44.581382,40.127923],
		[44.581738,40.127666],
		
        ], {
            hintContent: "Маршруты № 7,17,27,29,34,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _shoseynaya_do_sportivnoy = new ymaps.Polyline([
		[44.581738,40.127666],
		[44.582463,40.127247],
		[44.583763,40.126523],
		[44.584660,40.126024],
		[44.584744,40.125971],
		[44.586139,40.125171],
		[44.586358,40.124828],
		[44.586458,40.124592],
		[44.587624,40.120900],
		[44.587708,40.120804],
		[44.587793,40.120755],
		[44.587873,40.120745],
		[44.588617,40.120755],
		[44.590001,40.120768],
		[44.590161,40.120724],
		[44.590276,40.120654],
		[44.590372,40.120584],
		[44.590452,40.120461],
		[44.590521,40.120311],
		[44.590602,40.120037],
		[44.590663,40.119683],
		[44.591369,40.114932],
		[44.593213,40.115397],
        ], {
            hintContent: "Маршруты № 7,17,27,29,34,51<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _batareynaya_zhelezn_do_vt_kerpich = new ymaps.Polyline([
		[44.575275,40.134144],
		[44.576517,40.134674],
		[44.577353,40.135017],
		[44.578146,40.135360],
		[44.578764,40.135612],
		[44.579385,40.135859],
		[44.579500,40.135897],
		[44.579665,40.135923],
		[44.579791,40.135891],
		[44.580246,40.135703],
		[44.582175,40.134748],
		[44.582888,40.134340],
		[44.583643,40.133986],
		[44.584061,40.133782],
		[44.584670,40.133449],
		[44.585609,40.133020],
		[44.586514,40.132634],
		[44.587254,40.132307],
		[44.588163,40.131910],
		[44.588722,40.131674],
		[44.589566,40.131368],
		[44.589822,40.131288],
		[44.590041,40.131245],
		[44.590769,40.131159],
		[44.591639,40.131071],
		[44.591984,40.131039],
		[44.593375,40.131270],
		[44.594541,40.131611],
		[44.595243,40.131868],
		[44.595772,40.132093],	
        ], {
            hintContent: "Маршруты № 3,5,12,16,26,27"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _4 = new ymaps.Polyline([
		[44.585394,40.155871],
		[44.587039,40.151950],
		[44.587522,40.150367],
		[44.587623,40.150124],
		[44.588436,40.148316],
		[44.589393,40.146190],
		[44.590294,40.144210],
		[44.590670,40.143411],
		[44.590992,40.142601],
		[44.591138,40.142220],
		[44.591406,40.141598],
		[44.591582,40.141303],
		[44.591670,40.141206],
		[44.591778,40.141142],
		[44.591954,40.141072],
		[44.592012,40.141024],
		[44.592077,40.140895],
		[44.592636,40.139607],
		[44.593430,40.137746],
		[44.594288,40.135672],
		[44.595779,40.132089],
        ], {
            hintContent: "Маршруты № 4"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _zhl_do_pushkina = new ymaps.Polyline([
		[44.595772,40.132093],
		[44.598048,40.132804],

        ], {
            hintContent: "Маршруты № 3,4,5,12,16,26,27"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _16_26 = new ymaps.Polyline([
		[44.598048,40.132804],
		[44.601293,40.133781],
		[44.602775,40.134243],
		[44.604461,40.134774],
		[44.606048,40.135273],
		[44.607550,40.135755],
        ], {
            hintContent: "Маршруты № 16,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _57 = new ymaps.Polyline([
		[44.607944,40.142992],
		[44.607537,40.142832],
		[44.607392,40.142767],
		[44.607223,40.142612],
		[44.607085,40.142477],
		[44.606959,40.142252],
		[44.606909,40.142118],
		[44.606897,40.141952],
		[44.606920,40.141512],
		[44.606959,40.140541],
		[44.606924,40.140332],
		[44.606905,40.140074],
		[44.607216,40.138036],
		[44.607392,40.136877],
		[44.607564,40.135750],
		[44.607550,40.135755],
        ], {
            hintContent: "Маршруты № 57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _16_26_57_do_zavodsk = new ymaps.Polyline([
		[44.607550,40.135755],
		[44.609397,40.136311],
		[44.611003,40.136821],
		[44.612794,40.137368],
		[44.614062,40.137776],
		[44.614277,40.137835],
		[44.614353,40.137336],
		[44.614514,40.136413],
		[44.614679,40.134777],
		[44.614890,40.132336],
		[44.615319,40.127959],
        ], {
            hintContent: "Маршруты № 16,26,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _57_do_zavodsk = new ymaps.Polyline([
		[44.615319,40.127959],
		[44.607001,40.125870],
        ], {
            hintContent: "Маршруты № 57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _16_26_do_zhukovskogo = new ymaps.Polyline([
		[44.615319,40.127959],
		[44.617158,40.109169],
        ], {
            hintContent: "Маршруты № 16,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pushkina = new ymaps.Polyline([
		[44.598048,40.132804],
		[44.598134,40.132110],
		[44.598529,40.128387],
		[44.598996,40.123893],
        ], {
            hintContent: "Маршруты № 3,4,5,12,27"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _zavodskaya = new ymaps.Polyline([
		[44.590522,40.120331],
		[44.590879,40.120723],
		[44.591573,40.121409],
		[44.592297,40.122107],
		[44.592462,40.122219],
		[44.592560,40.122233],
		[44.594102,40.122637],
		[44.596406,40.123230],
		[44.598996,40.123893],
        ], {
            hintContent: "Маршруты № 17"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pushkina_1 = new ymaps.Polyline([
		[44.598996,40.123893],
		[44.599710,40.116938],
        ], {
            hintContent: "Маршруты № 3,4,5,12,17,27"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _shovgenova = new ymaps.Polyline([
		[44.593213,40.115397],
		[44.599710,40.116938],
        ], {
            hintContent: "Маршруты № 7<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _pushkina_do_gagarina = new ymaps.Polyline([
		[44.599710,40.116938],
		[44.600438,40.110023],
        ], {
            hintContent: "Маршруты № 3,4,5,7,12,17,27<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _9 = new ymaps.Polyline([
		[44.592366,40.104599],
		[44.593608,40.103328],
		[44.594141,40.102550],
		[44.594674,40.101681],
		[44.595061,40.101053],
		[44.595555,40.100238],
		[44.596433,40.098811],
		[44.596487,40.098725],
		[44.597100,40.097722],
		[44.597349,40.097212],
		[44.596353,40.096051],
		[44.595824,40.095477],
		[44.595057,40.094592],
		[44.594946,40.094479],
		[44.594843,40.094415],
		[44.594755,40.094367],
		[44.594080,40.094206],
		[44.593241,40.094072],
		[44.589908,40.093503],
		[44.589859,40.093648],
		[44.589843,40.093787],
		[44.589862,40.093954],
		[44.589912,40.094141],
		[44.589962,40.094270],
		[44.590173,40.094882],
		[44.590234,40.095166],
		[44.590319,40.096105],
		[44.590380,40.096545],
		[44.590472,40.096893],
		[44.591081,40.098798],
		[44.592251,40.102419],
		[44.592446,40.103004],
		[44.592485,40.103133],
		[44.592508,40.103428],
		[44.592496,40.103777],
		[44.592458,40.104040],
		[44.592339,40.104619],
		[44.591737,40.105375],
		[44.592377,40.106797],
		[44.592964,40.108100],
		[44.593079,40.108294],
		[44.593232,40.108406],
		[44.593934,40.108583],
        ], {
            hintContent: "Маршруты № 9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _sportivnaya = new ymaps.Polyline([
		[44.593213,40.115397],
		[44.593934,40.108583],
        ], {
            hintContent: "Маршруты № 27,29,34,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _gagarina = new ymaps.Polyline([
		[44.593934,40.108583],
		[44.600438,40.110023],
        ], {
            hintContent: "Маршруты № 9,27,29,34,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gagarina_do_komsomols = new ymaps.Polyline([
		[44.600438,40.110023],
		[44.602062,40.110426],
        ], {
            hintContent: "Маршруты № 14,19,29"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _komsomols = new ymaps.Polyline([
		[44.602062,40.110426],
		[44.602279,40.108166],
        ], {
            hintContent: "Маршруты № 29"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pushkina_do_gogolya = new ymaps.Polyline([
		[44.600438,40.110023],
		[44.600690,40.107813],
        ], {
            hintContent: "Маршруты № 3,4,5,7,9,12,14,17,19,27,29,34,51<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pushkina_do_starobazarnoy = new ymaps.Polyline([
		[44.600690,40.107813],
		[44.601176,40.103281],
		[44.601417,40.101012],
		[44.601675,40.098840],
		[44.601886,40.096877],
		[44.602158,40.094002],
		[44.602362,40.092081],
		[44.602461,40.090955],
        ], {
            hintContent: "Маршруты № 1,2,11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _starobazarnoya_komsomolskaya_vorosh_do_koltsova = new ymaps.Polyline([
		[44.602461,40.090955],
		[44.602637,40.090901],
		[44.603362,40.090949],
		[44.603580,40.090976],
		[44.603806,40.090982],
		[44.603914,40.090949],
		[44.604025,40.090794],
		[44.604091,40.088613],
		[44.604060,40.088307],
		[44.603933,40.087927],
		[44.603757,40.087648],
		[44.603723,40.087594],
		[44.603581,40.087455],
		[44.603500,40.087320],
		[44.603382,40.086913],
		[44.603236,40.086500],	
        ], {
            hintContent: "Маршруты № 1,11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _komsomolskaya_2 = new ymaps.Polyline([
		[44.603236,40.086500],
		[44.602504,40.086814],		
        ], {
            hintContent: "Маршруты № 2"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _mopra_do_koltsa = new ymaps.Polyline([
		[44.602504,40.086814],
		[44.602247,40.085827],
		[44.601478,40.082931],
		[44.600934,40.080720],
		[44.600850,40.080452],
		[44.600754,40.080356],
		[44.600708,40.080280],
		[44.600505,40.079368],
		[44.600440,40.079261],
		[44.600352,40.079181],
		[44.600264,40.079132],
		[44.600176,40.079041],
		[44.600110,40.078966],
		[44.600041,40.078789],
		[44.600030,40.078628],
		[44.600049,40.078435],
		[44.600110,40.078290],
		[44.600172,40.078156],
        ], {
            hintContent: "Маршруты № 1,11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _11 = new ymaps.Polyline([
		[44.600018,40.078601],
		[44.599980,40.078698],
		[44.599938,40.078762],
		[44.599819,40.078859],
		[44.598496,40.079380],
		[44.597577,40.079754],
		[44.596618,40.080129],
		[44.591706,40.082019],
        ], {
            hintContent: "Маршруты № 11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _11_1 = new ymaps.Polyline([
		[44.599854,40.078864],
		[44.599946,40.078875],
		[44.600023,40.078918],
		[44.600103,40.078977],
        ], {
            hintContent: "Маршруты № 11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _11_2 = new ymaps.Polyline([
		[44.601318,40.078276],
		[44.600866,40.078446],
		[44.600785,40.078424],
		[44.600697,40.078365],
		[44.600632,40.078226],
		[44.600513,40.078113],
		[44.600379,40.078076],
		[44.600275,40.078092],
		[44.600180,40.078151],
        ], {
            hintContent: "Маршруты № 11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _komsomolskaya_do_pushkina = new ymaps.Polyline([
		[44.602504,40.086814],
		[44.601810,40.087174],
		[44.602197,40.088896],
		[44.602209,40.088982],
		[44.602228,40.089529],
		[44.602289,40.090097],
		[44.602400,40.090736],
		[44.602423,40.090832],
		[44.602466,40.090950],
        ], {
            hintContent: "Маршруты № 1,2,11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _vorosh_do_svobody = new ymaps.Polyline([
		[44.603236,40.086500],
		[44.602541,40.084124],
		[44.602184,40.082653],
		[44.601686,40.080100],
		[44.601318,40.078276],
        ], {
            hintContent: "Маршруты № 1,2,11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _vorosh_do_zapadnoy = new ymaps.Polyline([
		[44.601318,40.078276],
		[44.600950,40.076445],
		[44.600582,40.074595],
		[44.600183,40.072696],
        ], {
            hintContent: "Маршруты № 1,2,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zapadnaya_do_pirogova = new ymaps.Polyline([
		[44.600183,40.072696],
		[44.602804,40.071707],
        ], {
            hintContent: "Маршруты № 1,2,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zapadnaya_do_stepnoy = new ymaps.Polyline([
		[44.602804,40.071707],
		[44.603966,40.071261],
		[44.604265,40.071176],
		[44.604449,40.071133],
		[44.604541,40.071143],
        ], {
            hintContent: "Маршруты № 1,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _stepnaya_do_aerodromnoy = new ymaps.Polyline([
		[44.604541,40.071143],
		[44.604773,40.068859],
		[44.605029,40.066526],
		[44.605259,40.064310],
		[44.605485,40.062100],
        ], {
            hintContent: "Маршруты № 51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _aerodromnaya_do_voroshilova = new ymaps.Polyline([
		[44.605485,40.062100],
		[44.603953,40.061746],
		[44.602239,40.061376],
		[44.600560,40.061043],
        ], {
            hintContent: "Маршруты № 7,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _3interrnats_do_pionerskoy = new ymaps.Polyline([
		[44.604541,40.071143],
		[44.607799,40.071822],
		[44.609465,40.072144],
		[44.611065,40.072495],
        ], {
            hintContent: "Маршруты № 1"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zapadnoy_do_mopra = new ymaps.Polyline([
		[44.600183,40.072696],
		[44.599379,40.073007],
        ], {
            hintContent: "Маршруты № 1"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _mopra_do_koltsa_1 = new ymaps.Polyline([
		[44.599379,40.073007],
		[44.599303,40.073226],
		[44.599307,40.073328],
		[44.599322,40.073467],
		[44.599365,40.073682],
		[44.599629,40.074980],
		[44.599998,40.076800],
		[44.600232,40.077910],
		[44.600228,40.077991],
		[44.600202,40.078076],
		[44.600190,40.078130],
        ], {
            hintContent: "Маршруты № 1,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _mopra_do_9janvarya = new ymaps.Polyline([
		[44.599379,40.073007],
		[44.599435,40.072826],
		[44.599458,40.072702],
		[44.599462,40.072568],
		[44.599420,40.071533],
		[44.599335,40.070036],
		[44.599205,40.067896],
		[44.599171,40.067633],
        ], {
            hintContent: "Маршруты № 1,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _9janvarya_do_goncharova = new ymaps.Polyline([
		[44.599171,40.067633],
		[44.597575,40.067278],
        ], {
            hintContent: "Маршруты № 1,2,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _goncharova_do_zhpopova = new ymaps.Polyline([
		[44.597575,40.067278],
		[44.597557,40.066160],
		[44.597553,40.065141],
        ], {
            hintContent: "Маршруты № 1,2,17,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zhpopova_voroshilova_do_aerodrom = new ymaps.Polyline([
		[44.597553,40.065141],
		[44.600141,40.065467],
		[44.600337,40.063263],
		[44.600441,40.062142],
		[44.600556,40.061047],
        ], {
            hintContent: "Маршруты № 1,2,17,26,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _voroshilova_do_sportakovskoy = new ymaps.Polyline([
		[44.600556,40.061047],
		[44.600769,40.058806],
		[44.600880,40.057684],
		[44.601014,40.056590],
        ], {
            hintContent: "Маршруты № 1,2,7,17,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _sportakovskaya_do_stepnaya = new ymaps.Polyline([
		[44.601014,40.056590],
		[44.602695,40.056950],
		[44.604405,40.057331],
		[44.605973,40.057649],
        ], {
            hintContent: "Маршруты № 1,2,17,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _stepnaya_do_aerodromnoy_1 = new ymaps.Polyline([
		[44.605973,40.057649],
		[44.605861,40.058773],
		[44.605489,40.062109],
        ], {
            hintContent: "Маршруты № 1,2,14,17,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _aerodromnaya_do_chkalova = new ymaps.Polyline([
		[44.605489,40.062109],
		[44.607167,40.062450],
		[44.607704,40.062568],
		[44.607827,40.062568],
		[44.608421,40.062407],
		[44.608509,40.062402],
		[44.608670,40.062434],
        ], {
            hintContent: "Маршруты № 1,2,7,14,17,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _chkalova_do_pionerskoy = new ymaps.Polyline([
		[44.608670,40.062434],
		[44.609768,40.062622],
		[44.612086,40.063067],
        ], {
            hintContent: "Маршруты № 1,2,4,7,14,17,26,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pionerskaya_do_3internats = new ymaps.Polyline([
		[44.612086,40.063067],
		[44.611833,40.065699],
		[44.611622,40.067764],
		[44.611404,40.070001],
		[44.611160,40.071739],
		[44.611068,40.072490],
        ], {
            hintContent: "Маршруты № 1,2,4,7,12,14,17,26,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _chkalova_do_deputatskoy = new ymaps.Polyline([
		[44.612086,40.063067],
		[44.612611,40.063175],
        ], {
            hintContent: "Маршруты № 1,2,7,12,17,26,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _deputatskoy_3internats = new ymaps.Polyline([
		[44.612611,40.063175],
		[44.612437,40.065044],
		[44.611993,40.069800],
		[44.611985,40.070084],
		[44.612277,40.072702],
        ], {
            hintContent: "Маршруты № 1,2,3,4,7,9,12,,14,16,19,26,27,29,34<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _3internats = new ymaps.Polyline([
		[44.612277,40.072702],
		[44.611066,40.072487],
        ], {
            hintContent: "Маршруты № 1,4,7,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _chkalova_do_dimitrova = new ymaps.Polyline([
		[44.612611,40.063175],
		[44.613515,40.063330],
		[44.614033,40.063427],
		[44.614274,40.063480],
		[44.614389,40.063529],
		[44.615389,40.064550],
		[44.616363,40.065563],
		[44.617209,40.066390],
        ], {
            hintContent: "Маршруты № 3,4,9,12,16,17,19,27,29,34<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _dimitrova_do_yunatov = new ymaps.Polyline([
		[44.617209,40.066390],
		[44.618746,40.063501],
        ], {
            hintContent: "Маршруты № 3,4,9,12,19,27,29,34<br/>Троллейбусы № 2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _yunatov_do_privokzalnoy = new ymaps.Polyline([
		[44.618746,40.063501],
		[44.621790,40.067696],
		[44.622064,40.068023],
		[44.622721,40.068849],
		[44.623759,40.070233],
		[44.624046,40.070603],
		[44.624790,40.071671],
        ], {
            hintContent: "Маршруты № 9,12,19,27,29,34,57<br/>Троллейбусы № 2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _privokzalnoy_do_svobody = new ymaps.Polyline([
		[44.624790,40.071671],
		[44.624729,40.071825],
		[44.624591,40.072962],
		[44.623800,40.079761],
        ], {
            hintContent: "Маршруты № 5,9,27,29,57<br/>Троллейбусы № 2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _privokzalnoy_do_lenina_per_vokzalnyi = new ymaps.Polyline([
		[44.623800,40.079761],
		[44.623031,40.086556],
		[44.620855,40.105290],
		[44.621675,40.105521],
		[44.621739,40.105604],
		[44.621762,40.105690],
		[44.621498,40.107801],
        ], {
            hintContent: "Маршруты № 5,9,19,27,29,57<br/>Троллейбусы № 2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _yunatov_do_gertsina = new ymaps.Polyline([
		[44.624790,40.071671],
		[44.625260,40.072328],
		[44.625911,40.073229],
		[44.626237,40.073701],
        ], {
            hintContent: "Маршруты № 5,12,19,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _19 = new ymaps.Polyline([
		[44.626237,40.073701],
		[44.625988,40.075528],
		[44.625731,40.077830],
		[44.625467,40.080088],
		[44.623800,40.079761],
        ], {
            hintContent: "Маршруты № 19"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _yunatov_do_novoy = new ymaps.Polyline([
		[44.626237,40.073701],
		[44.626605,40.074216],
		[44.626712,40.074409],
		[44.626758,40.074581],
		[44.627015,40.075665],
		[44.627183,40.076271],
		[44.627229,40.076373],
		[44.628061,40.077381],
        ], {
            hintContent: "Маршруты № 5,12"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _12 = new ymaps.Polyline([
		[44.628061,40.077381],
		[44.629045,40.075874],
		[44.629432,40.075289],
		[44.629938,40.074576],
		[44.631121,40.072988],
		[44.632255,40.071545],
		[44.632791,40.070844],
		[44.631577,40.069230],
		[44.630577,40.067926],
		[44.628548,40.071162],
		[44.628062,40.071870],
		[44.626886,40.073790],
		[44.626614,40.074203],
        ], {
            hintContent: "Маршруты № 12"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _5 = new ymaps.Polyline([
		[44.628061,40.077381],
		[44.631022,40.081226],
		[44.631122,40.081269],
		[44.631260,40.081210],
		[44.633533,40.077460],
		[44.633797,40.077766],
		[44.633855,40.077906],
		[44.633843,40.078018],
		[44.631735,40.081667],
		[44.631800,40.081898],
		[44.631884,40.082075],
		[44.639348,40.092475],
        ], {
            hintContent: "Маршруты № 5"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _dimitrova_do_kurganoy = new ymaps.Polyline([
		[44.617209,40.066390],
		[44.616611,40.067506],
        ], {
            hintContent: "Маршруты № 3,16,17<br/>Троллейбусы № 1,3,4,8,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _16 = new ymaps.Polyline([
		[44.612504,40.105753],
		[44.616232,40.071276],
		[44.616597,40.067528],
		
        ], {
            hintContent: "Маршруты № 16"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _dimitrova_do_proletarskaya = new ymaps.Polyline([
		[44.616611,40.067506],
		[44.612658,40.074877],
		[44.612482,40.075118],
        ], {
            hintContent: "Маршруты № 3,17<br/>Троллейбусы № 1,3,4,8,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _deputatskaya_do_proletki = new ymaps.Polyline([
		[44.612277,40.072702],
		[44.612482,40.075118],
        ], {
            hintContent: "Маршруты № 2,3,7,9,12,14,16,19,27,29,34<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _12marta_yunatov_do_limitrova = new ymaps.Polyline([
		[44.608670,40.062434],
		[44.608781,40.061404],
		[44.608988,40.059081],
		[44.609202,40.056978],
		[44.609390,40.054843],
		[44.609467,40.054135],
		[44.609654,40.054178],
		[44.611421,40.054489],
		[44.612180,40.054634],
		[44.612812,40.054800],
		[44.612915,40.054870],
		[44.613739,40.056045],
		[44.615320,40.058406],
		[44.616707,40.060489],
		[44.618746,40.063501],
        ], {
            hintContent: "Маршруты № 4,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _14 = new ymaps.Polyline([
		[44.631672,40.000228],
		[44.628165,40.004846],
		[44.628066,40.005136],
		[44.626388,40.007646],
		[44.626036,40.007861],
		[44.623619,40.011342],
		[44.623511,40.012286],
		[44.615036,40.026941],
		[44.614619,40.027989],
		[44.611634,40.036125],
		[44.611496,40.036447],
		[44.610960,40.037842],
		[44.610255,40.040567],
		[44.609887,40.041618],
		[44.609519,40.042648],
		[44.609213,40.044258],
		[44.608737,40.046918],
		[44.608262,40.048898],
		[44.608048,40.049665],
		[44.607821,40.050177],
		[44.607136,40.051191],
		[44.606840,40.051673],
		[44.606637,40.052221],
		[44.606538,40.052634],
		[44.606469,40.053111],
		[44.606341,40.054409],
		[44.606111,40.056566],
		[44.605973,40.057649],
        ], {
            hintContent: "Маршруты № 14"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _7 = new ymaps.Polyline([
		[44.601014,40.056590],
		[44.601126,40.055496],
		[44.601248,40.054402],
		[44.601382,40.053146],
		[44.601501,40.051843],
        ], {
            hintContent: "Маршруты № 7"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _26_end = new ymaps.Polyline([
		[44.597553,40.065141],
		[44.597446,40.065027],
		[44.597227,40.064748],
		[44.596810,40.064195],
		[44.596507,40.063718],
		[44.596388,40.063482],
		[44.596319,40.063230],
		[44.596273,40.062956],
		[44.596269,40.062527],
        ], {
            hintContent: "Маршруты № 26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _17 = new ymaps.Polyline([
		[44.597575,40.067278],
		[44.596141,40.066929],
		[44.596037,40.066924],
		[44.595976,40.066935],
		[44.595888,40.066994],
		[44.595343,40.067535],
		[44.594696,40.068126],
		[44.594358,40.068356],
		[44.594266,40.068372],
		[44.594159,40.068351],
		[44.594075,40.068303],
		[44.593979,40.068185],
		[44.592903,40.063981],
		[44.591901,40.064622],
		[44.591859,40.064691],
		[44.591863,40.064793],
		[44.592039,40.065549],
		[44.592246,40.066268],
		[44.592365,40.066542],
		[44.592557,40.066901],
		[44.592771,40.067191],
		[44.592293,40.067925],
        ], {
            hintContent: "Маршруты № 17"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _9janvarya_do_pirogova = new ymaps.Polyline([
		[44.599171,40.067633],
		[44.599895,40.067767],
		[44.601536,40.068137],
		[44.603176,40.068497],
        ], {
            hintContent: "Маршруты № 2"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pirogova_do_zapodnoy = new ymaps.Polyline([
		[44.603176,40.068497],
		[44.602911,40.070797],
		[44.602800,40.071692],
        ], {
            hintContent: "Маршруты № 2"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gagarina_do_sovetskoy = new ymaps.Polyline([
		[44.602062,40.110426],
		[44.605272,40.111165],
        ], {
            hintContent: "Маршруты № 14,19"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gagarina_do_pionerskoy = new ymaps.Polyline([
		[44.605272,40.111165],
		[44.606906,40.111531],
        ], {
            hintContent: "Маршруты № 11,51,110"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pionerskaya_110 = new ymaps.Polyline([
		[44.606906,40.111531],
		[44.607141,40.109216],
        ], {
            hintContent: "Маршруты № 110"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gagarina_do_proletki = new ymaps.Polyline([
		[44.606906,40.111531],
		[44.608498,40.111902],
        ], {
            hintContent: "Маршруты № 11,51"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _sovetskaya = new ymaps.Polyline([
		[44.605272,40.111165],
		[44.605513,40.108889],
        ], {
            hintContent: "Маршруты № 14,51,110"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _sovetskaya_do_zheleznodor = new ymaps.Polyline([
		[44.605272,40.111165],
		[44.604787,40.115754],
		[44.604545,40.118098],
		[44.604018,40.122744],
		[44.603757,40.125045],
		[44.603259,40.129541],
		[44.603021,40.131896],
		[44.602826,40.133596],
		[],
        ], {
            hintContent: "Маршруты № 11,19"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zheleznodor_do_pionerskoy = new ymaps.Polyline([
		[44.602826,40.133596],
		[44.604528,40.134106],
        ], {
            hintContent: "Маршруты № 11,19<br/>"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pionerskoy_do_vostoch = new ymaps.Polyline([
		[44.604528,40.134106],
		[44.604715,40.132330],
        ], {
            hintContent: "Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _vostoch_do_proletki = new ymaps.Polyline([
		[44.604715,40.132330],
		[44.606267,40.132727],
        ], {
            hintContent: "Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zheleznodor_do_konfabriki = new ymaps.Polyline([
		[44.604528,40.134106],
		[44.605428,40.134363],
		[44.605877,40.134513],
        ], {
            hintContent: "Маршруты № 11,19<br/>Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _proletka_do_zovodskoy = new ymaps.Polyline([
		[44.605877,40.134513],
		[44.605953,40.134508],
		[44.606022,40.134470],
		[44.606087,40.134385],
		[44.606524,40.130351],
		[44.606996,40.125871],
        ], {
            hintContent: "Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _proletka_do_gagarina = new ymaps.Polyline([
		[44.606996,40.125871],
		[44.607739,40.118879],
		[44.608229,40.114183],
		[44.608494,40.111903],
        ], {
            hintContent: "Маршруты № 57<br/>Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _proletka_do_gogolya = new ymaps.Polyline([
		[44.608494,40.111903],
		[44.608739,40.109596],
        ], {
            hintContent: "Маршруты № 11,51,57<br/>Троллейбусы № 2,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gogolya_do_sovetskoy = new ymaps.Polyline([
		[44.600690,40.107813],
		[44.605513,40.108889],
        ], {
            hintContent: "Маршруты № 1,2,3,4,5,7,9,11,12,14,16,17,19,27,29,34,51<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _gogolya_do_proletki = new ymaps.Polyline([
		[44.605513,40.108889],
		[44.607136,40.109214],
		[44.608743,40.109597],
        ], {
            hintContent: "Маршруты № 1,2,3,4,5,7,9,11,12,14,16,17,19,27,29,34,51,110<br/>Троллейбусы № 4,5,7,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _gogolya_do_krestyanskoy = new ymaps.Polyline([
		[44.608743,40.109597],
		[44.610364,40.109953],
        ], {
            hintContent: "Маршруты № 2,4,7,9,12,16,19,26,27,29,34,"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _gogolya_do_kurgannoy = new ymaps.Polyline([
		[44.610364,40.109953],
		[44.612001,40.110313],
        ], {
            hintContent: "Маршруты № 2,4,7,12,16,26,27,29,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _kurgannaya_do_zhukovskogo = new ymaps.Polyline([
		[44.612001,40.110313],
		[44.612277,40.108065],
        ], {
            hintContent: "Маршруты № 2,4,7,12,16,26,27,29,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _kurgannaya_do_krasnookt = new ymaps.Polyline([
		[44.612277,40.108065],
		[44.612503,40.105753],
        ], {
            hintContent: "Маршруты № 4,7,12,27,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _krestyanskoy_do_zhukovskogo = new ymaps.Polyline([
		[44.610364,40.109953],
		[44.610604,40.107688],
        ], {
            hintContent: "Маршруты № 9,19"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _zhukovskogo_do_krestyanskoy = new ymaps.Polyline([
		[44.610604,40.107688],
		[44.608976,40.107335],
        ], {
            hintContent: "Маршруты № 26,57<br/>Троллейбусы № 1,2,3,5,6,7,8,9,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zhukovskogo_do_kurgannoy = new ymaps.Polyline([
		[44.610604,40.107688],
		[44.612277,40.108065],
        ], {
            hintContent: "Маршруты № 19,26,57<br/>Троллейбусы № 1,2,3,5,6,7,8,9,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zhukovskogo_do_nekrasova = new ymaps.Polyline([
		[44.612277,40.108065],
		[44.615518,40.108834],
        ], {
            hintContent: "Маршруты № 9,16,19,26,27,29,57<br/>Троллейбусы № 1,2,3,5,6,7,8,9,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _nekrasova_do_shovgenova = new ymaps.Polyline([
		[44.615518,40.108834],
		[44.614419,40.120341],
        ], {
            hintContent: "Троллейбусы № 3,8,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _nekrasova_do_pryamoy = new ymaps.Polyline([
		[44.614419,40.120341],
		[44.614193,40.122642],
        ], {
            hintContent: "Троллейбус №3"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _pryamaya_end = new ymaps.Polyline([
		[44.614193,40.122642],
		[44.617445,40.123351],
		[44.619098,40.123725],
		[44.620556,40.124073],
        ], {
            hintContent: "Троллейбус №3"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _shovgenova_end = new ymaps.Polyline([
		[44.614419,40.120341],
		[44.616009,40.120661],
		[44.617693,40.121045],
		[44.619345,40.121335],
		[44.624009,40.122434],
		[44.626051,40.122874],
		[44.631718,40.124148],
        ], {
            hintContent: "Троллейбусы № 8,9"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zhukovskogo_do_hakurate = new ymaps.Polyline([
		[44.615518,40.108834],
		[44.617159,40.109170],
        ], {
            hintContent: "Маршруты № 9,16,19,26,27,29,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _zhukovskogo_do_kalinina = new ymaps.Polyline([
		[44.617159,40.109170],
		[44.618756,40.109496],
        ], {
            hintContent: "Маршрутыы № 9,19,27,29,57 <br/>Троллейбусы № 1,2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _kalinina_do_krasnookt = new ymaps.Polyline([
		[44.618756,40.109496],
		[44.618986,40.107227],
        ], {
            hintContent: "Маршруты № 9,19,27,29,57 <br/>Троллейбусы № 1,2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _proletka_do_zhukovskogo = new ymaps.Polyline([
		[44.608750,40.109593],
		[44.608976,40.107335],
        ], {
            hintContent: "Маршруты № 1,2,3,4,5,7,9,12,14,16,17,19,26,29,57,110<br/>Троллейбусы № 2,4,5,7,9,10,11 "
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _proletka_do_krasnookt = new ymaps.Polyline([
		[44.608976,40.107335],
		[44.609217,40.105039],
        ], {
            hintContent: "Маршруты № 1,2,3,4,5,7,9,12,14,16,17,19,26,29,110<br/>Троллейбусы № 1,2,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _proletka_do_lenina = new ymaps.Polyline([
		[44.609217,40.105039],
		[44.609489,40.102750],
        ], {
            hintContent: "Маршруты № 2,3,4,7,9,12,14,16,17,19,27,29,34,57<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _proletka_do_pobedy = new ymaps.Polyline([
		[44.609489,40.102750],
		[44.609720,40.100486],
        ], {
            hintContent: "Маршруты № 2,3,4,7,9,12,14,16,17,19,27,29,34,57<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _proletka_do_titova = new ymaps.Polyline([
		[44.609720,40.100486],
		[44.611473,40.084288],
        ], {
            hintContent: "Маршруты № 2,3,4,7,9,12,14,16,17,19,27,29,57<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _proletka_do_dimitrova = new ymaps.Polyline([
		[44.611473,40.084288],
		[44.611954,40.079710],
		[44.612475,40.075129],
        ], {
            hintContent: "Маршруты № 2,3,4,7,9,12,14,16,17,19,27,29<br/>Троллейбусы № 1,2,3,4,5,6,7,8,10,11"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _pobeda_do_pionerskoy = new ymaps.Polyline([
		[44.609720,40.100486],
		[44.608088,40.100120],
        ], {
            hintContent: "Маршруты № 7,12,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _pionerskaya_do_titova = new ymaps.Polyline([
		[44.608088,40.100120],
		[44.608355,40.097804],
		[44.608830,40.093223],
		[44.609621,40.086277],
		[44.609857,40.083976],
        ], {
            hintContent: "Маршруты № 4,7,12,14,26,34"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _titova_do_proletki = new ymaps.Polyline([
		[44.609857,40.083976],
		[44.611473,40.084288],
        ], {
            hintContent: "Маршруты № 57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _pionerskaya_do_3interbats = new ymaps.Polyline([
		[44.609857,40.083976],
		[44.610121,40.081691],
		[44.610814,40.074756],
		[44.611075,40.072501],
        ], {
            hintContent: "Маршруты № 4,7,12,14,26,34,57"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _lenina_do_pinerskoy = new ymaps.Polyline([
		[44.609489,40.102750],
		[44.607861,40.102402],
		[44.607943,40.101687],
		[44.608066,40.100308],
		[44.608088,40.100120],
        ], {
            hintContent: "Маршруты № 4,14,26"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});

var _krasnookt_do_kurganoy = new ymaps.Polyline([
		[44.609217,40.105039],
		[44.610859,40.105380],
		[44.612503,40.105769],
        ], {
            hintContent: "Маршруты № 1,2,4,5,7,12,16,27,34,110"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _krasnookt_do_hakurate = new ymaps.Polyline([
		[44.612503,40.105769],
		[44.618996,40.107219],
        ], {
            hintContent: "Маршруты № 1,2,5,110"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _krasnookt_do_vokzala = new ymaps.Polyline([
		[44.618986,40.107227],
		[44.621497,40.107824],
        ], {
            hintContent: "Маршруты № 1,2,5,9,19,27,29,57<br/>Троллейбусы № 1,2,5,6,7,10"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,			
			strokeOpacity: 0.4
});

var _1_2 = new ymaps.Polyline([
		[44.621497,40.107824],
		[44.621693,40.107872],
		[44.621838,40.107899],
        ], {
            hintContent: "Маршруты № 1,2"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
});
	
	var obj = 
	[	
		gran1,
		gran2,
		gran3,
		gran4,
		gran5,
		gran6,
		gran7,
		gran8,
		gran9,
		gran10,
		gran11,
		gran12,
		gran13,
		gran14,
		gran15,
		gran16,
		gran17,
		gran18,
		gran19,
		gran20,
		gran21,
		gran22,
		gran23,
		gran24,
		gran25,
		gran26,
		gran27,
		gran28,
		gran29,
		gran30,
		gran31,
		myGeoObject1,
		myGeoObject2,
		myGeoObject3,
		myGeoObject4,
		myGeoObject5,
		myGeoObject6,
		_minist_sedper,
		_sedper,
		_sedper_razvyazka,
		_29_34_shosseynaya,
		_mihailova,
		_17_51,
		_shosseynaya_batareynaya,
		_26,
		_26_5,
		_27,
		_shoseynaya_bez_troleybusov,
		_shoseynaya_do_sportivnoy,
		_batareynaya_zhelezn_do_vt_kerpich,
		_4,
		_zhl_do_pushkina,
		_16_26,
		_57,
		_16_26_57_do_zavodsk,
		_57_do_zavodsk,
		_16_26_do_zhukovskogo,
		_pushkina,
		_zavodskaya,
		_pushkina_1,
		_shovgenova,
		_pushkina_do_gagarina,
		_9,
		_sportivnaya,
		_gagarina,
		_pushkina_do_gogolya,
		_gogolya_do_sovetskoy,
		_gogolya_do_proletki,
		_gogolya_do_krestyanskoy,
		_gogolya_do_kurgannoy,
		_kurgannaya_do_zhukovskogo,
		_kurgannaya_do_krasnookt,
		_krestyanskoy_do_zhukovskogo,
		_proletka_do_zhukovskogo,
		_proletka_do_krasnookt,
		_zhukovskogo_do_krestyanskoy,
		_zhukovskogo_do_kurgannoy,
		_zhukovskogo_do_nekrasova,
		_nekrasova_do_shovgenova,
		_nekrasova_do_pryamoy,
		_pryamaya_end,
		_shovgenova_end,
		_zhukovskogo_do_hakurate,
		_zhukovskogo_do_kalinina,
		_kalinina_do_krasnookt,
		_krasnookt_do_kurganoy,
		_krasnookt_do_hakurate,
		_krasnookt_do_vokzala,
		_1_2,
		_gagarina_do_komsomols,
		_komsomols,
		_gagarina_do_sovetskoy,
		_sovetskaya,
		_sovetskaya_do_zheleznodor,
		_zheleznodor_do_pionerskoy,
		_zheleznodor_do_konfabriki,
		_pionerskoy_do_vostoch,
		_vostoch_do_proletki,
		_proletka_do_zovodskoy,
		_gagarina_do_pionerskoy,
		_gagarina_do_proletki,
		_proletka_do_gagarina,
		_proletka_do_gogolya,
		_pionerskaya_110,
		_pushkina_do_starobazarnoy,
		_starobazarnoya_komsomolskaya_vorosh_do_koltsova,
		_vorosh_do_svobody,
		_komsomolskaya_2,
		_komsomolskaya_do_pushkina,
		_mopra_do_koltsa,
		_11,
		_11_1,
		_11_2,
		_vorosh_do_zapadnoy,
		_zapadnoy_do_mopra,
		_zapadnaya_do_pirogova,
		_zapadnaya_do_stepnoy,
		_3interrnats_do_pionerskoy,
		_stepnaya_do_aerodromnoy,
		_stepnaya_do_aerodromnoy_1,
		_aerodromnaya_do_voroshilova,
		_mopra_do_koltsa_1,
		_mopra_do_9janvarya,
		_9janvarya_do_pirogova,
		_pirogova_do_zapodnoy,
		_9janvarya_do_goncharova,
		_17,
		_goncharova_do_zhpopova,
		_26_end,
		_zhpopova_voroshilova_do_aerodrom,
		_voroshilova_do_sportakovskoy,
		_7,
		_sportakovskaya_do_stepnaya,
		_14,
		_aerodromnaya_do_chkalova,
		_12marta_yunatov_do_limitrova,
		_chkalova_do_pionerskoy,
		_chkalova_do_deputatskoy,
		_chkalova_do_dimitrova,
		_dimitrova_do_yunatov,
		_pionerskaya_do_3internats,
		_deputatskoy_3internats,
		_3internats,
		_dimitrova_do_kurganoy,
		_dimitrova_do_proletarskaya,
		_deputatskaya_do_proletki,
		_16,
		_yunatov_do_privokzalnoy,
		_yunatov_do_gertsina,
		_yunatov_do_novoy,
		_12,
		_5,
		_19,
		_privokzalnoy_do_svobody,
		_privokzalnoy_do_lenina_per_vokzalnyi,
		_proletka_do_lenina,
		_lenina_do_pinerskoy,
		_proletka_do_pobedy,
		_pobeda_do_pionerskoy,
		_pionerskaya_do_titova,
		_pionerskaya_do_3interbats,
		_titova_do_proletki,
		_proletka_do_titova,
		_proletka_do_dimitrova,
		route1,
		route2,
		route3,
		route4,
		route5,
		route7,
		route9,
		route11,
		route12,
		route14,
		route16,
		route17,
		route19,
		route26,
		route27,
		route29,
		route34,
		route51,
		route57,
		route110,
		route_troll1,
		route_troll2,
		route_troll3,
		route_troll4,
		route_troll5,
		route_troll6,
		route_troll7,
		route_troll8,
		route_troll9,
		route_troll10,
		route_troll11,
		circlePlacemark,
		circlePlacemark1,
		circlePlacemark2,
		circlePlacemark3,
		circlePlacemark4,
		circlePlacemark5,
		circlePlacemark6,
		circlePlacemark7,
		circlePlacemark8,
		circlePlacemark9,
		circlePlacemark10,
		circlePlacemark11,
		circlePlacemark12,
		circlePlacemark13,
		circlePlacemark14,
		circlePlacemark15,
		circlePlacemark16,
		circlePlacemark17,
		circlePlacemark18,
		circlePlacemark19,
		circlePlacemark20,
		circlePlacemark21,
		circlePlacemark22,
		circlePlacemark23,
		circlePlacemark24,
		circlePlacemark25,
		circlePlacemark26,
		circlePlacemark27,
		circlePlacemark28,
		circlePlacemark29,
		circlePlacemark30,
		circlePlacemark31,
		circlePlacemark32,
		circlePlacemark33,
		circlePlacemark34,
		circlePlacemark35,
		circlePlacemark36,
		circlePlacemark37,
		circlePlacemark38,
		circlePlacemark39,
		circlePlacemark40,
		circlePlacemark41,
		circlePlacemark42,
		circlePlacemark43,
		circlePlacemark44,
		circlePlacemark45,
		circlePlacemark46,
		circlePlacemark47,
		circlePlacemark48,
		circlePlacemark49,
		circlePlacemark50,
		circlePlacemark51,
		circlePlacemark52,
		circlePlacemark53,
		circlePlacemark54,
		circlePlacemark55,
		circlePlacemark56,
		circlePlacemark57,
		circlePlacemark58,
		circlePlacemark59,
		circlePlacemark60,
		circlePlacemark61,
		circlePlacemark62,
		circlePlacemark63,
		circlePlacemark64,
		circlePlacemark65,
		circlePlacemark66,
		circlePlacemark67,
		circlePlacemark68,
		circlePlacemark69,
		circlePlacemark70,
		circlePlacemark71,
		circlePlacemark72,
		circlePlacemark73,
		circlePlacemark74,
		circlePlacemark75,
		circlePlacemark76,
		circlePlacemark77,
		circlePlacemark78,
		circlePlacemark79,
		circlePlacemark80,
		circlePlacemark81,
		circlePlacemark82,
		circlePlacemark83,
		circlePlacemark84,
		circlePlacemark85,
		circlePlacemark86,
		circlePlacemark87,
		circlePlacemark88,
		circlePlacemark89,
		circlePlacemark90,
		circlePlacemark91,
		circlePlacemark92,
		circlePlacemark93,
		circlePlacemark94,
		circlePlacemark95,
		circlePlacemark96,
		circlePlacemark97,
		circlePlacemark98,
		circlePlacemark99,
		circlePlacemark100,
		circlePlacemark101,
		circlePlacemark102,
		circlePlacemark103,
		circlePlacemark104,
		circlePlacemark105,
		circlePlacemark106,
		circlePlacemark107,
		circlePlacemark108,
		circlePlacemark109,
		circlePlacemark110,
		circlePlacemark111,
		circlePlacemark112,
		circlePlacemark113,
		circlePlacemark114,
		circlePlacemark115,
		circlePlacemark116,
		circlePlacemark117,
		circlePlacemark118,
		circlePlacemark119,
		circlePlacemark120,
		circlePlacemark121,
		circlePlacemark122,
		circlePlacemark123,
		circlePlacemark124,
		circlePlacemark125,
		circlePlacemark126,
		circlePlacemark127,
		circlePlacemark128,
		circlePlacemark129,
		circlePlacemark130,
		circlePlacemark131,
		circlePlacemark132,
		circlePlacemark133,
		circlePlacemark134,
		circlePlacemark135,
		circlePlacemark136,
		circlePlacemark137,
		circlePlacemark138,
		circlePlacemark139,
		circlePlacemark140,
		circlePlacemark141,
		circlePlacemark142,
		circlePlacemark143,
		circlePlacemark144,
		circlePlacemark145,
		circlePlacemark146,
		circlePlacemark147,
		circlePlacemark148,
		circlePlacemark149,
		circlePlacemark150,
		circlePlacemark151,
		circlePlacemark152,
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
	ymaps.ready(checkState);
}
