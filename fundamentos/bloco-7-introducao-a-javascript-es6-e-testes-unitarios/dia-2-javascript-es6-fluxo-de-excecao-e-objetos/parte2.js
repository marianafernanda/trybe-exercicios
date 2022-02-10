const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const entregadora = order.order.delivery.deliveryPerson;
    const cliente = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const numero = order.address.number;
    const apartamento = order.address.apartment;
    console.log(`Olá ${entregadora}, entrega para: ${cliente}, Telefone: ${telefone}, R.${rua}, N:${numero}, AP:${apartamento}`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const cliente2 = order.name = 'Luiz Silva';
    const valor = order.payment.total = 50
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    console.log(`Olá ${cliente2}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${valor},00`)
  
  }
  
  orderModifier(order);