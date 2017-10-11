export default {
  // tslint:disable-next-line max-line-length
  imageArray: {
    data: [255,4,0,255,255,18,0,255,255,28,0,255,255,32,0,255,255,31,0,255,255,24,0,255,255,12,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,253,0,255,255,255,0,255,255,255,0,255,255,255,0,255,255,255,0,255,255,255,0,255,255,255,0,255,255,247,0,255,255,217,0,255,255,181,0,255,255,137,0,255,255,92,0,255,255,50,0,255,255,7,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,9,255,255,0,48,255,255,0,85,255,255,0,123,255,255,0,162,255,255,0],
    width: 50,
    height: 50,
  },
  dataArraySquare: {
    data: [
      [1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16],
    ],
    width: 2,
    height: 2,
  },
  dataArraySquareOneFlip: {
    data: [
      [9, 10, 11, 12],[13, 14, 15, 16],[1, 2, 3, 4],[5, 6, 7, 8],
    ],
    width: 2,
    height: 2,
  },
  dataArraySquareOneRotate: {
    data: [
      [9, 10, 11, 12], [1, 2, 3, 4], [13, 14, 15, 16], [5, 6, 7, 8],
    ],
    width: 2,
    height: 2,
  },
  dataArrayOffset: {
    data: [
      [1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16],[17, 18, 19,20],[21, 22, 23, 24],
    ],
    width: 2,
    height: 3,
  },
  dataArrayOffsetOneRotate: {
    data: [
      [17, 18, 19,20],[9, 10, 11, 12],[1, 2, 3, 4],[21, 22, 23, 24],[13, 14, 15, 16],[5, 6, 7, 8],
    ],
    width: 3,
    height: 2,
  },
  imageArraySquare: {
    data: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ],
    width: 2,
    height: 2,
  },
  imageArraySquareOneRotate: {
    data: [
      9, 10, 11, 12, 1, 2, 3, 4, 13, 14, 15, 16, 5, 6, 7, 8,
    ],
    width: 2,
    height: 2,
  },
  imageArrayOffset: {
    data: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20, 21, 22, 23, 24,
    ],
    width: 2,
    height: 3,
  },
  imageArrayOffsetOneRotate: {
    data: [
      17, 18, 19, 20, 9, 10, 11, 12, 1, 2, 3, 4, 21, 22, 23, 24, 13, 14, 15, 16, 5, 6, 7, 8,
    ],
    width: 3,
    height: 2,
  },
  errorNoCallback: {
    error: 'no callback function found',
  },
  loopCount: (data: any, inputFunc: any, count: number) => {
    let loopData = data;
    for (let i = 0; i < count; i += 1) {
      loopData = inputFunc(loopData);
    }
    return loopData;
  },
};
