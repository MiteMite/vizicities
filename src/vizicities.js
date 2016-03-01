import World, {world} from './World';
import Controls from './controls/index';
import Layer, {layer} from './layer/Layer';
import EnvironmentLayer, {environmentLayer} from './layer/environment/EnvironmentLayer';
import ImageTileLayer, {imageTileLayer} from './layer/tile/ImageTileLayer';
import GeoJSONTileLayer, {geoJSONTileLayer} from './layer/tile/GeoJSONTileLayer';
import TopoJSONTileLayer, {topoJSONTileLayer} from './layer/tile/TopoJSONTileLayer';
import GeoJSONLayer, {geoJSONLayer} from './layer/GeoJSONLayer';
import TopoJSONLayer, {topoJSONLayer} from './layer/TopoJSONLayer';
import Point, {point} from './geo/Point';
import LatLon, {latLon} from './geo/LatLon';

const VIZI = {
  version: '0.3',

  // Public API
  World: World,
  world: world,
  Controls: Controls,
  Layer: Layer,
  layer: layer,
  EnvironmentLayer: EnvironmentLayer,
  environmentLayer: environmentLayer,
  ImageTileLayer: ImageTileLayer,
  imageTileLayer: imageTileLayer,
  GeoJSONTileLayer: GeoJSONTileLayer,
  geoJSONTileLayer: geoJSONTileLayer,
  TopoJSONTileLayer: TopoJSONTileLayer,
  topoJSONTileLayer: topoJSONTileLayer,
  GeoJSONLayer: GeoJSONLayer,
  geoJSONLayer: geoJSONLayer,
  TopoJSONLayer: TopoJSONLayer,
  topoJSONLayer: topoJSONLayer,
  Point: Point,
  point: point,
  LatLon: LatLon,
  latLon: latLon
};

export default VIZI;
