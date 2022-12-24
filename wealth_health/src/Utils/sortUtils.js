const sortAZ = async (data, boolean, k) => {
  boolean
    ? data.sort((a, b) => {
        const A = a[k].toLowerCase();
        const B = b[k].toLowerCase();
        if (A > B) {
          return 1;
        } else if (B > A) {
          return -1;
        } else {
          return 0;
        }
      })
    : data.sort((a, b) => {
        const A = a[k].toLowerCase();
        const B = b[k].toLowerCase();
        if (B > A) {
          return 1;
        } else if (A > B) {
          return -1;
        } else {
          return 0;
        }
      });
};

// a, b;

const sortNumber = (data, boolean, k) => {
  boolean
    ? data.sort((a, b) => {
        return a[k] - b[k];
      })
    : data.sort((a, b) => {
        return b[k] - a[k];
      });
};

const sortDate = (data, boolean, k) => {
  boolean
    ? data.sort((a, b) => {
        return new Date(a[k]).valueOf() - new Date(b[k]).valueOf();
      })
    : data.sort((a, b) => {
        return new Date(b[k]).valueOf() - new Date(a[k]).valueOf();
      });
};

export { sortAZ, sortNumber, sortDate };
