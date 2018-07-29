const promisify = (target) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      target(...args, (err, ...results) => {
        return err ? reject(err) : resolve(...results);
      });
    });
  };
};

export default promisify;
