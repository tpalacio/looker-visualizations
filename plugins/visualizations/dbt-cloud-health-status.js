/* eslint-disable */
looker.plugins.visualizations.add({
  options: {
    token: {
      type: "string",
      label: "Token",
      default: "",
    },
    exposure: {
      type: "string",
      label: "Exposure Name",
      default: "",
    },
    job_id: {
      type: "string",
      label: "Job ID",
      default: "",
    },
    metadata_endpoint: {
      type: "string",
      label: "Metadata Endpoint",
      default: "metadata.cloud.getdbt.com"
    }
  },
  // Set up the initial state of the visualization
  create: function (element, config) {
    this._frame = element;
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    var token = config.token;
    var exposure_name = config.exposure;
    var job_id = config.job_id;
    var endpoint = config.metadata_endpoint

    var url = `https://${endpoint}/exposure-tile?token=${token}&name=${exposure_name}&jobId=${job_id}`;
    this._frame.innerHTML = `<iframe style="border: 0" width="100%" height="100%" src=${url} title='Exposure Status Tile'></iframe>`;
    done();
  },
});
