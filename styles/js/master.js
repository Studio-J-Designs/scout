var cars = [
  {
    name: 'BMW R 1250 GS',
    id: 'a101',
    minPeople: 1,
    maxPeople: 1,
    minDay: 1,
    maxDay: 5,
    price: 109,
    petrol: 3.7,
    type: 'automatic',
    fuelType: 'petrol',
    safetyRating: '3 Stars',
    photo1: 'assets/images/motorcycle1.jpg',
    photo2: 'assets/images/motorcycle2.jpg',
    photo3: 'assets/images/motorcycle3.jpg',
    carDescription: 'The new BMW R 1250 GS has an increased engine capacity bringing you even better performance. Now pumping out a 136 hp and 105 IB-ft of torque, right through out the engine range. Wherever you go, in the city, on the motorway or offroad, the BMW R 1250 GS provides you incredible riding comfort.',
  },
  {
    name: 'Toyota Corolla',
    id: 'a102',
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    price: 129,
    petrol: 8.5,
    type: 'automatic',
    fuelType: 'petrol',
    safetyRating: '5 Stars',
    photo1: 'assets/images/smallCar1.jpg',
    photo2: 'assets/images/smallCar2.jpg',
    photo3: 'assets/images/smallCar3.jpg',
    carDescription: 'The Toyota Corolla, New Zealand’s market leading car for a quarter of a century with good reason: excellent handling on NZ roads, fantastic fuel economy and a smooth and comfortable ride for passengers are all Corolla hallmarks.',
  },
  {
    name: 'Hyundai Tucson',
    id: 'a103',
    minPeople: 1,
    maxPeople: 5,
    minDay: 3,
    maxDay: 10,
    price: 144,
    petrol: 9.7,
    type: 'automatic',
    fuelType: 'petrol',
    safetyRating: '4 Stars',
    photo1: 'assets/images/largeCar1.jpg',
    photo2: 'assets/images/largeCar2.jpg',
    photo3: 'assets/images/largeCar3.jpg',
    carDescription: 'Driving conditions are varied across New Zealand, so the Tucson offers a choice of three engine options to suit your needs. Choose from a 2.0 Litre MPi petrol engine, a 1.6 Litre Turbo GDi petrol engine or a 2.0 Litre R Series diesel engine. Each produces great performance, excellent fuel economy and low emissions.',
  },
  {
    name: 'ALPHA 4 M690',
    id: 'a104',
    minPeople: 2,
    maxPeople: 6,
    minDay: 2,
    maxDay: 15,
    price: 200,
    petrol: 17,
    type: 'automatic',
    fuelType: 'petrol',
    safetyRating: '4 Stars',
    photo1: 'assets/images/motorHome1.jpg',
    photo2: 'assets/images/motorHome2.jpg',
    photo3: 'assets/images/motorHome3.jpg',
    carDescription: 'If you\'re travelling in a larger group, or are a family who value a budget-friendly holiday alternative, then this is the motorhome for you. It offers 3 double beds, full kitchen facilities and a bathroom with shower and toilet. This vehicle is certified self-contained, making it ideal for freedom camping.',
  },
];

var petrol = [
  {
    name: 'Auckland',
    price: 2.25
  },
  {
    name: 'Christchurch',
    price: 2.30
  },
  {
    name: 'Dunedin',
    price: 2.30
  },
  {
    name: 'Nelson',
    price: 2.19
  },
  {
    name: 'Queenstown',
    price: 2.43
  },
  {
    name: 'Rotorua',
    price: 2.20
  },
  {
    name: 'Taupo',
    price: 2.11
  },
  {
    name: 'Wellington',
    price: 2.29
  },
];







function clearContent(){
    document.getElementById('contentArea').innerHTML = '';
    console.log('clear');
};

document.getElementById('contentArea').innerHTML
+= '<button onclick="findACar()" id="findACar" type="button"' +
 'class="btn btn-success basic-btn-fix find-a-car"> Find A Car </button>';

