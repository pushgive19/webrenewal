// const storeList = document.querySelectorAll(".store__list");
// const storeTitle = document.querySelector(".store__name");


 //첫 페이지의 첫 item title 색상 bg 변경(초기화);
// const storeItems = storeList[0].querySelectorAll(".store__item");
// const activeItem = storeItems[0].querySelector(".store__name");
// const activeStore = storeItems[0];
// activeItem.style.color = "#d0101b";
// activeStore.style.backgroundColor = "#f9f9f9";
// console.dir(activeStore.style);

// function handleClick(e){
//  const parent  = e.srcElement;
// console.log(parent);
// }
// window.parent
// storeItems.forEach(function(){
 // this.addEventListener("click", handleClick);
//  function loadSuccess(loaction){
//   const nowLat = loaction.coords.latitude;
//   const nowlon = loaction.coords.longitude;
//  }
//  function loadFail(){
//   alert("위치 정보를 가져오는데 실패했습니다.")
//  }
// navigator.geolocation.getCurrentPosition(loadSuccess, loadFail);
// }
// init();

// map set
let lat, lon, getData, object ={};
// const object = { array: "data1", flue: [1, 2, 3,]}
// console.log(object)
// localStorage.setItem("data", JSON.stringify(object));

function success(data){
 getData = data.coords;
 lat = getData.latitude;
 lon = getData.longitude;
 
 object = {lat, lon};
 showMap(lat, lon);
 localStorage.setItem("location",JSON.stringify(object));
 
 const load = localStorage.getItem("location")
}
function fail(){
 alert("위치 정보를 가져오는데 실패했습니다.");
}
function showMap(lat, lon){
 var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
              var options = {
                //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
                level: 6, //지도의 레벨(확대, 축소 정도)
              };

              var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
              // 마커가 표시될 위치입니다
              var positions = [
                {
                  title: "미금점",
                  latlng: new kakao.maps.LatLng(37.3517227, 127.113267),
                },
                {
                  title: "서현점",
                  latlng: new kakao.maps.LatLng(37.3734023, 127.138024),
                },
                {
                  title: "야탑역점",
                  latlng: new kakao.maps.LatLng(37.4095635, 127.126805),
                },
                {
                  title: "야탑점",
                  latlng: new kakao.maps.LatLng(37.4051344, 127.123093),
                },
                {
                  title: "오리점",
                  latlng: new kakao.maps.LatLng(37.3377052, 127.110662),
                },
                {
                  title: "이매점",
                  latlng: new kakao.maps.LatLng(37.3949954, 127.125607),
                },
                {
                  title: "중탑점",
                  latlng: new kakao.maps.LatLng(37.412727, 127.134232),
                },
              ];
              // 마커를 생성합니다

              // 마커가 지도 위에 표시되도록 설정합니다

              var imageSrc = "../images/icon_map_point.png",
                imageSize = new kakao.maps.Size(43, 49); // 마커이미지의 크기입니다

              // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
              var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
              // markerPosition = new kakao.maps.LatLng(Y, X); // 마커가 표시될 위치입니다

              // 마커를 생성합니다
              for (let i = 0; i < positions.length; i++) {
                var marker = new kakao.maps.Marker({
                  map: map,
                  position: positions[i].latlng,
                  title: positions[i].title,
                  image: markerImage, // 마커이미지 설정
                });
              }

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);
}
function init(){
 const loadedData = JSON.parse(localStorage.getItem("location"));
 if(loadedData){
  showMap(loadedData.lat, loadedData.lon);
 }else{
  navigator.geolocation.getCurrentPosition(success, fail);
 }
 
}
init();