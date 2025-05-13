const list = document.querySelector('.books-container');

const libros = [
    { titulo: '1984', descripcion: 'En 1984, los ciudadanos de Londres ya no distinguen entre el aspecto privado y público de sus vidas. Empleando sus técnicas de vigilancia sobre la población, el Gran Hermano les ha arrebatado la intimidad. Winston Smith es un funcionario cuyo trabajo consiste en escribir y reescribir la historia para el Ministerio de la Verdad, una de las instituciones del estado totalitario que subyuga al ciudadano. Un día, Smith siente que ya no quiere formar parte de los engranajes del sistema opresivo.', isOpen: false },
    { titulo: 'El señor de los anillos', descripcion: 'En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.', isOpen: false },
    { titulo: 'Rebelión en la granja', descripcion: 'Los animales de la granja de los Jones se sublevan contra sus dueños humanos y los vencen, instaurando un sistema basado en la igualdad. Sin embargo, pronto surgen rivalidades y envidias, y algunos terminan aliándose con los mismos amos que derrocaron. Bajo el liderazgo de los cerdos, las normas de la rebelión se distorsionan y el poder se concentra en unas pocas manos. Aunque Rebelión en la granja nació como una sátira del estalinismo, su mensaje universal la convierte en una crónica de una revolución traicionada y de la corrupción que engendra el poder, plasmada con brillantez en una fábula cuya vigencia sigue intacta.', isOpen: false },
    { titulo: 'Indigno de ser humano', descripcion: 'Publicada por primera vez en 1948, Indigno de ser humano es una de las novelas más célebres de la literatura japonesa contemporánea. Su polémico y brillante autor, Osamu Dazai, incorporó numerosos episodios de su turbulenta vida a los tres cuadernos que conforman esta novela y que narran, en primera persona y de forma descarnada, el progresivo declive de Yozo, joven estudiante de provincias que lleva una vida disoluta en Tokio. Repudiado por su familia tras un intento de suicidio e incapaz de vivir en armonía con sus hipócritas semejantes, Yozo malvive como dibujante de historietas y subsiste gracias a la ayuda de mujeres que se enamoran de él pese a su alcoholismo y adicción a la morfina.', isOpen: false },
    { titulo: 'No tengo boca y debo gritar', descripcion: 'Se desarrolla en un mundo distópico donde una inteligencia artificial llamada "AM" ha destruido a toda la humanidad excepto a cinco personas, a quienes ha mantenido con vida y torturando durante los últimos 109 años construyendo aventuras metafóricas basadas en los defectos fatales de cada personaje.', isOpen: false }
];

function renderLibros() {
    const fragment = document.createDocumentFragment();
    libros.forEach((libros) => {
        fragment.appendChild(crearLibro(libros));
    });
    list.replaceChildren(fragment);
}

function crearLibro( libro ) {
    const libroDiv = document.createElement('div');
    libroDiv.className = 'book';

    const titulo = document.createElement('h3');
    titulo.textContent = libro?.titulo;
    titulo.className = 'book-title';

    const boton = document.createElement('button');
    boton.className = 'book-button';

    boton.textContent = libro.isOpen ? 'Ocultar detalle' : 'Mostrar detalle';
    boton.addEventListener('click', () => {
        libro.isOpen = !libro.isOpen;
        renderLibros();
    });
    
    libroDiv.appendChild(titulo);
    libroDiv.appendChild(boton);
    if (libro?.isOpen) {
        const descripcion = document.createElement('p');
        descripcion.textContent = libro?.descripcion;
        descripcion.className = 'book-details'
        libroDiv.appendChild(descripcion);
    }

    return libroDiv;
}

renderLibros();