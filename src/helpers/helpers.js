export function fetchServerData(limit, page, dataServer) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = dataServer.slice(startIndex, endIndex);
 /*  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(slicedData);
    }, 300);
  }); */
  return slicedData
}

export function fetchServerDataCards(dataServer, limit, page, nameFilter, actualFilter) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = dataServer.slice(startIndex, endIndex);
  const res = slicedData.filter(item => item[nameFilter] === actualFilter) ;
  const res1 = res.length === 0 ? slicedData : res;
  const res2 = res.length === 0 ? dataServer: res;
 /*  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(slicedData);
    }, 300);
  }); */
  return {res1, res2};
}

export function filterId(id, array) {
  const res = array.find(item => item.id === id);
  return res;
}