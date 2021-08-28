function objectCheck(collection) {
  if (typeof collection === 'object') {
    return(Object.values(collection));
  } else {
    return collection;
  }
}

function myEach(collection, callback) {
  let workingCollection = objectCheck(collection);
  for (let i = 0; i<workingCollection.length; i++) {
    callback(workingCollection[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  let workingCollection = objectCheck(collection);
  let result = [];
  for (let i=0; i<workingCollection.length; i++) {
    result.push(callback(workingCollection[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let workingCollection = objectCheck(collection);
  let currentAcc = acc ? acc : workingCollection[0];
  for (let i = acc ? 0 : 1; i < workingCollection.length; i++) {
    currentAcc = callback(currentAcc, workingCollection[i], collection);
  }
  return currentAcc;
}

function myFind(collection, callback) {
  let workingCollection = objectCheck(collection);
  for (let i = 0; i < workingCollection.length; i++) {
    if (callback(workingCollection[i])) {
      return workingCollection[i];
    }
  }
  return undefined;
}

function myFilter(collection, callback) {
  let workingCollection = objectCheck(collection);
  let result = [];
  for (let i = 0; i < workingCollection.length; i++) {
    if (callback(workingCollection[i])) {
      result.push(workingCollection[i]);
    }
  }
  return result;
}
function mySize(collection) {
  return objectCheck(collection).length;
}

function myFirst(collection, numToReturn) {
  if (numToReturn) {
    return collection.slice(0, numToReturn);
  } else {
    return collection[0];
  }
} 

function myLast(collection, numToReturn) {
  if (numToReturn) {
    return collection.slice(collection.length - numToReturn);
  } else {
    return collection[collection.length - 1];
  }
} 

function myKeys(collection) {
  return Object.keys(collection);
}

function myValues(collection) {
  return Object.values(collection);
}