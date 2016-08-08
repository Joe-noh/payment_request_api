function checkout() {
    var methodData = [
      {supportedMethods: ["visa", "bitcoin"]}
    ];
    var details = {
        displayItems: [
            {
              label: "メロンパン",
              amount: {currency: "JPY", value : "100.00"}
            },
            {
              label: "消費税",
              amount: {currency: "JPY", value : "8.00"}
            }
        ],
        total:  {
            label: "合計",
            amount: {currency: "JPY", value : "108.00"}
        }
    };

    var payment = new PaymentRequest(methodData, details);

    payment.show().then(function(paymentResponse) {
        var json = JSON.stringify({
            method: paymentResponse.methodName,
            details: paymentResponse.details
        }, null, 2);

        document.querySelector("#result").innerText = json;

        paymentResponse.complete("fail");
    });
}

document.querySelector("#purchase").addEventListener("click", checkout);
