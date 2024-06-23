document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme-button');
    const temaClaroButton = document.getElementById('tema-claro');
    const imagemClaro = document.getElementById('claro');
    const imagemEscuro = document.getElementById('imagem');
    let lexicormImageElement = null;

    const projectsData = [
        {
            title: 'Lexicorm',
            description: 'Desenvolvemos o projeto em grupo, com a participação de mais dois amigos: Pablo Henrique e Gabriel Gomes. Nosso cliente foi muito especial, o pessoal do curso Técnico em Enfermagem do Senac Minas Divinópolis. Criamos um software para busca de medicamentos, um Bulário eletrônico que torna a pesquisa de medicamentos mais fácil e eficaz. Desenvolvemos o software para duas plataformas: Mobile e Web. Na plataforma mobile, utilizamos as tecnologias React Native, Node.js e MySQL. Para a plataforma web, empregamos HTML, Java com o framework Spring Boot, Node.js e MySQL. Foi uma experiência inesquecível para todos nós, na qual conseguimos aplicar e solidificar ainda mais os nossos conhecimentos em desenvolvimento de softwares.',
            link: 'https://lexicorm.vercel.app/',
            image: 'assets/lex.png',
            darkImage: 'assets/lexbrab.png',
            repo: 'https://github.com/gabrielgr200/Lexicorm',
            linkText: 'Ver Site'
        },
        {
            title: 'Semáforo para cegos',
            description: 'O dispositivo foi desenvolvido para oferecer interação sem fio com smartphones, permitindo informar aos pedestres com deficiência visual sobre a situação do semáforo. Utilizando tecnologias como Arduino, relés e shields de comunicação Wi-Fi, além de habilidades em prototipação, design tridimensional e fabricação por impressão 3D, a iniciativa não apenas aumenta a acessibilidade para pessoas com deficiência visual, mas também contribui significativamente para a segurança nas vias públicas.O sistema funciona através de uma rede sem fio que conecta o dispositivo ao aplicativo no smartphone do usuário, fornecendo informações em tempo real sobre o status do semáforo. Isso permite que os pedestres saibam quando é seguro atravessar, melhorando sua autonomia e segurança nas travessias.Além dos benefícios diretos para a comunidade de pessoas com deficiência visual, o projeto também promove a cultura maker e a inovação tecnológica, incentivando o desenvolvimento de soluções criativas para desafios urbanos contemporâneos.',
            link: 'https://drive.google.com/file/d/1HBDPOFrxuw5vW6TRnerTXF8nQUG4R8xc/view?usp=sharing',
            image: 'assets/semafaro.jpg',
            linkText: 'Dê uma Olhada'
        },
        {
            title: 'Lan House',
            description: 'Construímos uma Lan house completamente do zero como parte do nosso curso de TI. Começamos pelo processo de crimpagem de todos os cabos RJ-45, seguindo os padrões de cabeamento estruturado. Isso incluiu a utilização de patch panels no rack principal e a interconexão através de um switch central para garantir uma rede estável e organizada.Além disso, dedicamos tempo à montagem, formatação e configuração detalhada das máquinas clientes, assegurando que cada uma estivesse pronta para operar na rede de maneira eficiente. Para centralizar e otimizar os serviços oferecidos, formatamos e configuramos o servidor localizado no rack, configurando serviços essenciais como HTTP para acesso web, FTP para transferência de arquivos, DHCP para atribuição automática de endereços IP e um proxy para gerenciamento de acesso à internet.Como parte do teste final de desempenho e integridade da nossa infraestrutura, decidimos realizar uma partida de Counter-Strike em LAN. Isso nos permitiu não apenas verificar a conectividade e velocidade da rede, mas também validar a capacidade do servidor de suportar cargas de trabalho reais, garantindo uma experiência de jogo fluida e sem interrupções para todos os usuários.',
            link: 'https://drive.google.com/file/d/1BZNpFMff0jwWTk5eWf4ZMU1tbCn8-XsR/view?usp=sharing',
            image: 'assets/1683327724847.jfif',
            linkText: 'Dê uma Olhada'
        },
        {
            title: 'News Letter',
            description: 'Com o avanço da tecnologia, sempre repleta de novidades, na sala em que atualmente estudo, cursando TI, uma atividade foi proposta pelo nosso professor: a criação de uma Newsletter, atualizada mensalmente com as notícias mais impactantes no mundo da tecnologia. Iniciada em fevereiro de 2023, a Newsletter está disponível até o momento, com edições que vão de fevereiro a dezembro de 2023. Vale ressaltar que recentemente lançamos uma edição especial chamada "Especial Desenvolvimento", na qual apresentamos projetos de diversos times da nossa sala, envolvendo o desenvolvimento de vários softwares',
            link: 'https://network-news.vercel.app/',
            image: 'assets/news.jpg',
            repo: 'https://github.com/VitorAndrey/network-news-site',
            linkText: 'Ver Site'
        },
        {
            title: 'Site para E-commerce',
            description: 'Recentemente, estive envolvido no desenvolvimento de uma aplicação web de e-commerce de jogos, inspirada em plataformas renomadas como Steam, Epic Games e Xbox. O projeto teve um prazo desafiador de cinco dias e abrangeu uma variedade de requisitos funcionais. Desde o cadastro de usuários até recursos avançados, como avaliações, sistema de badges e gerenciamento de conta. A plataforma é totalmente responsiva, hospedada no Vercel para o front-end e na Render para o back-end. Recomendo acessar o projeto aqui para uma experiência completa. (OBS: Se, ao tentar acessar, você não conseguir, pode ser que nosso sistema de back-end ou banco de dados, ambos online, estejam desligados.)',
            link: 'https://front-projetotecno.vercel.app/',
            image: 'assets/ecomerce.jpg',
            repo: 'https://github.com/Fellipexm/front_eccomerce',
            linkText: 'Ver Site'
        },
        {
            title: 'Seu Tempo',
            description: 'O "Seu Tempo" é uma aplicação web que fornece informações atualizadas sobre o clima de qualquer cidade. Com base em dados confiáveis, oferece detalhes precisos sobre temperatura e condições meteorológicas. Os usuários podem buscar uma cidade específica e receber instantaneamente os detalhes climáticos. A interface simples utiliza ícones e emojis para representar as condições climáticas, tornando a experiência mais agradável e informativa. Uma função marcante é a personalização da aparência conforme o clima atual, tornando-a visualmente atraente e fácil de usar.Em suma, o "Seu Tempo" é uma ferramenta prática para planejar atividades ao ar livre, viagens ou simplesmente acompanhar as mudanças climáticas.',
            link: 'https://seutempoclima.vercel.app/',
            image: 'assets/seutempo.jpg',
            repo: 'https://github.com/Fellipexm/seu_tempo',
            linkText: 'Ver Site'
        },
        {
            title: 'Receita Times',
            description: 'O software é uma aplicação web projetada para simplificar o gerenciamento e compartilhamento de receitas culinárias. Os usuários podem facilmente adicionar suas próprias criações gastronômicas e também explorar uma vasta seleção de receitas disponíveis na plataforma. Com recursos como categorização intuitiva, comentários interativos e avaliações, a comunidade pode interagir de forma dinâmica, oferecendo feedback e sugestões. Sua acessibilidade multiplataforma permite que os usuários desfrutem da experiência culinária em qualquer dispositivo, proporcionando praticidade e flexibilidade. Em suma, o software é uma ferramenta essencial para entusiastas da culinária que buscam inspiração, compartilhamento e colaboração',
            link: 'https://receitatime.vercel.app/',
            image: 'assets/receitatimes.jpg',
            repo: 'https://github.com/Fellipexm/front_receiitime',
            linkText: 'Ver Site'
        }
    ];

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        
        // Alternar entre as imagens quando o tema é alternado
        imagemClaro.style.display = document.body.classList.contains('dark-theme') ? 'block' : 'none';
        imagemEscuro.style.display = document.body.classList.contains('dark-theme') ? 'none' : 'block';

        // Alternar a imagem do Lexicorm quando o tema é alternado
        if (lexicormImageElement) {
            lexicormImageElement.src = document.body.classList.contains('dark-theme') ? 'assets/lexbrab.png' : 'assets/lex.png';
        }
    }

    toggleThemeButton.addEventListener('click', toggleTheme);
    temaClaroButton.addEventListener('click', toggleTheme);

    const projectsContainer = document.getElementById('projects');

    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const imageElement = document.createElement('img');
        imageElement.src = project.image;
        imageElement.alt = project.title;

        if (project.title === 'Lexicorm') {
            lexicormImageElement = imageElement;
        }

        const linkElement = document.createElement('a');
        linkElement.textContent = project.linkText;  // Usar o texto do link definido nos dados do projeto
        linkElement.href = project.link;
        linkElement.target = '_blank';

        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(linkElement);

        // Adiciona o link "Ver repositório" se a URL do repositório estiver definida
        if (project.repo) {
            const repoLinkElement = document.createElement('a');
            repoLinkElement.textContent = 'Git Hub';
            repoLinkElement.href = project.repo;
            repoLinkElement.target = '_blank';
            projectElement.appendChild(repoLinkElement);
        }

        projectsContainer.appendChild(projectElement);
    });
});