function findACar(){
  clearContent()
  document.getElementById('progressStep').innerHTML
  = '<div class="root">'
  + '   <div class="progressContainer">'
  + '        <ul class="progressbar">'
  + '          <li onclick="step1()" id="step1" class="current"> People </li>'
  + '          <li onclick="step2()" id="step2"> Days </li>'
  + '          <li onclick="step3()" id="step3"> Locations</li>'
  + '          <li onclick="step4()" id="step4"> Cars </li>'
  + '          <li onclick="step5()" id="step5"> Cost </li>'
  + '          <li onclick="step6()" id="step6"> End </li>'
  + '         </ul>'
  + '   </div>'
  + '</div>';

  content();

};


var displayedPage = 1;
var currentPage = 1;
var currentPageNumber = 1;
var previousPage = 0;
var previousPageNumber = 0;
var highestPage = 1


function next(){

if (highestPage <= displayedPage) {
      highestPage = highestPage + 1
      previousPageNumber = currentPageNumber;
      previousPage = '#step' + previousPageNumber;
      currentPageNumber = currentPageNumber + 1;
      currentPage = '#step' + currentPageNumber;
      displayedPage = currentPageNumber;
      console.log(displayedPage);
      console.log(currentPageNumber);

      $(previousPage).removeClass("current");
      $(previousPage).addClass("finished");
      $(currentPage).addClass("current");
      console.log('test');

      content();
} else {
  displayedPage = displayedPage + 1;
  content();
};


};

var people = 1;
var startDateCheck = 0;
var endDateCheck = 0;
var currentDate = 0;

var start, end, days, dayDiff, distance, startLocation, endLocation, selectedCar, currentCar, startPetrol, endPetrol, carPetrol, carRent, carCost, fullCost, carNext;


function content(){
  console.log(displayedPage);
  if (displayedPage === 1) {
    document.getElementById('contentArea').innerHTML
  = '<h1 class="heading-fix"> Please enter how many people will be traveling</h1>'
  +'<div class="moveSlider">'
  + '  <div class="sliderContainer">'
  + '  <div class="range-slider">'
  + '    <span id="rs-bullet" class="rs-label">1</span>'
  + '    <input id="rs-range-line"'
  + '    class="rs-range" type="range" value="0" min="0" max="5">'
  + '  </div>'
  + '  <div class="box-minmax">'
  + '    <span>1</span><span>6</span>'
  + '  </div>'
  + '  </div>'
  + '</div>'
  + '<button'
  + '  onclick="next()" '
  + '  id="next"'
  + 'type="button"'
  + 'class="btn btn-primary btn-fix">'
  + 'Next'
  + '</button>';

  var rangeSlider = document.getElementById("rs-range-line");
  var rangeBullet = document.getElementById("rs-bullet");

  rangeSlider.addEventListener("input", showSliderValue, false);

  function showSliderValue() {
    rangeBullet.innerHTML = (parseInt(rangeSlider.value) + 1);
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 478) + "px";
    people = (parseInt(rangeSlider.value) + 1);
  };

} else if ((displayedPage === 2) && (people === 1)) {
    console.log(people);
    document.getElementById('contentArea').innerHTML
  = '<h1 class="heading-fix"> Please enter your starting date and ending date</h1>'
  + '<div class="dateDiv"><label for="startDate" class="h3 white"> Starting Date </label>'
  + '<br><br>'
  + '        <input type="text" id="startDate" '
  + '        name="startDate" class="mr-5" autocomplete="off">'
  + '<br><br>'
  + '  <label for="endDate" class="h3 white"> Ending Date </label>'
  + '<br><br>'
  + '        <input type="text" id="endDate" '
  + '        name="endDate" autocomplete="off">'

  + '        <br/></div>'

  + '<button'
  + '  onclick="datePicked()" '
  + '  id="datePicked"'
  + 'type="button"'
  + 'class="btn btn-primary btn-fix">'
  + 'Confirm'
  + '</button>'

  + '       <div id="buttonArea"></div>';

  //date calculation with date pickers

$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 10 * msecsInADay);

      $("#endDate").datepicker( "option", "maxDate", enDate );

      startDateCheck = 1;

  }
});

