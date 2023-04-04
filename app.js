const viewer = new Cesium.Viewer('cesiumContainer');

// Add terrain
viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
  url: Cesium.IonResource.fromAssetId(1),
});

// Add buildings
viewer.scene.primitives.add(Cesium.createOsmBuildings());

// Add weather information
const imageryLayers = viewer.imageryLayers;
imageryLayers.addImageryProvider(
  new Cesium.OpenWeatherMapImageryProvider({
    apikey: '<YOUR_OPENWEATHERMAP_API_KEY>',
    style: 'satellite',
  })
);

// Add measuring tools
const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
const measureTool = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.Distance);
handler.setInputAction(() => {
  measureTool.activate();
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
handler.setInputAction(() => {
  measureTool.clear();
}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);