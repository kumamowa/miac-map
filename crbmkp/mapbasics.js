ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.458598, 40.22],
            zoom: 11,
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
            coordinates: [44.509613, 40.179447]
        },
            // Свойства.
        properties: {
		hintContent: 'Поликлиника<br/>Взрослое население<br/>ул. Комсомольская, 14',
		balloonContentBody: [
            '<strong>Поликлиника',
			'<br/>',
			'Взрослое население',
			'<br/>',
			'ул. Комсомольская, 14</strong>',
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
            coordinates: [44.530472, 40.176756]
        },
            // Свойства.
        properties: {
		hintContent: 'Поликлиника<br/>Детское население<br/>ул. Танюкова, 14',
		balloonContentBody: [
            '<strong>Поликлиника',
			'<br/>',
			'Детское население',
			'<br/>',
			'ул. Танюкова, 14</strong>',
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
            coordinates: [44.310238, 40.196010]
        },
            // Свойства.
        properties: {
		hintContent: 'Каменномостская поликлиника<br/>Взрослое и детское население<br/>ул. Гагарина, 32В',
		balloonContentBody: [
            '<strong>Каменномостская поликлиника',
			'<br/>',
			'Взрослое и детское население',
			'<br/>',
			'ул. Гагарина, 32В</strong>',
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





		var gran = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.706278,39.920108],[44.711098,39.930065]
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




		var gran1 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.148765999999995,39.76181],[44.163508,39.764541],[44.169806,39.776292999999995],[44.176798999999995,39.769028999999996],[44.180324,39.768524],[44.180515,39.822887],[44.184318999999995,39.864895],[44.168042,39.877223],[44.163211,39.875628],[44.158625,39.880324],[44.148073,39.878028],[44.142374,39.885675],[44.124877999999995,39.895373],[44.117017999999995,39.920972],[44.111506999999996,39.929812999999996],[44.105168,39.935134],[44.099463,39.950154999999995],[44.102244999999996,39.963052],[44.104673,39.964662],[44.098039,39.970648],[44.095394999999996,39.970627],[44.091158,39.965219999999995],[44.088094999999996,39.967194],[44.085063999999996,39.972750999999995],[44.084444999999995,39.978888],[44.081970999999996,39.981334],[44.079094,39.980067999999996],[44.075938,39.989467],[44.081911,40.007127],[44.085082,40.010087999999996],[44.084602,40.014015],[44.094114,40.019337],[44.095845999999995,40.016933],[44.106421999999995,40.016096],[44.115280999999996,40.030601999999995],[44.125067,40.038996999999995],[44.136511,40.054629],[44.137530999999996,40.056945999999996],[44.129211999999995,40.062523],[44.122079,40.074432],[44.122071,40.07763],[44.125433,40.078799],[44.126422,40.085215],[44.123694,40.085505],[44.126044,40.091277],[44.132199,40.092841],[44.134997,40.086822999999995],[44.139168999999995,40.087241],[44.138717,40.08048],[44.14076,40.080341],[44.145621999999996,40.068819999999995],[44.154575,40.076547],[44.160951999999995,40.070526],[44.163292999999996,40.072936],[44.16972,40.072399],[44.174717,40.077954999999996],[44.178674,40.087621],[44.193335999999995,40.079164999999996],[44.196059999999996,40.080515999999996],[44.197472999999995,40.078976],[44.194835,40.078188999999995],[44.198676,40.075841],[44.221888,40.077207],[44.224878,40.067792],[44.22963,40.072156],[44.233309,40.071872],[44.251577,40.089554],[44.254095,40.077751],[44.261818,40.068233],[44.266920999999996,40.065306],[44.268682999999996,40.061173],[44.269825999999995,40.04342],[44.267643,40.032627999999995],[44.267069,40.010315],[44.261289999999995,39.989776],[44.273984999999996,39.977969],[44.274899,39.974323],[44.291197,39.974748],[44.293442,39.968408],[44.306452,39.966145999999995],[44.339434999999995,39.975072],[44.344876,39.966538],[44.348088,39.957826999999995],[44.348338999999996,39.946394],[44.340821,39.940534],[44.337402999999995,39.922112],[44.350981999999995,39.907516],[44.351728,39.896454],[44.347111999999996,39.879123],[44.338214,39.869958],[44.35338,39.844311],[44.396522,39.878963],[44.407121,39.863059],[44.414049999999996,39.862617],[44.432212,39.868521],[44.434112999999996,39.879615],[44.445420999999996,39.88075],[44.55504,39.884777],[44.555614999999996,39.872305],[44.591407,39.874041999999996],[44.591153999999996,39.883159],[44.589825999999995,39.883697999999995],[44.590489,39.929193999999995],[44.602871,39.932787],[44.609609999999996,39.926079],[44.615162999999995,39.935352],[44.607412,39.940238],[44.606789,39.944646999999996],[44.608964,39.948665999999996],[44.590286,39.981952],[44.598389,39.991662],[44.618263999999996,40.003208],[44.609992999999996,40.013348],[44.605962999999996,40.022701],[44.604976,40.026849999999996],[44.606539999999995,40.03365],[44.604707999999995,40.040772],[44.586807,40.052223999999995],[44.585172,40.068954999999995],[44.580236,40.074749],[44.582003,40.085071],[44.578889,40.097809],[44.570842,40.106759],[44.572897,40.116651],[44.575581,40.1162],[44.57588,40.118097999999996],[44.568405,40.123526999999996],[44.564411,40.123602],[44.565106,40.133694],[44.562979999999996,40.136288],[44.566461,40.13935],[44.56446,40.143553],[44.560131,40.146187999999995],[44.561824,40.153774],[44.563077,40.153725],[44.564304,40.164511999999995],[44.567333,40.168085999999995],[44.578975,40.149483],[44.606107,40.167640999999996],[44.610313999999995,40.156107],[44.615646,40.161027],[44.614031,40.141096999999995],[44.623695999999995,40.138807],[44.63053,40.1355],[44.629895999999995,40.133674],[44.646383,40.129874],[44.663092999999996,40.114360999999995],[44.673066,40.128699999999995],[44.695229,40.134809],[44.692397,40.123802999999995],[44.690296,40.125009999999996],[44.687097,40.116651999999995],[44.675453999999995,40.124098],[44.67158,40.120525],[44.672719,40.10615],[44.656492,40.089003],[44.666894,40.077877],[44.662966,40.072706],[44.678999,40.050416999999996],[44.68253,40.056076],[44.683994,40.054051],[44.687199,40.059912],[44.694328,40.05164],[44.702233,40.062514],[44.692032,40.076601],[44.683761999999994,40.065196],[44.677264,40.074219],[44.687200999999995,40.091221],[44.693988999999995,40.084931999999995],[44.703624,40.117515],[44.712132,40.112859],[44.7204,40.142268],[44.712284,40.147442],[44.726276999999996,40.197537],[44.731314999999995,40.200629],[44.744530999999995,40.195751],[44.744653,40.242219999999996],[44.746722999999996,40.253447],[44.726941,40.253268999999996],[44.726486,40.34579],[44.724072,40.345597],[44.722809999999996,40.348194],[44.721109999999996,40.346106999999996],[44.720608,40.348616],[44.717909,40.347214],[44.717081,40.343855],[44.714585,40.346967],[44.710598999999995,40.341781],[44.708701999999995,40.343685],[44.708497,40.366538999999996],[44.705377999999996,40.371947999999996],[44.702923999999996,40.372417],[44.701367,40.368359],[44.701266,40.370297],[44.6995,40.369597999999996],[44.700416999999995,40.367939],[44.696625,40.364656],[44.697883999999995,40.370852],[44.692243999999995,40.368314],[44.693062999999995,40.365949],[44.688610999999995,40.366505],[44.686561,40.370343999999996],[44.68795,40.373219999999996],[44.684425999999995,40.376906999999996],[44.680955,40.376346],[44.680454999999995,40.384451],[44.676212,40.382453],[44.678160999999996,40.388543999999996],[44.672533,40.390057],[44.671121,40.392534],[44.673541,40.39662],[44.675294,40.393285999999996],[44.676086,40.397738],[44.673051,40.401407],[44.673513,40.403983],[44.67111,40.404876],[44.668673999999996,40.400656],[44.667214,40.40171],[44.661314999999995,40.397572],[44.658873,40.398939],[44.659510999999995,40.40148],[44.654858999999995,40.401615],[44.653976,40.396401],[44.649795,40.395873],[44.647365,40.386354999999995],[44.642713,40.387406999999996],[44.635145,40.377041],[44.649364,40.350732],[44.645195,40.342326],[44.627536,40.339788999999996],[44.622402,40.343641999999996],[44.620335999999995,40.342863],[44.618356,40.348563],[44.614647,40.348482],[44.613616,40.351416],[44.60946,40.352793999999996],[44.603178,40.348453],[44.597362,40.354681],[44.579871999999995,40.341409],[44.572565999999995,40.340196],[44.573386,40.336326],[44.567564999999995,40.336434],[44.567521,40.34142],[44.557874999999996,40.342149],[44.557925,40.349655999999996],[44.547861999999995,40.349419],[44.548731,40.387442],[44.532277,40.396905],[44.535058,40.404618],[44.534569,40.414905],[44.532019,40.410934],[44.527414,40.410491],[44.523191,40.419461],[44.520500999999996,40.416875999999995],[44.51963,40.418721999999995],[44.51507,40.41786],[44.513282,40.424147],[44.512287,40.419866],[44.510653,40.420449999999995],[44.512083,40.41749],[44.509135,40.417401999999996],[44.508641999999995,40.415290999999996],[44.510489,40.414100999999995],[44.509184999999995,40.412104],[44.505651,40.41249],[44.505675,40.406603],[44.503153,40.410224],[44.499542,40.402653],[44.496111,40.400845],[44.494896,40.402885999999995],[44.492112,40.397220999999995],[44.48757,40.398195],[44.487701,40.393195999999996],[44.48497,40.393043999999996],[44.485552,40.390518],[44.482307,40.383798],[44.481038999999996,40.386103999999996],[44.479444,40.383569],[44.476600999999995,40.383818999999995],[44.478055999999995,40.385639],[44.476945,40.391258],[44.471678,40.388323],[44.471252,40.392691],[44.46734,40.393642],[44.466895,40.396178],[44.460640999999995,40.39693],[44.461917,40.398074],[44.460359,40.400256999999996],[44.458811,40.396924],[44.458652,40.40031],[44.455498,40.400866],[44.455967,40.404489],[44.453406,40.403197999999996],[44.451975,40.408545],[44.446842,40.409586],[44.443897,40.403814],[44.438410999999995,40.411282],[44.437951999999996,40.40891],[44.435204999999996,40.408629999999995],[44.43163,40.413692],[44.4296,40.411761999999996],[44.428546,40.415769999999995],[44.428031999999995,40.413598],[44.426989,40.415773],[44.42331,40.415217999999996],[44.42303,40.411985],[44.421622,40.434796999999996],[44.348579,40.462472],[44.315414999999994,40.483081],[44.305352,40.454629],[44.299175999999996,40.454122999999996],[44.285484,40.442384],[44.282759,40.436479],[44.280986999999996,40.423594],[44.247121,40.360177],[44.190953,40.396252],[44.184219,40.395029],[44.167412,40.406082999999995],[44.164142999999996,40.405788],[44.159686,40.399387999999995],[44.151824999999995,40.40332],[44.149725,40.410446],[44.140280999999995,40.405581999999995],[44.132715999999995,40.405651999999996],[44.128679,40.417021],[44.114083,40.429462],[44.114312999999996,40.432434],[44.10641,40.425072],[44.096484,40.426376],[44.073357,40.420107],[44.063848,40.412963999999995],[44.05208,40.429505],[44.036544,40.430903],[44.029328,40.439321],[44.016223,40.448644],[44.006789999999995,40.450904],[44.003326,40.457194],[43.999300999999996,40.457651999999996],[43.988109,40.467107999999996],[43.970977,40.471035],[43.967831,40.478756],[43.965125,40.480261999999996],[43.958203,40.474208999999995],[43.957485,40.453846],[43.951819,40.453264999999995],[43.947506999999995,40.448428],[43.942836,40.427212999999995],[43.942463,40.415555999999995],[43.937433,40.409092],[43.916615,40.407016999999996],[43.908634,40.402564999999996],[43.895043,40.402743],[43.881226999999996,40.420291],[43.872333,40.415352999999996],[43.869862999999995,40.407345],[43.867666,40.405896],[43.827287,40.39283],[43.820522,40.3807],[43.802001999999995,40.381972],[43.790931,40.372803999999995],[43.776931,40.370498999999995],[43.773235,40.365663],[43.774226,40.35489],[43.772389,40.346788],[43.777699999999996,40.323812],[43.782084,40.31948],[43.782256,40.305724999999995],[43.779216999999996,40.298716999999996],[43.770821999999995,40.294661],[43.762353,40.280190999999995],[43.760355,40.274454],[43.761666,40.264761],[43.759893999999996,40.261724],[43.76139,40.251874],[43.766574999999996,40.244965],[43.766971,40.240586],[43.775315,40.233615],[43.779253,40.217132],[43.792153,40.214369999999995],[43.800892,40.204691],[43.819665,40.207972],[43.820848999999995,40.203465],[43.824000999999996,40.200733],[43.834778,40.200063],[43.845403,40.18934],[43.854257,40.19166],[43.861182,40.197654],[43.867757999999995,40.195561],[43.872909,40.190495999999996],[43.873908,40.1844],[43.872184,40.180921],[43.871704,40.169481],[43.867877,40.162642999999996],[43.861371999999996,40.159749999999995],[43.857653,40.151759],[43.867644999999996,40.113098],[43.866868,40.104935999999995],[43.863966999999995,40.106119],[43.85926,40.102032],[43.856721,40.102861],[43.854683,40.099109],[43.849233999999996,40.099485],[43.845791,40.095462],[43.84614,40.088588],[43.849875,40.087246],[43.856207,40.075876],[43.862297,40.070263],[43.866704999999996,40.070237999999996],[43.867574,40.064982],[43.880199,40.044138],[43.880751,40.035176],[43.878867,40.027257999999996],[43.882526999999996,40.020072],[43.883457,40.013039],[43.885028,40.014252],[43.892087,40.008838],[43.891234,40.005897999999995],[43.897169999999996,40.003471999999995],[43.907795,39.991375999999995],[43.907768,39.987745],[43.912302,39.978598999999996],[43.919311,39.972908],[43.920294,39.968125],[43.923666,39.966318],[43.932804,39.953699],[43.942519999999995,39.949706],[43.947998,39.942827],[43.95021,39.944462],[43.955914,39.942958999999995],[43.958368,39.940605999999995],[43.958847,39.933191],[43.961392,39.92798],[43.964453999999996,39.925678],[43.968615,39.927264],[43.972466999999995,39.923207],[43.973802,39.908798999999995],[43.95361,39.902642],[43.939462999999996,39.912718],[43.933706,39.887862],[43.934998,39.88366],[43.931255,39.879587],[43.929928,39.873954999999995],[43.931114,39.870039999999996],[43.924186,39.851427],[43.924326,39.844159],[43.930934,39.824352],[43.933569,39.807792],[43.938856,39.804787],[43.942851,39.7983],[43.954549,39.790572999999995],[43.961718,39.777846],[43.98365,39.819161],[43.986301,39.817695],[43.987691,39.810406],[43.997245,39.796993],[44.010405,39.798998999999995],[44.017488,39.796786],[44.043060999999994,39.808510999999996],[44.065421,39.828448],[44.082274999999996,39.830476999999995],[44.100195,39.815290999999995],[44.122096,39.801494999999996],[44.127326,39.793847],[44.129562,39.776568],[44.136835999999995,39.773998]
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

						[44.459641,40.177702],[44.460043999999996,40.178934],[44.460684,40.178619],[44.46089,40.179446],[44.460507,40.179652999999995],[44.461718999999995,40.18369],[44.461309,40.183943],[44.461258,40.183768],[44.461211999999996,40.183492],[44.461195,40.183458],[44.461137,40.183419],[44.461099999999995,40.18342],[44.461065,40.18344],[44.460853,40.183723],[44.460789999999996,40.183764],[44.460749,40.183747],[44.460662,40.183654],[44.460494,40.183585],[44.460437,40.183547999999995],[44.460405,40.183499],[44.460386,40.183372],[44.460401999999995,40.183203999999996],[44.460569,40.182558],[44.460597,40.182417],[44.460628,40.182165],[44.460623999999996,40.182047999999995],[44.460578,40.181962999999996],[44.46051,40.181937999999995],[44.460381,40.181934999999996],[44.460263999999995,40.181892],[44.460052999999995,40.181683],[44.460018,40.181669],[44.459979,40.181667999999995],[44.459900999999995,40.181719],[44.459832999999996,40.181813],[44.459756,40.181971999999995],[44.459700999999995,40.182023],[44.459581,40.182005],[44.459405,40.181934],[44.45924,40.181823],[44.459109999999995,40.181692],[44.459032,40.181669],[44.458945,40.181681],[44.458679,40.181872999999996],[44.458577,40.181886999999996],[44.458509,40.181872],[44.458407,40.181802999999995],[44.458265999999995,40.181385999999996],[44.458208,40.181276],[44.45812,40.181180999999995],[44.458003,40.181127],[44.457912,40.181142],[44.457694,40.181353],[44.457606,40.181414],[44.457564999999995,40.181425999999995],[44.457481,40.181413],[44.457398,40.181486],[44.457361,40.181463],[44.457302999999996,40.181323],[44.457288,40.181177999999996],[44.457293,40.181098999999996],[44.457311999999995,40.181036999999996],[44.457482999999996,40.180833],[44.457535,40.180699],[44.457588,40.180251999999996],[44.457583,40.180057999999995],[44.457538,40.179928],[44.457481,40.179839],[44.457163,40.179514999999995],[44.457132,40.179445],[44.457097999999995,40.179213],[44.457062,40.179116],[44.457,40.179069999999996],[44.456894,40.179055],[44.456846999999996,40.179024],[44.456835,40.178978],[44.456837,40.178844],[44.45745,40.178638],[44.458059,40.178401]
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

		var gran3 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.447537,40.140892],[44.447741,40.140961],[44.44818,40.141779],[44.448738,40.142184],[44.449217,40.142253],[44.449678999999996,40.141926],[44.449915,40.141183999999996],[44.450323999999995,40.141478],[44.450286999999996,40.141898999999995],[44.450072999999996,40.142599],[44.450154,40.144421],[44.449994,40.144954999999996],[44.450271,40.145998],[44.450666999999996,40.146637],[44.450924,40.147341],[44.450871,40.147822999999995],[44.450685,40.14806],[44.450314999999996,40.147659999999995],[44.449200999999995,40.14848],[44.448854,40.148378],[44.448684,40.148482],[44.448764,40.148894],[44.448459,40.148944],[44.448325999999994,40.148522],[44.448049,40.14566],[44.447542,40.145871],[44.44732,40.145709],[44.447120999999996,40.145171999999995],[44.447191,40.144042999999996],[44.447041,40.143024],[44.44676,40.142294],[44.447026,40.141767],[44.447348,40.140961999999995]
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

		var gran4 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.476585,40.162233],[44.478449,40.168979],[44.468575,40.173805],[44.468450999999995,40.173262],[44.466972,40.173595],[44.464562,40.174606],[44.463378,40.169906999999995],[44.462736,40.17008],[44.462213,40.165155]

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

		var gran5 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.485955999999995,40.127950999999996],[44.486778,40.1286],[44.487331,40.128781],[44.487639,40.128265],[44.488792,40.12986],[44.494240999999995,40.134487],[44.494358,40.134706],[44.494538999999996,40.134693999999996],[44.495092,40.135216],[44.494566999999996,40.133828],[44.494783999999996,40.133272],[44.495017999999995,40.13319],[44.495239999999995,40.133395],[44.495446,40.13384],[44.496497,40.133668],[44.496770999999995,40.133464],[44.496919,40.133634],[44.497214,40.133008],[44.497609999999995,40.132683],[44.498162,40.13245],[44.498419999999996,40.132678],[44.499432,40.132397],[44.499367,40.132022],[44.499511,40.131513],[44.499114999999996,40.131],[44.499507,40.130612],[44.500506,40.131724999999996],[44.501059,40.131848],[44.501241,40.132802999999996],[44.501667,40.134015999999995],[44.498733,40.136672999999995],[44.498714,40.137954],[44.501628,40.137476],[44.502212,40.144106],[44.501228,40.144261],[44.498225,40.140564999999995],[44.496748,40.140595999999995],[44.496824,40.14197],[44.496265,40.142163],[44.496612,40.143105999999996],[44.494277,40.144687],[44.494146,40.145592],[44.492726999999995,40.146577],[44.492470999999995,40.146414],[44.49207,40.146698],[44.492802999999995,40.149387999999995],[44.49161,40.150036],[44.489947,40.14385],[44.483188999999996,40.147284],[44.482628999999996,40.144813],[44.4842,40.143997999999996],[44.483697,40.141351],[44.482752999999995,40.140749],[44.482062,40.140758],[44.481366,40.140879999999996],[44.480728,40.140716],[44.48012,40.140997999999996],[44.479611999999996,40.141794999999995],[44.47895,40.142365],[44.478739,40.141787],[44.479208,40.140879],[44.479247,40.140533999999995],[44.479324999999996,40.140314],[44.479580999999996,40.14009],[44.479625,40.13977],[44.479873999999995,40.139624],[44.480149999999995,40.139558],[44.480255,40.139199],[44.480450999999995,40.138996],[44.480623,40.138543999999996],[44.481556,40.137898],[44.481939999999994,40.137777],[44.485389,40.135965],[44.485400999999996,40.135325],[44.486312,40.135388999999996],[44.487472,40.135807],[44.48891,40.135613],[44.488921,40.135450999999996],[44.488436,40.1351],[44.487021,40.134433],[44.48655,40.133528],[44.485561,40.130856],[44.485271999999995,40.130522],[44.484586,40.128628],[44.485197,40.128464]
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

		var gran6 = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[

						[44.44974,40.158108999999996],[44.451816,40.159763],[44.454071,40.159734],[44.454225,40.162980999999995],[44.454294,40.163627999999996],[44.454632,40.165334],[44.455743,40.170052999999996],[44.458059,40.178401],[44.456837,40.178844],[44.456846999999996,40.179024],[44.457062,40.179116],[44.457163,40.179514999999995],[44.457481,40.179839],[44.457583,40.180057999999995],[44.457535,40.180699],[44.457311999999995,40.181036999999996],[44.457302999999996,40.181323],[44.457398,40.181486],[44.457606,40.181414],[44.457912,40.181142],[44.458003,40.181127],[44.458208,40.181276],[44.458407,40.181802999999995],[44.458509,40.181872],[44.458679,40.181872999999996],[44.459032,40.181669],[44.459405,40.181934],[44.459700999999995,40.182023],[44.459900999999995,40.181719],[44.460018,40.181669],[44.460263999999995,40.181892],[44.460578,40.181962999999996],[44.460628,40.182165],[44.460401999999995,40.183203999999996],[44.460405,40.183499],[44.460789999999996,40.183764],[44.461137,40.183419],[44.461211999999996,40.183492],[44.461309,40.183943],[44.454259,40.188266999999996],[44.453333,40.185264],[44.452543,40.185618],[44.452497,40.185462],[44.452419,40.185491999999996],[44.451761,40.185063],[44.451736,40.1847],[44.451634999999996,40.184273],[44.451436,40.180136999999995],[44.451526,40.178571999999996],[44.446463,40.177475],[44.445302999999996,40.177333999999995],[44.443943,40.177312],[44.441662,40.177459999999996],[44.441317999999995,40.170676],[44.438826999999996,40.170840999999996],[44.437978,40.170776],[44.437841,40.170539999999995],[44.437874,40.17023],[44.438032,40.169697],[44.438396999999995,40.169601],[44.438764,40.169407],[44.438941,40.168803],[44.439999,40.168558],[44.441621999999995,40.168614],[44.441933,40.168972],[44.442392,40.168824],[44.442741,40.168999],[44.443045999999995,40.169],[44.443360999999996,40.168822],[44.443529999999996,40.168627],[44.444153,40.168645999999995],[44.444230999999995,40.168946],[44.444525,40.169004],[44.444621,40.168867],[44.444734,40.169019999999996],[44.444904,40.169062],[44.445426999999995,40.168769999999995],[44.448304,40.168713],[44.448215999999995,40.162959],[44.446706,40.161878],[44.446681999999996,40.159856999999995],[44.448299999999996,40.1597],[44.448273,40.158192]

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
		myGeoObject1,
		myGeoObject2,
		myGeoObject3,
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
