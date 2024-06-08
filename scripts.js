document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme-button');
    const temaClaroButton = document.getElementById('tema-claro');
    const projects = document.querySelectorAll('.project');
    const imagemClaro = document.getElementById('claro');
    const imagemEscuro = document.getElementById('imagem');

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        projects.forEach(project => {
            project.classList.toggle('dark-theme-project');
        });

        // Alternar entre as imagens quando o tema é alternado
        imagemClaro.style.display = (document.body.classList.contains('dark-theme')) ? 'block' : 'none';
        imagemEscuro.style.display = (document.body.classList.contains('dark-theme')) ? 'none' : 'block';
    }

    toggleThemeButton.addEventListener('click', toggleTheme);
    temaClaroButton.addEventListener('click', toggleTheme);

    // Exemplo de dados de projeto
    const projectsData = [
        {
            title: 'Lexicorm',
            description: 'Desenvolvemos o projeto em grupo, com a participação de mais dois amigos: Pablo Henrique e Gabriel Gomes. Nosso cliente foi muito especial, o pessoal do curso Técnico em Enfermagem do Senac Minas Divinópolis. Criamos um software para busca de medicamentos, um Bulário eletrônico que torna a pesquisa de medicamentos mais fácil e eficaz. Desenvolvemos o software para duas plataformas: Mobile e Web. Na plataforma mobile, utilizamos as tecnologias React Native, Node.js e MySQL. Para a plataforma web, empregamos HTML, Java com o framework Spring Boot, Node.js e MySQL. Foi uma experiência inesquecível para todos nós, na qual conseguimos aplicar e solidificar ainda mais os nossos conhecimentos em desenvolvimento de softwares.',
            link: 'https://lexicorm.vercel.app/',
            image: 'assets/lex.png'
        },
        {
            title: 'Semáforo para cegos',
            description: `O dispositivo possui interação comunicacional e sem fio com smartphones, com a finalidade de informar a situação do semáforo aos pedestres com deficiência visual.

Utilizando recursos como tecnologia Arduino, relés e shields de comunicação Wi-Fi, juntamente com habilidades de prototipação, design tridimensional e fabricação por impressão 3D, a iniciativa não só melhora a acessibilidade para pessoas, como contribui para a segurança nas vias públicas. Além disso, fomenta a cultura maker e a inovação tecnológica.

Destaca-se também sua relevância social, possibilitando um ambiente urbano mais inclusivo e acessível, alinhado aos princípios da equidade e acessibilidade para todos os cidadãos.

[...] área do conhecimento, de característica interdisciplinar, que engloba produtos, recursos, metodologias, estratégias, práticas e serviços que objetivam promover a funcionalidade, relacionada à atividade e participação de pessoas com deficiência, incapacidades ou mobilidade reduzida, visando sua autonomia, independência, qualidade de vida e inclusão social (BRASIL, 2007, p. 3). BRASIL. Comitê de Ajudas Técnicas, Secretaria Especial dos Direitos Humanos da Presidência da República (CORDE/SEDH/PR), 2007).`,
            link: 'https://files.fm/f/n539mv4wa4?fk=e9c7a15a',
            image: 'assets/semafaro.jpg'
        },
        {
            title: 'Lan House',
            description: `Construímos uma Lan house do zero no curso de Ti.
            Crimpamos todos os cabos RJ-45, fazendo o cabeamento estruturado usando os patch panels do rack e o switch.
            Montamos, formatamos e configuramos as máquinas clientes.
            Formatamos e configuramos o servidor que está dentro do rack com os serviços de http, ftp, dhcp e proxy.
            Aproveitamos para jogar uma partida de CS em Lan para testar nossa rede.`,
            link: 'https://files.fm/u/n9nh8e3d9j?k=2d99c577',
            image: 'assets/1683327724847.jfif'
        },
        {
            title: 'News Letter',
            description: `Com o avanço da tecnologia, sempre repleta de novidades, na sala em que atualmente estudo, cursando TI, uma atividade foi proposta pelo nosso professor: a criação de uma Newsletter, atualizada mensalmente com as notícias mais impactantes no mundo da tecnologia. Iniciada em fevereiro de 2023, a Newsletter está disponível até o momento, com edições que vão de fevereiro a dezembro de 2023. Vale ressaltar que recentemente lançamos uma edição especial chamada "Especial Desenvolvimento", na qual apresentamos projetos de diversos times da nossa sala, envolvendo o desenvolvimento de vários softwares`,
            link: 'https://network-news.vercel.app/',
            image: 'assets/news.jpg' 
        },
        {
            title: 'Site para E-commerce',
            description: `
            Recentemente, estive envolvido no desenvolvimento de uma aplicação web de e-commerce de jogos, inspirada em plataformas renomadas como Steam, Epic Games e Xbox. O projeto teve um prazo desafiador de cinco dias e abrangeu uma variedade de requisitos funcionais. Desde o cadastro de usuários até recursos avançados, como avaliações, sistema de badges e gerenciamento de conta. A plataforma é totalmente responsiva, hospedada no Vercel para o front-end e na Render para o back-end. Recomendo acessar o projeto aqui para uma experiência completa. (OBS: Se, ao tentar acessar, você não conseguir, pode ser que nosso sistema de back-end ou banco de dados, ambos online, estejam desligados.)`,
            link: 'https://front-projetotecno.vercel.app/',
            image: 'assets/ecomerce.jpg' 
        },
        {
            title: 'Seu Tempo',
            description: `
            O "Seu Tempo" é uma aplicação web que fornece informações atualizadas sobre o clima de qualquer cidade. Com base em dados confiáveis, oferece detalhes precisos sobre temperatura e condições meteorológicas.              Os usuários podem buscar uma cidade específica e receber instantaneamente os detalhes climáticos. A interface simples utiliza ícones e emojis para representar as condições climáticas, tornando a experiência mais agradável e informativa.                          Uma função marcante é a personalização da aparência conforme o clima atual, tornando-a visualmente atraente e fácil de usar.Em suma, o "Seu Tempo" é uma ferramenta prática para planejar atividades ao ar livre, viagens ou simplesmente acompanhar as mudanças climáticas.`,
            link: 'https://seutempoclima.vercel.app/',
            image: 'assets/seutempo.jpg' 
        },

        {
            title: 'Receita Times',
            description: 'O software é uma aplicação web projetada para simplificar o gerenciamento e compartilhamento de receitas culinárias. Os usuários podem facilmente adicionar suas próprias criações gastronômicas e também explorar uma vasta seleção de receitas disponíveis na plataforma. Com recursos como categorização intuitiva, comentários interativos e avaliações, a comunidade pode interagir de forma dinâmica, oferecendo feedback e sugestões. Sua acessibilidade multiplataforma permite que os usuários desfrutem da experiência culinária em qualquer dispositivo, proporcionando praticidade e flexibilidade. Em suma, o software é uma ferramenta essencial para entusiastas da culinária que buscam inspiração, compartilhamento e colaboração',
            link: 'https://receitatime.vercel.app/',
            image: 'assets/receitatimes.jpg' 
        }
    ];
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

        const linkElement = document.createElement('a');
        linkElement.textContent = 'Ver site';
        linkElement.href = project.link;
        linkElement.target = '_blank';

        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(linkElement);

        projectsContainer.appendChild(projectElement);
    });
});
