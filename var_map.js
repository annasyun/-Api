var map;
// var button = document.getElementById('map_button');
// button.addEventListener('click', changeCenter);

function initMap() {
    // 오름 공공 api위도
    const url =
        'https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=vPmNwu%2BqIeypYGpeZJGxs%2FCAizObaMncwiFhwc9fgkwzMPzPvLBJZ8aKR%2FDxaS0BpTgvXoEALSiPKjQeCWFk3w%3D%3D';

    fetch(url)
        .then((res) => res.json())
        .then((myJson) => myJson.data)
        .then((data) => {
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: { lat: 33.3616819, lng: 126.5291548 },
            });

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].위도);
                console.log(data[i].경도);

                const loca = {
                    lat: Number(data[i].위도),
                    lng: Number(data[i].경도),
                };

                new google.maps.Marker({
                    position: loca,
                    map: map,
                });
            }
        });
}
