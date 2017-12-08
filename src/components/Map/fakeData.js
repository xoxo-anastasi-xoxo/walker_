const TOTAL_COUNT = 5;

export const susolvkaCoords = { lat: 55.756429, lng: 37.607753 };

export const markersData1 = [...Array(TOTAL_COUNT)]
  .fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat:
      susolvkaCoords.lat +
      0.01 *
        index *
        Math.sin(30 * Math.PI * index / 180) *
        Math.cos(50 * Math.PI * index / 180) +
      Math.sin(5 * index / 180),
    lng:
      susolvkaCoords.lng +
      0.01 *
        index *
        Math.cos(70 + 23 * Math.PI * index / 180) *
        Math.cos(50 * Math.PI * index / 180) +
      Math.sin(5 * index / 180),
  }));

export const markersData2 = [...Array(TOTAL_COUNT)]
  .fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index + 50,
    lat:
    63 +
    0.01 *
    index *
    Math.sin(30 * Math.PI * index / 180) *
    Math.cos(50 * Math.PI * index / 180) +
    Math.sin(5 * index / 180),
    lng:
    46 +
    0.01 *
    index *
    Math.cos(70 + 23 * Math.PI * index / 180) *
    Math.cos(50 * Math.PI * index / 180) +
    Math.sin(5 * index / 180),
  }));
export const markersData3 = [...Array(TOTAL_COUNT)]
  .fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index + 100,
    lat:
    55 +
    0.01 *
    index *
    Math.sin(30 * Math.PI * index / 180) *
    Math.cos(50 * Math.PI * index / 180) +
    Math.sin(5 * index / 180),
    lng:
    55 +
    0.01 *
    index *
    Math.cos(70 + 23 * Math.PI * index / 180) *
    Math.cos(50 * Math.PI * index / 280) +
    Math.sin(5 * index / 180),
  }));

export const markersData4 = [...Array(TOTAL_COUNT)]
  .fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index + 150,
    lat:
    59 +
    0.01 *
    index *
    Math.sin(30 * Math.PI * index / 380) *
    Math.cos(50 * Math.PI * index / 180) +
    Math.sin(5 * index / 180),
    lng:
    79 +
    0.01 *
    index *
    Math.cos(70 + 23 * Math.PI * index / 180) *
    Math.cos(50 * Math.PI * index / 280) +
    Math.sin(5 * index / 180),
  }));
export const markersData = markersData1.concat(markersData2, markersData3, markersData4);
