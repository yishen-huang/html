function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
    setTimeout(function() {
        modal.style.display = 'none';
    }, 5000);
}

function openPorkModal() {
    openModal('porkModal');
}

function openHamburgerModal() {
    openModal('hamburgerModal');
}