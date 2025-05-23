ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.885988, 39.28],
            zoom: 13,
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
            coordinates: [44.881991, 39.387297]
        },
            // Свойства.
        properties: {
		hintContent: 'Теучежская поликлиника<br/>Взрослое население<br/>ул. Карницкого, 1',
		balloonContentBody: [
            '<strong>Теучежская поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'ул. Карницкого, 1</strong>',
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
            coordinates: [44.881621, 39.387545]
        },
            // Свойства.
        properties: {
		hintContent: 'Теучежская поликлиника<br/>Детское население<br/>ул. Карницкого, 1',
		balloonContentBody: [
            '<strong>Теучежская поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'ул. Карницкого, 1</strong>',
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
            coordinates: [44.875919, 39.188471]
        },
            // Свойства.
        properties: {
		hintContent: 'Адыгейская поликлиника<br/>Взрослое население<br/>ул. Пролетарская, 4',
		balloonContentBody: [
            '<strong>Адыгейская поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'ул. Пролетарская, 4</strong>',
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
            coordinates: [44.875917, 39.189293]
        },
            // Свойства.
        properties: {
		hintContent: 'Адыгейская поликлиника<br/>Детское население<br/>ул. Пролетарская, 4',
		balloonContentBody: [
            '<strong>Адыгейская поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'ул. Пролетарская, 4</strong>',
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

						[44.895348,39.164466999999995],[44.895936,39.165327],[44.896378999999996,39.166529],[44.89461,39.168442999999996],[44.894144999999995,39.169312],[44.893930999999995,39.170729],[44.893983999999996,39.172723999999995],[44.900596,39.197866999999995],[44.901285,39.203527],[44.903161999999995,39.222961999999995],[44.905511999999995,39.235558999999995],[44.905283999999995,39.235652],[44.905544,39.236716],[44.903963999999995,39.23748],[44.903571,39.246378],[44.884366,39.245598],[44.884218999999995,39.243638],[44.882933,39.241842999999996],[44.882602999999996,39.240955],[44.881943,39.240016],[44.879594,39.239244],[44.878080999999995,39.240632],[44.877547,39.240674999999996],[44.876891,39.240030999999995],[44.876585999999996,39.238036],[44.875395999999995,39.235203],[44.875304,39.233895],[44.875074999999995,39.233079],[44.874618,39.232521],[44.873855,39.232231999999996],[44.873129999999996,39.230955],[44.871649999999995,39.230149999999995],[44.870146999999996,39.228111999999996],[44.869761,39.228164],[44.869208,39.228667],[44.86813,39.228608],[44.86772,39.229129],[44.867824999999996,39.230288],[44.868376,39.231553999999996],[44.866932,39.232889],[44.867632,39.236520999999996],[44.866194,39.238205],[44.866049,39.238226999999995],[44.865137,39.236424],[44.863661,39.234729],[44.862562,39.234117999999995],[44.862383,39.233807],[44.862455,39.232841],[44.86199,39.232734],[44.861044,39.233731],[44.861256999999995,39.235577],[44.861166999999995,39.235848],[44.85988,39.236943],[44.859598999999996,39.237415],[44.859229,39.238755999999995],[44.858767,39.238974999999996],[44.857793,39.23827],[44.855809,39.239565],[44.855441,39.240317],[44.854409,39.240068],[44.853916999999996,39.240255],[44.852481999999995,39.239732],[44.852298999999995,39.239156],[44.852439,39.238549],[44.853170999999996,39.238419],[44.853432999999995,39.235580999999996],[44.853936999999995,39.233393],[44.853823,39.232791999999996],[44.852742,39.230353],[44.852247999999996,39.229855],[44.851579,39.230067],[44.851267,39.229822],[44.847876,39.222671999999996],[44.847573,39.222389],[44.846247,39.222],[44.84637,39.220831],[44.847232999999996,39.219172],[44.847255,39.21884],[44.846401,39.21678],[44.846202,39.216758],[44.84608,39.217349],[44.846584,39.218829],[44.845346,39.220313],[44.845116999999995,39.220409],[44.843208999999995,39.219508],[44.843219999999995,39.217402],[44.842983,39.216175],[44.842413,39.215036],[44.841063,39.21368],[44.84046,39.212598],[44.830611999999995,39.221925],[44.827580999999995,39.224553],[44.826769999999996,39.225833],[44.82573,39.225888],[44.825472,39.225794],[44.825528999999996,39.225289],[44.825085,39.225353],[44.826118,39.2178],[44.826645,39.215464],[44.826679999999996,39.213429999999995],[44.826848999999996,39.213375],[44.826943,39.211527],[44.828373,39.20568],[44.828738,39.203292],[44.829419,39.196121999999995],[44.831030999999996,39.185202],[44.834509999999995,39.184861999999995],[44.838811,39.185037],[44.854557,39.184653],[44.856336999999996,39.190377],[44.857093,39.190262],[44.857941,39.189764],[44.858838,39.188521],[44.859873,39.186614],[44.860281,39.186572999999996],[44.861421,39.187056],[44.862379,39.186313],[44.862901,39.188213999999995],[44.864292,39.191748],[44.865528,39.190687],[44.869679999999995,39.18587],[44.871275,39.18437],[44.877116,39.180006],[44.876321,39.177928],[44.875634,39.178293],[44.873774,39.173637],[44.875152,39.171971],[44.877233,39.175128],[44.878896,39.178607],[44.886782,39.172188],[44.889053,39.169891],[44.892033999999995,39.166430999999996],[44.894704999999995,39.164567]


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
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.969218,39.063198],[44.973524,39.072265],[44.975656,39.06988],[44.978654,39.075814],[44.979824,39.076191],[44.984113,39.074363],[44.988664,39.077996],[44.98876,39.079861],[44.986806,39.086203999999995],[44.988147999999995,39.099126],[44.98939,39.101999],[44.995802999999995,39.110413],[44.998419,39.116451999999995],[44.996232,39.124528999999995],[44.996116,39.128381999999995],[44.998953,39.139179],[44.994068999999996,39.149294],[44.993925999999995,39.163153],[44.989732,39.179252999999996],[44.994975,39.190536],[44.999029,39.195949999999996],[45.000775,39.201712],[44.998424,39.206421],[44.989551999999996,39.216124],[44.989337,39.222491],[44.990564,39.223194],[45.003183,39.222339999999996],[45.008105,39.223317],[45.012904999999996,39.225538],[45.018093,39.230787],[45.017975,39.235178],[45.016276999999995,39.239267],[45.01504,39.239278999999996],[45.013141999999995,39.237457],[45.012063999999995,39.234828],[45.010070999999996,39.232794999999996],[45.002038999999996,39.25736],[45.003513,39.262346],[45.005108,39.264126999999995],[45.012640999999995,39.264721],[45.015108999999995,39.263549],[45.019799,39.264396999999995],[45.028313999999995,39.269107999999996],[45.029652,39.271678],[45.030682999999996,39.274132],[45.028757,39.276137999999996],[45.024494999999995,39.27307],[45.019228,39.272636999999996],[45.017007,39.27502],[45.015961999999995,39.280049],[45.016683,39.286671],[45.017564,39.288720999999995],[45.030045,39.301856],[45.029616,39.313234],[45.018048,39.320287],[45.014768,39.327279],[45.009403,39.329426],[45.006181,39.336392],[45.001869,39.342448999999995],[45.001673,39.345954],[45.003263,39.355959],[45.006229,39.358155],[45.008855999999994,39.36479],[45.0135,39.365494],[45.014967999999996,39.367014999999995],[45.015944,39.370232],[45.014902,39.373819999999995],[45.013563999999995,39.375099],[45.01235,39.374792],[45.010380999999995,39.369552999999996],[45.006842,39.367683],[45.005559999999996,39.370622999999995],[45.005995999999996,39.380344],[45.004598,39.383613],[44.994377,39.387429999999995],[44.992377999999995,39.388816],[44.990682,39.392072999999996],[44.991738999999995,39.398785],[44.993162,39.400735999999995],[44.995754,39.399663],[45.000294,39.393902],[45.001614,39.393343],[45.005533,39.394418],[45.006068,39.395212],[45.005029,39.397833],[45.005728999999995,39.401266],[45.009471,39.40571],[45.010642999999995,39.408843],[45.009851,39.410838],[45.008358,39.411381999999996],[45.005637,39.408249],[45.001141999999994,39.405916],[44.997952,39.40649],[44.998571,39.40988],[44.997049999999994,39.415633],[44.997859999999996,39.415952999999995],[44.999524,39.41316],[45.001287999999995,39.413458],[45.004441,39.421113999999996],[45.00354,39.427684],[45.004916,39.429465],[45.007839999999995,39.428778],[45.008328999999996,39.43078],[45.006786999999996,39.433679999999995],[45.004439,39.435798],[45.003661,39.44066],[45.001557,39.438558],[44.999932,39.443391],[44.997282999999996,39.44742],[44.993716,39.448938],[44.989841,39.447232],[44.989087,39.451191],[44.99133,39.457028],[44.999266,39.458444],[45.001013,39.459956],[45.001306,39.461861],[44.998675999999996,39.461791],[44.996693,39.463899],[44.995106,39.463846],[44.993708999999996,39.465852],[44.990795,39.467074],[44.989875,39.470779],[44.990390999999995,39.47391],[44.987654,39.476468],[44.986360999999995,39.480861999999995],[44.987145,39.484443999999996],[44.989495999999995,39.484184],[44.990370999999996,39.484988],[44.99017,39.485851],[44.988125,39.486511],[44.984924,39.491318],[44.982879999999994,39.491858],[44.980168,39.487561],[44.97446,39.496294],[44.980565,39.502734],[44.979088,39.506218],[44.982932,39.50467],[44.984286999999995,39.508283],[44.987657,39.510605999999996],[44.987255,39.518733],[44.985698,39.519507],[44.984151,39.518087],[44.983613,39.516022],[44.984086,39.512411],[44.983174999999996,39.511635999999996],[44.982532,39.512539],[44.982133999999995,39.519763999999995],[44.979569,39.523002999999996],[44.978209,39.518859],[44.976662,39.51744],[44.976048,39.511506],[44.973591,39.509442],[44.972117,39.51202],[44.971295999999995,39.511891999999996],[44.969569,39.504569],[44.96799,39.50392],[44.967658,39.507892999999996],[44.966460999999995,39.509955999999995],[44.967451999999994,39.513309],[44.967161999999995,39.516662],[44.964000999999996,39.522563999999996],[44.961552,39.524322],[44.962140999999995,39.535488],[44.956193,39.53729],[44.952123,39.547731999999996],[44.949377,39.548632],[44.946526999999996,39.55211],[44.944514,39.552882],[44.944137,39.555073],[44.944764,39.55791],[44.943081,39.565514],[44.94209,39.562677],[44.939256,39.560483999999995],[44.934194999999995,39.567567],[44.93392,39.570145],[44.935919,39.572466999999996],[44.93765,39.573372],[44.941126,39.572860999999996],[44.941665,39.574538],[44.938635999999995,39.577239999999996],[44.935435999999996,39.577622],[44.933429,39.57731],[44.931981,39.574267],[44.929584999999996,39.575683],[44.926868999999996,39.573229],[44.925793,39.573702999999995],[44.923446,39.577224],[44.922725,39.579845],[44.92333,39.580601],[44.926097,39.579423],[44.928411999999994,39.58128],[44.926992,39.585086],[44.923795,39.584694],[44.924321,39.589205],[44.923289,39.594229999999996],[44.9221,39.594487],[44.919281999999995,39.591775],[44.91597,39.596021],[44.915306,39.600659],[44.912853,39.597950999999995],[44.911021,39.59872],[44.910990999999996,39.604518],[44.909155,39.60606],[44.908863,39.609539],[44.907288,39.613400999999996],[44.907464999999995,39.614560999999995],[44.909378,39.615466999999995],[44.909276,39.617526999999995],[44.908176,39.618169],[44.905809,39.616617999999995],[44.903774,39.620995],[44.903475,39.625631999999996],[44.902739,39.62666],[44.899645,39.624206],[44.898347,39.627552],[44.895787999999996,39.627804],[44.895312999999994,39.631153],[44.897583999999995,39.633347],[44.896938,39.634634],[44.894923999999996,39.635145],[44.896457999999996,39.638756],[44.894191,39.643305],[44.890308,39.643764],[44.887831,39.645432],[44.886292,39.640678],[44.883873,39.636998],[44.878595,39.635743],[44.876850999999995,39.640564],[44.874874,39.642179999999996],[44.874297999999996,39.647071],[44.874905999999996,39.652738],[44.87043,39.65247],[44.869245,39.651821999999996],[44.868888,39.650276999999996],[44.869535,39.649119],[44.871821999999995,39.64861],[44.870556,39.646159999999995],[44.871218,39.642429],[44.870216,39.641783],[44.868919,39.644869],[44.868002999999995,39.645253],[44.867748,39.642033999999995],[44.865559,39.64029],[44.859897,39.617957],[44.856831,39.616965],[44.855872,39.615029],[44.854163,39.613993],[44.853192,39.609266999999996],[44.851721,39.607028],[44.849522,39.606815],[44.847173,39.608208],[44.846213,39.607586],[44.847152,39.603606],[44.848468,39.602163999999995],[44.845887999999995,39.595134],[44.844753999999995,39.594454],[44.836653,39.558015999999995],[44.832817999999996,39.559512999999995],[44.832265,39.561440999999995],[44.830709999999996,39.562734],[44.829927,39.568025999999996],[44.827799,39.568895],[44.821422,39.566086],[44.819308,39.566764],[44.815768,39.564645],[44.812416999999996,39.566001],[44.80643,39.559242],[44.820468999999996,39.48316],[44.819948,39.482336],[44.81883,39.483734999999996],[44.817223999999996,39.483112],[44.817980999999996,39.480837],[44.81547,39.478381],[44.814008,39.482907],[44.810521,39.481097999999996],[44.810693,39.484739],[44.809529,39.48663],[44.807975,39.48517],[44.806571999999996,39.485457],[44.807383,39.484359],[44.806934999999996,39.483447],[44.805051,39.48502],[44.804314,39.4846],[44.805076,39.481228],[44.811639,39.470483],[44.80625,39.460173999999995],[44.81719,39.45704],[44.817433,39.456016999999996],[44.816596999999994,39.416821999999996],[44.812979,39.391073],[44.812345,39.378847],[44.812978,39.375929],[44.811551,39.372993],[44.809202,39.372620999999995],[44.808363,39.374072999999996],[44.807986,39.373086],[44.806087999999995,39.372855],[44.807888999999996,39.371328999999996],[44.808046,39.367726999999995],[44.808679,39.366382],[44.809684999999995,39.366313999999996],[44.809399,39.364126999999996],[44.811012,39.361866],[44.811467,39.354313],[44.816365,39.353595999999996],[44.821076,39.337154999999996],[44.825424,39.306106],[44.826206,39.285952],[44.82541,39.253333999999995],[44.824137,39.254191999999996],[44.823158,39.253631],[44.822868,39.25024],[44.820997999999996,39.247353],[44.823772,39.240535],[44.823111999999995,39.239339],[44.825085,39.225353],[44.826769999999996,39.225833],[44.84046,39.212598],[44.842983,39.216175],[44.843208999999995,39.219508],[44.845346,39.220313],[44.846584,39.218829],[44.846401,39.21678],[44.847255,39.21884],[44.846247,39.222],[44.847876,39.222671999999996],[44.851267,39.229822],[44.852742,39.230353],[44.853823,39.232791999999996],[44.853170999999996,39.238419],[44.852298999999995,39.239156],[44.853916999999996,39.240255],[44.855441,39.240317],[44.857793,39.23827],[44.859229,39.238755999999995],[44.861166999999995,39.235848],[44.861044,39.233731],[44.86199,39.232734],[44.866194,39.238205],[44.867632,39.236520999999996],[44.866932,39.232889],[44.868376,39.231553999999996],[44.86772,39.229129],[44.870146999999996,39.228111999999996],[44.875074999999995,39.233079],[44.876891,39.240030999999995],[44.878080999999995,39.240632],[44.879594,39.239244],[44.881943,39.240016],[44.884218999999995,39.243638],[44.884366,39.245598],[44.903571,39.246378],[44.903963999999995,39.23748],[44.905544,39.236716],[44.905511999999995,39.235558999999995],[44.903161999999995,39.222961999999995],[44.900596,39.197866999999995],[44.893983999999996,39.172723999999995],[44.894144999999995,39.169312],[44.896378999999996,39.166529],[44.895348,39.164466999999995],[44.892033999999995,39.166430999999996],[44.886782,39.172188],[44.878896,39.178607],[44.875152,39.171971],[44.873774,39.173637],[44.877116,39.180006],[44.871275,39.18437],[44.864292,39.191748],[44.862379,39.186313],[44.859873,39.186614],[44.857941,39.189764],[44.856336999999996,39.190377],[44.854557,39.184653],[44.831030999999996,39.185202],[44.833175999999995,39.168451],[44.837475999999995,39.16804],[44.840503,39.156535999999996],[44.841454,39.15246],[44.840855,39.149122999999996],[44.841336,39.147171],[44.839324999999995,39.146892],[44.839416,39.14275],[44.841598999999995,39.142427999999995],[44.842667999999996,39.145669],[44.843430999999995,39.145239],[44.844041999999995,39.146547999999996],[44.847034,39.145948],[44.849049,39.146719999999995],[44.84966,39.148607999999996],[44.853688999999996,39.148779999999995],[44.851963999999995,39.143512],[44.852917999999995,39.141452],[44.851865,39.138588],[44.851804,39.133899],[44.848675,39.133587999999996],[44.847248,39.131935999999996],[44.846759,39.124812],[44.860037999999996,39.125498],[44.863257999999995,39.128309],[44.864585999999996,39.128417],[44.867852,39.125262],[44.86985,39.12052],[44.870028999999995,39.122057],[44.872274999999995,39.119904999999996],[44.872022,39.121663999999996],[44.873329,39.123047],[44.879645,39.117747],[44.882411999999995,39.113327999999996],[44.884512,39.116883],[44.884859,39.119031],[44.886488,39.119282],[44.888878,39.113735999999996],[44.892444,39.108342],[44.895376,39.109170999999996],[44.905752,39.102226],[44.909244,39.110732999999996],[44.908406,39.112713],[44.908024999999995,39.12634],[44.913971,39.125949],[44.92003,39.131979],[44.917946,39.114135],[44.919252,39.111990999999996],[44.945488999999995,39.106424],[44.946169,39.107413],[44.943656999999995,39.081987],[44.946791999999995,39.088333999999996],[44.9452,39.09597],[44.946424,39.101468],[44.958033,39.107099],[44.966122,39.103327],[44.963896999999996,39.096381],[44.967489,39.064907]


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
		myGeoObject1,
		myGeoObject2,
		myGeoObject3,
		myGeoObject4,
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
