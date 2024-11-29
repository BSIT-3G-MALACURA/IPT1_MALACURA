 
        document.querySelector('.button-link').addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target'); 
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
