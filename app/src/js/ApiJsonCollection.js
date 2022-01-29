function callAPI() {
  return fetch(
    "https://stac.astrogeology.usgs.gov/api/collections"
  ).then(response => response.json());
}

function getItemCollection(name, page, bboxArr) {
  var urlArray = [];
  return callAPI().then(result => {
    for (let i = 0; i < result.collections.length; i++) {
      if (
        result.collections[i].summaries["ssys:targets"] == name.toLowerCase()
      ) {
        let length = result.collections[i].links.length;
        for (let j = 0; j < length; j++) {
          let link = result.collections[i].links[j];
          if (link.rel == "items") {
            var url = result.collections[i].links[j].href;
            // this is temporary until stac.astrogeology is working with pagination
            url = url.replace(
              "https://stac.astrogeology.usgs.gov/api/collections",
              "https://jat52qc8c0.execute-api.us-west-2.amazonaws.com/dev/collections"
            );
            if (page != null) {
              url = url + "?page=" + page;
            }

            if (bboxArr != null) {
              let tempStr = "";
              for (let k = 0; k < bboxArr.length; k++) {
                tempStr += bboxArr[k];
                if (k != bboxArr.length - 1) {
                  tempStr += ",";
                }
              }
              url = url + "?bbox=" + "[" + tempStr + "]";
            }
            urlArray.push(url);
          }
        }
      }
    }
    if (urlArray.length == 0) {
      return;
    }
    let promiseArray = [];
    for (let i = 0; i < urlArray.length; i++) {
      promiseArray.push(fetch(urlArray[i]));
    }
    return Promise.all(promiseArray).then(function(responses) {
      return Promise.all(
        responses.map(function(response) {
          return response.json();
        })
      );
    });
  });
}

export { getItemCollection };
