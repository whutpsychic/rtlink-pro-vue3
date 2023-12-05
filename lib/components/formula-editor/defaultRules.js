export default [
  // 变量不能连续出现
  {
    fn: function (elArr) {
      const typeArr = elArr.map((el) => { return el.type; });
      for (let i = 0; i < typeArr.length; i++) {
        let curr = typeArr[i];
        let next = typeArr[i + 1];
        let result = (curr === next) && (curr === 'var');
        if (result) {
          return result;
        }
      }
    },
    msg: '变量不能连续出现'
  },
  // 常量（数字）不能连续出现
  {
    fn: function (elArr) {
      const typeArr = elArr.map((el) => { return el.type; });
      for (let i = 0; i < typeArr.length; i++) {
        let curr = typeArr[i];
        let next = typeArr[i + 1];
        let result = (curr === next) && (curr === 'number');
        if (result) {
          return result;
        }
      }
    },
    msg: '常量（数字）不能连续出现'
  },
  // 符号非 "(" 或 ")" 则不能连续出现
  {
    fn: function (elArr) {
      const typeArr = elArr.map((el) => { return el.type; });
      const valueArr = elArr.map((el) => { return el.value; });
      for (let i = 0; i < typeArr.length; i++) {
        let currT = typeArr[i];
        let nextT = typeArr[i + 1];
        let currV = valueArr[i];
        let nextV = valueArr[i + 1];

        let result = ((currT === 'symbol') && (nextT === 'symbol')) && ((currV !== '(') && (currV !== ')') && (nextV !== '(') && (nextV !== ')'));
        if (result) {
          return result;
        }
      }
    },
    msg: '符号非 "(" 或 ")" 则不能连续出现'
  },
  // 不能以非 "(" 符号开头
  {
    fn: function (elArr) {
      if (elArr.length < 1) {
        return false;
      }
      const firstT = elArr[0].type;
      const firstV = elArr[0].value;

      let result = (firstT === 'symbol') && (firstV !== '(');
      return result;
    },
    msg: '不能以非 "(" 符号开头'
  },
  // 常量（数字）不能和变量连续出现
  {
    fn: function (elArr) {
      const typeArr = elArr.map((el) => { return el.type; });
      for (let i = 0; i < typeArr.length; i++) {
        let currT = typeArr[i];
        let nextT = typeArr[i + 1];

        let result = ((currT === 'number') && (nextT === 'var')) || ((currT === 'var') && (nextT === 'number'));
        if (result) {
          return result;
        }
      }
    },
    msg: '常量（数字）不能和变量连续出现'
  },
];