$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: '+1d',
  onSelect: function(){
  endDateCheck = 1;
  }
});

} else if ((displayedPage === 2) && (people >= 3)) {
    console.log(people);
    document.getElementById('contentArea').innerHTML
  = '<h1 class="heading-fix"> Please enter your starting date and ending date</h1>'
  + '<div class="dateDiv"><label for="startDate" class="h3 white"> Starting Date </label>'
  + '<br><br>'
  + '        <input type="text" id="startDate" '
  + '        name="startDate" class="mr-5" autocomplete="off">'
  + '<br><br>'
  + '  <label for="endDate" class="h3 white"> Ending Date </label>'
  + '<br><br>'
  + '        <input type="text" id="endDate" '
  + '        name="endDate" autocomplete="off">'

  + '        <br/></div>'

  + '<button'
  + '  onclick="datePicked()" '
  + '  id="datePicked"'
  + 'type="button"'
  + 'class="btn btn-primary btn-fix">'
  + 'Confirm'
  + '</button>'

  + '       <div id="buttonArea"></div>';

  //date calculation with date pickers

$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

      $("#endDate").datepicker( "option", "maxDate", enDate );

      startDateCheck = 1;

  }
});

$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: '+2d',
  onSelect: function(){
  endDateCheck = 1;
  }
});

  } else if (displayedPage === 2){
      console.log(people);
      document.getElementById('contentArea').innerHTML
    = '<h1 class="heading-fix"> Please enter your starting date and ending date</h1>'
    + '<div class="dateDiv"><label for="startDate" class="h3 white"> Starting Date </label>'
    + '<br><br>'
    + '        <input type="text" id="startDate" '
    + '        name="startDate" class="mr-5" autocomplete="off">'
    + '<br><br>'
    + '  <label for="endDate" class="h3 white"> Ending Date </label>'
    + '<br><br>'
    + '        <input type="text" id="endDate" '
    + '        name="endDate" autocomplete="off">'

    + '        <br/></div>'

    + '<button'
    + '  onclick="datePicked()" '
    + '  id="datePicked"'
    + 'type="button"'
    + 'class="btn btn-primary btn-fix">'
    + 'Confirm'
    + '</button>'

    + '       <div id="buttonArea"></div>';

    //date calculation with date pickers

  $("#startDate").datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    minDate: new Date(),
    maxDate: '+1y',
    onSelect: function(date){

        var selectedDate = new Date(date);
        var msecsInADay = 86400000;
        var stDate = new Date(selectedDate.getTime() + msecsInADay);

       //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $("#endDate").datepicker( "option", "minDate", stDate );
        var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

        $("#endDate").datepicker( "option", "maxDate", enDate );

        startDateCheck = 1;

    }
  });



  $("#endDate").datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    minDate: '+1d',
    onSelect: function(){
    endDateCheck = 1;
    }
  });



    } else if (displayedPage === 3) {
    console.log(people);
    start = 0;
    end = 0;
    days = 0;

  //Find the number of days between dates
    start = $('#startDate').datepicker('getDate');
    console.log(start);
    end = $('#endDate').datepicker('getDate');
    console.log(end);
    days = (end - start)/1000/60/60/24;

  console.log(days);

  document.getElementById('contentArea').innerHTML
  = '<h1 class="heading-fix"> Please enter your start and end locations</h1>'
  + '      <div id="right-panel">'
  + '      <b>Start:</b>'
  + '      <br><br>'
  + '      <select id="start">'
  + '        <option value="Auckland">Auckland</option>'
  + '        <option value="Wellington">Wellington</option>'
  + '        <option value="Taupo">Taupo</option>'
  + '        <option value="Rotorua">Rotorua</option>'
  + '        <option value="Christchurch">Christchurch</option>'
  + '        <option value="Queenstown">Queenstown</option>'
  + '        <option value="Nelson">Nelson</option>'
  + '        <option value="Dunedin">Dunedin</option>'
  + '      </select>'
  + '      <br><br>'
  + '      <b>End:</b>'
  + '      <br><br>'
  + '      <select id="end">'
  + '        <option value="Auckland">Auckland</option>'
  + '        <option value="Wellington">Wellington</option>'
  + '        <option value="Taupo">Taupo</option>'
  + '        <option value="Rotorua">Rotorua</option>'
  + '        <option value="Christchurch">Christchurch</option>'
  + '        <option value="Queenstown">Queenstown</option>'
  + '        <option value="Nelson">Nelson</option>'
  + '        <option value="Dunedin">Dunedin</option>'
  + '      </select>'
  + '      <br>'
  + '        <button class="btn btn-primary btn-fix" id="submit"> Confirm </button>'
  + '      </div>'
  + '      <div id="directions-panel"></div>'
  + '      <br><br><br>'
  + '  <div id="map"></div>'

  + '       <div id="buttonArea"></div>';

  function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsRenderer = new google.maps.DirectionsRenderer;

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: -41.00, lng: 174}
        });

        directionsRenderer.setMap(map);

        document.getElementById('submit').addEventListener('click', function() {

        startLocation = document.getElementById('start').value;
        endLocation = document.getElementById('end').value;

        console.log(startLocation);
        console.log(endLocation);

        document.getElementById('buttonArea').innerHTML
        = '       <button'
        + '         onclick="next()" '
        + '         id="next"'
        + '       type="button"'
        + '       class="btn btn-primary btn-fix">'
        + '       Next'
        + '       </button>'



        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {

            console.log(response);

            directionsRenderer.setDirections(response);
            var route = response.routes[0];
            console.log(route);
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
              summaryPanel.innerHTML += route.legs[i].duration.text + '<br><br>';
              distance = route.legs[i].distance.text;
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      });
      }


