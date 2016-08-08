var button = document.getElementById("purchase");

button.onclick = function () {
    var payment = new PaymentRequest(
        [{supportedMethods: ["visa","bitcoin"]}],
        {
            displayItems: [
                {
                  label: "Sub-total",
                  amount: { currency: "USD", value : "55.00" }, // US$55.00
                },
                {
                  label: "Sales Tax",
                  amount: { currency: "USD", value : "5.00" }, // US$5.00
                }
            ],
            total:  {
                label: "Total due",
                amount: { currency: "USD", value : "60.00" }, // US$60.00
            }
        }
    );

    console.log(payment);
}
