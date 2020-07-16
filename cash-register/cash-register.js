const price = document.querySelector(".item-price > input");
const cashPaid = document.querySelector(".cash-paid > input");
const cid = document.querySelectorAll(".amount");
const status = document.querySelector(".status");
const changeQty = document.querySelector(".change__qty");
const changeTotal = document.querySelector(".change__total");
const cidBreakDown = [];

cid.forEach(amt => {
    cidBreakDown.push(parseFloat(amt.value));
});

const changeAmount = function() {
    const change = parseFloat(cashPaid.value) - parseFloat(price.value);
    return Math.round(change * 100) / 100;
};

const totalInDrawer = function() {
    return cidBreakDown.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
};

function cashRegister() {
    // console.log('change amount: ' + changeAmount());
    // console.log('cid: ' + totalInDrawer());
    let change = changeAmount();
    let cashInDrawer = totalInDrawer();

    let denominations = [
        { name: "ONE HUNDRED", value: 100.0 },
        { name: "TWENTY", value: 20.0 },
        { name: "TEN", value: 10.0 },
        { name: "FIVE", value: 5.0 },
        { name: "ONE", value: 1.0 },
        { name: "QUARTER", value: 0.25 },
        { name: "DIME", value: 0.1 },
        { name: "NICKLE", value: 0.05 },
        { name: "PENNY", value: 0.01 }
    ];

    if (change > cashInDrawer) {
        console.log("condition1 met");
        return (status.value = "INSUFFICIENT FUNDS");
    }

    if (change === cashInDrawer) {
        console.log("condition2 met");
        console.log("change amount: " + changeAmount());
        console.log("cid: " + totalInDrawer());
        return (status.value = "CLOSED - OUT OF CHANGE");
    }

    let changeBreakDown = denominations.reduce((acc, curr, index) => {
        let currentValue = 0;
        if (change >= curr.value) {
            while (change >= curr.value && cidBreakDown[index] >= curr.value) {
                change -= curr.value;
                change = Math.round(change * 100) / 100;
                cidBreakDown[index] -= curr.value;
                cid[index].value = Math.round(cidBreakDown[index] * 100) / 100;
                currentValue += curr.value;
            }
            acc.push([
                curr.name,
                "Qty: " + currentValue / curr.value,
                "Total: $" + currentValue
            ]);
            return acc;
        } else {
            acc.push([curr.name, "Qty: " + 0, "Total: $" + 0]);
            return acc;
        }
    }, []);

    console.log(changeBreakDown);

    if (change < cashInDrawer) {
        qtyHTML = `
                    <li class="qty">${changeBreakDown[0][1]}</li>
                    <li class="qty">${changeBreakDown[1][1]}</li>
                    <li class="qty">${changeBreakDown[2][1]}</li>
                    <li class="qty">${changeBreakDown[3][1]}</li>
                    <li class="qty">${changeBreakDown[4][1]}</li>
                    <li class="qty">${changeBreakDown[5][1]}</li>
                    <li class="qty">${changeBreakDown[6][1]}</li>
                    <li class="qty">${changeBreakDown[7][1]}</li>
                    <li class="qty">${changeBreakDown[8][1]}</li>
        `;

        totalHTML = `
        <li class="total">${changeBreakDown[0][2]}</li>
        <li class="total">${changeBreakDown[1][2]}</li>
        <li class="total">${changeBreakDown[2][2]}</li>
        <li class="total">${changeBreakDown[3][2]}</li>
        <li class="total">${changeBreakDown[4][2]}</li>
        <li class="total">${changeBreakDown[5][2]}</li>
        <li class="total">${changeBreakDown[6][2]}</li>
        <li class="total">${changeBreakDown[7][2]}</li>
        <li class="total">${changeBreakDown[8][2]}</li>
        `;

        changeQty.innerHTML = qtyHTML;
        changeTotal.innerHTML = totalHTML;
        status.value = "OPEN";
    }
}

cashPaid.addEventListener("change", cashRegister);

//[["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
