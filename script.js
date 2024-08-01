document.addEventListener('DOMContentLoaded', () => {
    // Alternar submenu
    const menuButton = document.getElementById('toggleMenu');
    const customizationMenu = document.getElementById('customizationMenu');
    const closeMenuButton = document.getElementById('closeMenu');

    menuButton.addEventListener('click', () => {
        customizationMenu.classList.toggle('show');
    });

    closeMenuButton.addEventListener('click', () => {
        customizationMenu.classList.remove('show');
    });

    // Aplicar tema personalizado
    document.getElementById('applyTheme').addEventListener('click', () => {
        const backgroundColor = document.getElementById('backgroundColor').value;
        const textColor = document.getElementById('textColor').value;
        
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = textColor;
        document.querySelector('.container').style.backgroundColor = textColor;
        document.querySelector('.container').style.color = backgroundColor;
        
        // Adiciona uma transição de cor suave
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
        document.querySelector('.container').style.transition = 'background-color 0.5s, color 0.5s';
    });

    // Alternar animações
    let animationsEnabled = true;
    document.getElementById('toggleAnimations').addEventListener('click', () => {
        animationsEnabled = !animationsEnabled;
        if (animationsEnabled) {
            document.body.classList.add('animations-enabled');
            document.querySelector('.container').classList.add('animations-enabled');
            document.getElementById('toggleAnimations').textContent = 'Desativar Animações';
        } else {
            document.body.classList.remove('animations-enabled');
            document.querySelector('.container').classList.remove('animations-enabled');
            document.getElementById('toggleAnimations').textContent = 'Ativar Animações';
        }
    });

    // Lógica de divisão da conta
    document.getElementById('splitForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const totalAmount = parseFloat(document.getElementById('totalAmount').value);
        const numPeople = parseInt(document.getElementById('numPeople').value);
        const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

        const tipAmount = (totalAmount * tipPercentage) / 100;
        const totalWithTip = totalAmount + tipAmount;
        const amountPerPerson = totalWithTip / numPeople;
        const funnyMessages = [
            `Cada pessoa deve pagar: R$${amountPerPerson.toFixed(2)}. Lembre-se de sorrir!`,
            `Cada um vai pagar: R$${amountPerPerson.toFixed(2)}. Que a conta seja leve!`,
            `Total com gorjeta: R$${totalWithTip.toFixed(2)}. Cada pessoa paga: R$${amountPerPerson.toFixed(2)}. Vamos aproveitar!`
        ];
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        document.getElementById('result').innerHTML = `<p>${randomMessage}</p>`;
    });

    // Mostrar a caixa de resultados
    document.querySelector('.container').classList.add('show');
});
