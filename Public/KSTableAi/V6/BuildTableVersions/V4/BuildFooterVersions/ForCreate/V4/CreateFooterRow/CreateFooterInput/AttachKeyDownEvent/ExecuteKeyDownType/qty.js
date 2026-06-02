const rate = ({
    currentInput
}) => {
    console.log("currentInput : ", currentInput);

    const closestTr =
        currentInput.closest("tr");

    const qty = Number(
        closestTr.querySelector('[name="Qty"]').value
    );

    const rate = Number(
        closestTr.querySelector('[name="Rate"]').value
    );

    closestTr.querySelector('[name="Amount"]').value =
        rate * qty;
};

export default rate;