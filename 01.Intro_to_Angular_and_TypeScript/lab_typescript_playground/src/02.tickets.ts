function ticketManager(data: string[], criteria: string) {
  class Ticket {
    constructor(
      public destination: string,
      public price: number,
      public status: string
    ) {}
  }

  let managedTickets: Ticket[] = [];

  for (let ticket of data) {
    let [destination, price, status] = ticket.split("|");

    let singleTicket = new Ticket(destination, Number(price), status);

    const check = managedTickets.some((singleTicket) => {
      return singleTicket.destination === destination;
    });

    if (!check) {
      managedTickets.push(singleTicket);
    }
  }

  console.log(sortTickets(managedTickets, criteria));
}

function sortTickets(managedTickets: any[], criteria: string) {
  let sorted: any[];
  if (criteria == "destination") {
    sorted = managedTickets.sort((a, b) =>
      a.destination < b.destination ? -1 : 1
    );
  } else if (criteria == "price") {
    sorted = managedTickets.sort((a, b) => (a.price < b.price ? -1 : 1));
  } else {
    sorted = managedTickets.sort((a, b) => (a.status < b.status ? -1 : 1));
  }
  return sorted;
}

export default ticketManager;
