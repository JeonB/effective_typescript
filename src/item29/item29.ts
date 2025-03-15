const item29 = () => {
  declare function setCamera(camera: CameraOptions): void;
  declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

  interface CameraOptions {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: number;
  }

  type LngLat =
    | { lng: number; lat: number }
    | { lon: number; lat: number }
    | [number, number];

  type LngLatBounds =
    | { northeast: LngLat; southwest: LngLat }
    | [number, number, number, number]
    | [LngLat, LngLat];

  // viewportForBounds의 타입 선언이 너무 자유롭다
  function focusOnFeature(feature: Feature) {
    const bounds = calculateBoundingBox(feature);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const {
      center: { lat, lng },
      zoom,
    } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng},z${zoom}`;
  }

  interface LngLat2 {
    lng: number;
    lat: number;
  }
  type LngLatLike = LngLat2 | { lon: number; lat: number } | [number, number];

  // 선택적 속성을 없에서 반환 타입의 범위를 좁혔다.
  interface Camera {
    center: LngLat2;
    zoom: number;
    bearing: number;
    pitch: number;
  }
  interface CameraOptions2 {
    center?: LngLatLike;
    zoom?: number;
    bearing?: number;
    pitch?: number;
  }
  type LngLatBounds2 =
    | { northeast: LngLatLike; southwest: LngLatLike }
    | [number, number, number, number]
    | [LngLatLike, LngLatLike];

  declare function setCamera2(camera: CameraOptions2): void;
  declare function viewportForBounds2(bounds: LngLatBounds2): Camera;

  function focusOnFeature2(feature: Feature) {
    const bounds = calculateBoundingBox(feature);
    const camera = viewportForBounds2(bounds);
    setCamera2(camera);
    const {
      center: { lat, lng },
      zoom,
    } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng},z${zoom}`;
  }
};
