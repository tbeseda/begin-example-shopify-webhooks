const arc = require("@architect/functions");

function handler(request, response) {
  response({ status: 200 }); // respond immediately

  const customer = request.body;
  console.log(`${customer.id} was updated.`);

  if (customer.orders_count > 9) {
    console.log(`${customer.id} is a VIP 🎉`);
  } else {
    console.log(`${customer.id} has ${customer.orders_count} orders`);
  }
}

exports.handler = arc.http(handler);
