const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"


console.log(businesses)
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    return business.orders.find(order => order >9000)
})
console.log(bigSpenders)

bigSpenders.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
    `
    outEl.innerHTML += "<hr/>"
  });