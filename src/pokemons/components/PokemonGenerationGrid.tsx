interface Props {
  gen: string;
  limit: number;
  offset: number;
}

// TODO: realiza una petición para las generaciones que faltan
const generaciones = [
  {
    gen: 'Generación 1',
    limit: 151,
    offset: 0
  },{
    gen: 'Generación 2',
    limit: 100,
    offset: 151
  },{
    gen: 'Generación 3',
    limit: 135,
    offset: 251
  },{
    gen: 'Generación 4',
    limit: 135,
    offset: 386
  },{
    gen: 'Generación 5',
    limit: 156,
    offset: 521
  },{
    gen: 'Generación 6',
    limit: 72,
    offset: 677
  },{
    gen: 'Generación 7',
    limit: 88,
    offset: 749
  },{
    gen: 'Generación 8',
    limit: 69,
    offset: 837
  },{
    gen: 'Generación 9',
    limit: 103,
    offset: 905
  }
];


export const PokemonGenerationGrid = ({ gen, limit, offset }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="gene">Selecciona la generación que quires ver</label>
      <select 
        className="outline-none focus:outline-none p-2 bg-white rounded-3xl" 
        name="generation" 
        id="gene">
          {
            generaciones.map( ({ gen, limit, offset }, i) => (
              <option key={ i } value={ String(limit)+ ' ' + String (offset) }>{ gen }</option>
            ))
          }
      </select>
    </div>
  )
}
