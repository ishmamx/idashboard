$.exists = function(selector) {
  return $(selector).length > 0;
};
$(document).on("ready", function() {
  $(window).trigger("resize");
  svgMap();
});

/*--------------------------------------------------------------
17. Vector Map
--------------------------------------------------------------*/
function svgMap() {

  // World Map
  if ($.exists("#world-en")) {
    $("#world-en").vectorMap({
      map: 'world_en',
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // USA Map
  if ($.exists("#svg-usa")) {
    $("#svg-usa").vectorMap({
      map: "usa_en",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      colors: {
        mo: "rgba(0, 122, 255, 0.3)",
        fl: "rgba(0, 122, 255, 0.4)",
        or: "rgba(0, 122, 255, 0.5)",
        ca: "rgba(0, 122, 255, 0.6)",
        tx: "rgba(0, 122, 255, 1)",
        wy: "rgba(0, 122, 255, 0.7)",
        ny: "rgba(0, 122, 255, 0.8)"
      },
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Algeria Map
  if ($.exists("#dz-fr")) {
    $("#dz-fr").vectorMap({
      map: "dz_fr",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      colors: {
        11: "rgba(0, 122, 255, 0.3)",
        30: "rgba(0, 122, 255, 0.4)",
        17: "rgba(0, 122, 255, 0.5)",
        32: "rgba(0, 122, 255, 0.6)",
        8: "rgba(0, 122, 255, 1)"
      },
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Argentina Map
  if ($.exists("#argentina-en")) {
    $("#argentina-en").vectorMap({
      map: "argentina_en",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Brazil Map
  if ($.exists("#brazil-br")) {
    $("#brazil-br").vectorMap({
      map: "brazil_br",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Croatia Map
  if ($.exists("#croatia-map")) {
    $("#croatia-map").vectorMap({
      map: "croatia",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Europe Map
  if ($.exists("#europe-en")) {
    $("#europe-en").vectorMap({
      map: "europe_en",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // France Map
  if ($.exists("#france-fr")) {
    $("#france-fr").vectorMap({
      map: "france_fr",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Germany Map
  if ($.exists("#germany-en")) {
    $("#germany-en").vectorMap({
      map: "germany_en",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Greece Map
  if ($.exists("#greece")) {
    $("#greece").vectorMap({
      map: "greece",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Greece Map
  if ($.exists("#indonesia_id")) {
    $("#indonesia_id").vectorMap({
      map: "indonesia_id",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Iran Map
  if ($.exists("#iran_ir")) {
    $("#iran_ir").vectorMap({
      map: "iran_ir",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Iran Map
  if ($.exists("#iraq")) {
    $("#iraq").vectorMap({
      map: "iraq",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Turkey Map
  if ($.exists("#turkey")) {
    $("#turkey").vectorMap({
      map: "turkey",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

  // Ukraine Map
  if ($.exists("#ukraine_ua")) {
    $("#ukraine_ua").vectorMap({
      map: "ukraine_ua",
      showTooltip: true,
      backgroundColor: "#fff",
      color: "rgba(0, 122, 255, 0.1)",
      hoverColor: "#666",
      enableZoom: true,
      borderWidth: 3,
      borderColor: "#fff",
      hoverOpacity: 0.9
    });
  }

}
