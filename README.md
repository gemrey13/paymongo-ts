```javascript
async function main() {
  const paymongo = new Paymongo("sk_test_vHszhsmBVezafEUXDVYpdrpU");

  const data: Data = {
    amount: 12154,
    description: "sample description",
    remarks: "sample remarks",
  };

  paymongo.insert(data);

  const datas = await paymongo.getPayLink();
  // console.log(datas);

  const retrieve = await paymongo.retrieve();
  console.log("retrieve: ", retrieve);
}

main();
```