initMap()

  } else if (displayedPage === 4) {
  console.log('people');
  console.log(people);
  console.log('days');
  console.log(days);
  console.log('startLocation');
  console.log(startLocation);
  console.log('endLocation');
  console.log(endLocation);
  console.log('cars');
  console.log(cars);
  clearContent();
  document.getElementById('contentArea').innerHTML
  = '<h1 class="heading-fix"> Please select the car you want.</h1><br><br>';
  id = 101;
  for (var i = 0; i < cars.length; i++){
  if ((cars[i].minDay <= days) && (cars[i].maxDay >= days) && (cars[i].minPeople <= people) && (cars[i].maxPeople >= people)) {
      displayCard(i);
      displayModal();
      }
      id++;
    }
  } else if (displayedPage === 5) {
    startPetrol = 0;
    endPetrol = 0;
    averagePetrol = 0;
    expectedPetrol = 0;
    for (var i = 0; i < petrol.length; i++) {
      if (startLocation === petrol[i].name) {
        startPetrol = petrol[i].price;
      };
      if (endLocation === petrol[i].name) {
        endPetrol = petrol[i].price;
      };
    };
    console.log('startPetrol');
    console.log(startPetrol);
    console.log('endPetrol');
    console.log(endPetrol);
    averagePetrol = ((startPetrol + endPetrol) / 2).toFixed(2);
    console.log('averagePetrol');
    console.log(averagePetrol);
    for (var i = 0; i < cars.length; i++) {
      if (cars[i].name === selectedCar) {
        expectedPetrol = ((parseInt(distance) / 100) * cars[i].petrol * averagePetrol).toFixed(2);
        carPetrol = cars[i].petrol;
        carRent = cars[i].price;
        carCost = carRent * days;
        fullCost = parseInt(expectedPetrol) + parseInt(carCost);
      }
    }
    console.log('expectedPetrol');
    console.log(expectedPetrol);


    document.getElementById('contentArea').innerHTML
    = '<h1 class="heading-fix"> Here is an estimate for how much the trip will cost you.</h1>'
    + '<div class="costForm"Total distance = '
    + distance
    + '<br>Litres per 100Km = '
    + carPetrol
    + '<br>Expected price of Petrol = $'
    + averagePetrol
    + '<br>Total price of petrol = $'
    + expectedPetrol
    + '<br><br>Booked for '
    + days
    + ' days'
    + '<br>Price of car per day = $'
    + carRent
    + '<br>Cost for renting car = $'
    + carCost
    + '<br><br>Total Expected Cost = $'
    + fullCost
    + '</div>'

    + '       <button'
    + '         onclick="next()" '
    + '         id="next"'
    + '       type="button"'
    + '       class="btn btn-primary btn-fix">'
    + '       Next'
    + '       </button>';
  } else {
    document.getElementById('contentArea').innerHTML
    = '<p class="thank-you">Thank you</p>'
  }
};



