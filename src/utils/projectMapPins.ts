import type { MapPin } from '@/types/fleetSimulation';

export interface ProjectedPin extends MapPin {
  x: number;
  y: number;
}

/** Project lat/lng pins to percentage positions within the map card */
export function projectMapPins(pins: MapPin[]): ProjectedPin[] {
  if (pins.length === 0) return [];

  const lats = pins.map((pin) => pin.lat);
  const lngs = pins.map((pin) => pin.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const latSpan = Math.max(maxLat - minLat, 0.01);
  const lngSpan = Math.max(maxLng - minLng, 0.01);

  return pins.map((pin) => ({
    ...pin,
    x: ((pin.lng - minLng) / lngSpan) * 80 + 10,
    y: (1 - (pin.lat - minLat) / latSpan) * 70 + 15,
  }));
}
