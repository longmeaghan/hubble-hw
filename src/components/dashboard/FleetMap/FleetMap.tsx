import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapPin } from '@/types/fleetSimulation';
import styles from './FleetMap.module.css';

interface FleetMapProps {
  pins?: MapPin[];
}

const DEFAULT_CENTER: L.LatLngExpression = [20, 0];
const DEFAULT_ZOOM = 2;

const pinIcon = L.divIcon({
  className: styles.pinIcon,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  html: '<span></span>',
});

export function FleetMap({ pins = [] }: FleetMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    markersRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    requestAnimationFrame(() => {
      map.invalidateSize();
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const markers = markersRef.current;
    if (!map || !markers) return;

    markers.clearLayers();

    pins.forEach((pin) => {
      const marker = L.marker([pin.lat, pin.lng], { icon: pinIcon });
      marker.bindTooltip(pin.label, { direction: 'top', offset: [0, -8] });
      markers.addLayer(marker);
    });

    if (pins.length > 0) {
      const bounds = L.latLngBounds(pins.map((pin) => [pin.lat, pin.lng] as L.LatLngTuple));
      map.fitBounds(bounds.pad(0.25), {
        animate: false,
        maxZoom: pins.length === 1 ? 8 : 12,
      });
    } else {
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: false });
    }
  }, [pins]);

  useEffect(() => {
    const map = mapRef.current;
    const container = containerRef.current;
    if (!map || !container) return;

    const observer = new ResizeObserver(() => {
      map.invalidateSize();
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.map}
      aria-label={pins.length ? `${pins.length} device locations` : 'World map'}
    />
  );
}