// function step1(){
//   if (highestPage >= 1) {
//     displayedPage = 1;
//     content()
//   };
// };
//
// function step2(){
//   if (highestPage >= 2) {
//     displayedPage = 2;
//     content()
//   };
// };
//
// function step3(){
//   if (highestPage >= 3) {
//     displayedPage = 3;
//     content()
//   };
// };
//
// function step4(){
//   if (highestPage >= 4) {
//     displayedPage = 4;
//     content()
//   };
// };
//
// function step5(){
//   if (highestPage >= 5) {
//     displayedPage = 5;
//     content()
//   };
// };
//
// function step6(){
//   if (highestPage >= 6) {
//     displayedPage = 6;
//     content()
//   };
// };

function datePicked(){
  if ((startDateCheck === 1) && (endDateCheck === 1)) {
    document.getElementById('buttonArea').innerHTML
    = '       <button'
    + '         onclick="next()" '
    + '         id="next"'
    + '       type="button"'
    + '       class="btn btn-primary btn-fix">'
    + '       Next'
    + '       </button>'
  }
}

// FUNCTION TO DISPLAY RESULTS CARD
function displayCard(i) {
  document.getElementById('contentArea').innerHTML
  +='<div id="a' + id.toString() + '" class="card mb-3 card-fix" style="max-width: 80%;">'
  + '  <div class="row no-gutters card-inner-fix">'
  + '    <div class="col-md-4">'
  + '       <img src="'
  + cars[i].photo1
  + '" class="card-img-top" alt="">'
  + '    </div>'
  + '    <div class="col-md-8">'
  + '      <div class="card-body">'
  + '        <h5 class="card-title">'
  + cars[i].name
  + '</h5>'
  + '        <p class="card-text"><small class="text-muted"> View Details </small></p>'
  + '      </div>'
  + '    </div>'
  + '  </div>'
  + '</div>'
};


