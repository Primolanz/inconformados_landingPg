  // Menu de Hambúrguer Mobile Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconPath = document.getElementById('menu-icon-path');

        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Ícone X
            } else {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Ícone Menu Hambúrguer
            }
        });

        // Fechar menu mobile ao clicar em um link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });


       function Enviar(){
        
       }

        const symplaConferenceUrl = 'https://www.sympla.com.br/evento/conferencia-missionaria-inconformados/3429173?share_id=whatsapp&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGniNHhQcPQFq47j4_OxDiSFZI4BlBSEvBuFvQ8aKReVJs_hssmZWmswvOsEAc_aem_tjytsmj2CArid0wot1tw-A&utm_id=97760_v0_s00_e0_tv3&referrer=l.instagram.com&referrer=l.instagram.com';
        const schoolWhatsAppNumber = '5514991292340';

        function handleEnrollmentSubmit(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const city = document.getElementById('city').value.trim();
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value.trim();

            if (interest === 'conferencia_apenas') {
                window.location.href = symplaConferenceUrl;
                return;
            }

            if (interest === 'escola_apenas') {
                const whatsappMessage = [
                    `Ola! me chamo ${name} e gostaria de fazer minha inscricao para a Escola de Missoes Inconformados 2026.`,
                    " ",
                    `${message}`
                ].filter(Boolean).join('\n');

                window.location.href = `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            }
        }

        function resetEnrollmentForm() {
            document.getElementById('enrollment-form').reset();
            document.getElementById('success-box').classList.add('hidden');
        }

        function copyText(text, badgeId) {
            navigator.clipboard.writeText(text).then(() => {
                const badge = document.getElementById(badgeId);
                badge.classList.remove('scale-0');
                setTimeout(() => badge.classList.add('scale-0'), 1600);
            });
        }
