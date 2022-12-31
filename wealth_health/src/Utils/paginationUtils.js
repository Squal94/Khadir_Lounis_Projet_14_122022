function paginationPrev(data, prevValue) {
  if (prevValue <= 1) {
    data.firstItem = 0;
    data.numberPage = 1;
    data.currentLastItem = data.currentnumberAffichage;
    data.LastItem = data.currentLastItem;
    data.filterEmployees = data.data.slice(
      data.firstItem,
      data.currentLastItem
    );
    data.errorMinArray = true;
  } else {
    data.numberPage--;
    data.filterEmployees = data.data.slice(prevValue, data.currentLastItem);
    data.currentLastItem = prevValue;
    data.firstItem = prevValue;
    data.LastItem = prevValue + data.currentLastItem;
    data.errorMaxArray = false;
  }
}

function paginationNext(data, nextValue) {
  data.errorMinArray = false;
  data.firstItem = data.currentLastItem;
  if (nextValue > data.data.length) {
    data.numberPage = Math.ceil(data.data.length / data.currentnumberAffichage);
    data.borderValue = nextValue - data.data.length;
    data.filterEmployees = data.data.slice(
      data.currentLastItem,
      parseInt(data.currentLastItem) + parseInt(data.borderValue)
    );
    data.LastItem = parseInt(data.currentLastItem) + parseInt(data.borderValue);
    data.errorMaxArray = true;
  } else if (nextValue === data.data.length) {
    data.numberPage = data.data.length / data.currentnumberAffichage;
    data.filterEmployees = data.data.slice(data.currentLastItem, nextValue);
    data.LastItem = nextValue;
    data.errorMaxArray = true;
  } else {
    data.numberPage++;
    data.filterEmployees = data.data.slice(data.currentLastItem, nextValue);
    data.currentLastItem = nextValue;
    data.LastItem = data.currentLastItem;
  }
}

export { paginationPrev, paginationNext };