// FUNCTION TO DISPLAY MODAL
function displayModal() {
  $('.card').on('click', function(){
    console.log(this.id);
    $('.myModal').show();
    $('#contentArea').hide();
    for (var i = 0; i < cars.length; i++){
      if (cars[i].id.trim() == this.id.trim()){
        console.log(cars[i].name);
        currentCar = cars[i].name
        document.getElementById('modalSection').innerHTML =
            '    <div class="myModal">' +
            '    <div class="modal-header">' +
            '      <h5 class="modal-title font-weight-bold modalHeader-fix" ' +
            'id="modalCarName">' + cars[i].name + '</h5>' +

            '      <button type="button" class="close" data-dismiss="modal" ' +
            'aria-label="Close">' +
            '        <span class="modalHeader-fix" aria-hidden="true">&times;</span>' +
            '      </button>' +
            '    </div>' +

            '<div id="carouselExampleControls" ' +
            'class="carousel slide carousel--car" data-ride="carousel">' +
            '      <div class="carousel-inner">' +
            '        <div class="carousel-item active">' +
            '          <img class="d-block w-100" src="' +
            cars[i].photo1 + '">' +
            '        </div>' +
            '        <div class="carousel-item">' +
            '          <img class="d-block w-100" src="' +
            cars[i].photo2 + '">' +
            '        </div>' +
            '        <div class="carousel-item">' +
            '          <img class="d-block w-100" src="' +
            cars[i].photo3 + '">' +
            '        </div>' +
            '      </div>' +
            '      <a class="carousel-control-prev" ' +
            'href="#carouselExampleControls" role="button" ' +
            'data-slide="prev">' +
            '        <span class="carousel-control-prev-icon" ' +
            'aria-hidden="true"></span>' +
            '        <span class="sr-only">Previous</span>' +
            '      </a>' +
            '      <a class="carousel-control-next" ' +
            'href="#carouselExampleControls" role="button" ' +
            'data-slide="next">' +
            '        <span class="carousel-control-next-icon" ' +
            'aria-hidden="true"></span>' +
            '        <span class="sr-only">Next</span>' +
            '      </a>' +
            '    </div>' +

            '    <div class="modal-body">' +

            '     <div class="container">' + '<div class="row" ' +
            'id="modalCarFacts"</div>' +

            '       <p class="card-text col-6"><i class="fas fa-cog"></i> ' +
            cars[i].type + '</p>' +
            '       <p class="card-text col-6 font-weight-bold">' +
            '<i class="fas fa-dollar-sign"></i> ' + cars[i].price + '/day' +
            '</p>' + '</div>' +

            '     <div class="row" id="modalCarFacts"</div>' +
            '<p class="card-text col-6"><i class="fas fa-bolt"></i> ' +
            cars[i].fuelType  + '</p><p class="card-text col-6">' +
            '<i class="fas fa-tachometer-alt"></i> ' +
            cars[i].safetyRating + '</p>' + '</div>' +

            '     <div class="row" id="modalCarFacts"</div>' +
            '       <p class="card-text col-6">' +
            '<i class="far fa-calendar-alt"></i> ' +
            cars[i].minDay + '-' + cars[i].maxDay + ' days</p>' +
            '       <p class="card-text col-6">' +
            '<i class="fas fa-user-friends"></i> ' + cars[i].maxPeople + ' seat(s)</p>' +
            '     </div></div>' +

            '       <p>' + cars[i].carDescription + '</p>' +

            '    </div>' +
            '    <div class="modal-footer">' +
            '<button id="selectCarButton" type="button" data-dismiss="modal"' +
            'class="btn btn-primary selectCarButton">Select this car</button>' + '    </div> </div>'
      }
    };
    $('.close').on('click', function(){
      $('.myModal').hide();
      $('#contentArea').show();
    });
    $('.selectCarButton').on('click', function(){
      for (var i = 0; i < cars.length; i++) {
        if (selectedCar === cars[i].name) {
          console.log(cars[i].id);
          $('#' + cars[i].id).removeClass("choosenCar");
        }
      }
      selectedCar = currentCar;
      console.log(selectedCar);
        for (var i = 0; i < cars.length; i++) {
          if (selectedCar === cars[i].name) {
            console.log(cars[i].id);
            $('#' + cars[i].id).addClass("choosenCar");
          }
        }
      $('.myModal').hide();
      $('#contentArea').show();
      if (carNext !== 1) {
        carNext = 1;
        document.getElementById('contentArea').innerHTML
        +='       <button'
        + '         onclick="next()" '
        + '         id="next"'
        + '       type="button"'
        + '       class="btn btn-primary btn-fix">'
        + '       Next'
        + '       </button>';
      };
      displayModal();
    });
  });
}
