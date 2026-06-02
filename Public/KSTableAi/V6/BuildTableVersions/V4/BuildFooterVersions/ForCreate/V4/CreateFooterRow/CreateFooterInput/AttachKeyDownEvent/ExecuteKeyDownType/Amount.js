const Amount = ({
    currentInput
}) => {
    const closestTr =
        currentInput.closest("tr");

    const qty = Number(
        closestTr.querySelector('[name="Qty"]').value
    );

    const amount = Number(
        closestTr.querySelector('[name="Amount"]').value
    );

    closestTr.querySelector('[name="Rate"]').value =
        qty ? amount / qty : 0;
};

export default Amount;