const events = {
  3: [
    {
      title: 'Inauguração da Exposição IN Colors Project ED#3',
      time: '17:00',
      location: 'Centro de Cultura [P.Porto]',
      speakers: 'Curadoria de Anibal Lemos e Sandra Teixeira',
    },
    {
      title:
        "Trompe l'oeil - Mostra de obras artísticas de estuddantes da esmad",
      time: '17:00',
      location: 'Centro de Cultura [P.Porto]',
      speakers: 'Curadoria de Cristina Castro',
    },
  ],
  4: [
    {
      title: 'Workshop "Polaroid I"',
      time: '09:30',
      location: 'ESMAD',
      speakers: 'Com Nuno Tudela',
    },
    {
      title: 'Sessão de Abertura',
      time: '14:30',
      location: 'Teatro Municipal de Vila do Conde',
      speakers:
        'Presidência da ESMAD | Presidência CMVC | Presidência Póvoa de Varzim | Presidência P.Porto',
    },
    {
      title: 'Masterclass "Some Thoughts on AI and Photography"',
      time: '15:30',
      location: 'Teatro Municipal de Vila do Conde',
      speakers: 'Com Mark Durden e Apresentado por João Leal',
    },
    {
      title: 'Inauguração da exposição dos premiados John Goto',
      time: '17:00',
      location: 'Centro de Memória de Vila do Conde',
      speakers:
        'Artistas - André Araújo, Beihuo Guo, Maíra Ortins & Polina Schneider',
    },
  ],
  5: [
    {
      title: 'Workshop "Polaroid II"',
      time: '09:30',
      location: 'ESMAD',
      speakers: 'Com Nuno Tudela',
    },
    {
      title: 'Showcase Cinema ESMAD I"',
      time: '14:30',
      location: 'Teatro Municipal de Vila do Conde',
      speakers:
        '"Umbral" de Miguel Andrade | "Retalhos" de Ângela Pereira | "Monte Abiegno"" de André Salvador | Apresentado por Nuno Tudela',
    },
    {
      title: 'Masterclass "Dave MCKean: 40 Years Telling Stories"',
      time: '16:00',
      location: 'Teatro Municipal de Vila do Conde',
      speakers: 'Com Dave MCkean | Apresentado por José Alberto Pinheiro',
    },
  ],
  6: [
    {
      title: 'Workshop "É Preciso ter lata 4.0"',
      time: '09:30',
      location: 'ESMAD',
      speakers: 'Com Luís Ribeiro',
    },
    {
      title: 'Showcase Cinema ESMAD II',
      time: '14:30',
      location: 'Teatro Municipal de Vila do Conde',
      speakers:
        '"Nós" de Vasco André Santos | "A Imagem Por Vir" de Luiz Ferraz | "Mata Porcos" de Mariana Amaral Silva | Apresentado por Maria João Cortesão',
    },
    {
      title:
        'Masterclass "In colors project - A importância da fotografia como registo sociocultural de intervenção artística"',
      time: '16:00',
      location: 'Teatro Municipal de Vila do Conde',
      speakers: 'Com Aníbal Lemos | Apresentado por Maria João Cortesão',
    },
  ],
  7: [
    {
      title: 'Mesa Redonda "O Futuro da investigação em artes"',
      time: '10:30',
      location: 'Auditório Luís Soares - ESMAD',
      speakers:
        'Com Adriana Baptista, João Leal, José Quinta Ferreira, Luís Félix e Maria João Coentrão | Moderação por José Alberto Pinheiro',
    },
    {
      title:
        'Comunicação "Sonic Street Technologies: Batendo os Tambores Eletrónicos"',
      time: '11:30',
      location: 'Auditório Luís Soares - ESMAD',
      speakers: 'Com Marcus Ramusyo | Apresentado por Cesário Alves',
    },
    {
      title:
        'Masterclass Cinanima "Sonhos Lúcidos em realidade virtual - abordagens e desafios de realização em RV"',
      time: '15:00',
      location: 'Auditório Luís Soares - ESMAD',
      speakers: 'Com View Nev | Apresentado por Luís Leite',
    },
    {
      title:
        'Comunicação "Os filmes são como música": A ideia de Musicalidade no cinema de david lynch',
      time: '16:30',
      location: 'Auditório Luís Soares - ESMAD',
      speakers: 'Com Daniel Moreira | Apresentado por Cristina Castro',
    },
    {
      title: 'Comunicação "O céu sabe a verde"',
      time: '17:30',
      location: 'Auditório Luís Soares - ESMAD',
      speakers: 'Com Filipe Lopes | Apresentado por Sérgio Rolando',
    },
  ],
};

const eventsContainer = document.getElementById('events-container');
const dayButtons = document.querySelectorAll('.day-btn');

const renderEvents = (day) => {
  eventsContainer.innerHTML = '';
  const dayEvents = events[day];

  dayEvents.forEach((event) => {
    const eventHTML = `
      <div class="event-card">
      <p class="event-location">${event.location}</p>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-time">${event.time}</p>
        <p class="event-speakers">${event.speakers}</p>
      </div>
    `;
    eventsContainer.insertAdjacentHTML('beforeend', eventHTML);
  });
};

dayButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    dayButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderEvents(btn.dataset.day);
  });
});

renderEvents('3');
