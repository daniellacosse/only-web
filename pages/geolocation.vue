<template>
  <no-ssr>
    <MglMap
      style="height: 100vh; width: 100vw"
      :access-token="accessToken"
      :map-style="style"
      :center="center"
      :zoom="zoom"
      @load="init"
    />
  </no-ssr>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_ZOOM = 3;
const SPECIFIC_ZOOM = 12;

export default {
  data: function() {
    return {
      accessToken: process.env.NUXT_ENV_MAPBOX_TOKEN,
      map: null,
      style: "mapbox://styles/mapbox/light-v9",
      center: [0, 0],
      zoom: DEFAULT_ZOOM
    };
  },
  methods: {
    init(mapboxInstance) {
      this.map = mapboxInstance;

      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.center = [longitude, latitude];
          this.zoom = SPECIFIC_ZOOM;
        },
        error => {
          alert(error.message);
        },
        {
          timeout: 3000
        }
      );
    }
  }
};
</script>
