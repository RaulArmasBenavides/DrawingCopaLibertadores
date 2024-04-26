import { updateGroups} from './drawSlice';
// Función para mezclar aleatoriamente un arreglo   
const shuffleArray = (array) => {
    let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
export  const handleRandomDrawService = () => {
    return async( dispatch, getState ) => {
    const { pots, groups } = getState().draw; 
    const newGroups = Object.keys(groups).reduce((acc, key) => ({ ...acc, [key]: [] }), {});


  // Mezclar los equipos dentro de cada pot antes de asignarlos a los grupos
  const shuffledPots = Object.keys(pots).reduce((acc, potKey) => {
    acc[potKey] = shuffleArray(pots[potKey]);  // Store the shuffled array
    return acc;
  }, {});
    Object.keys(shuffledPots).forEach(potKey => {
        let currentGroupIndex = 0;
        shuffledPots[potKey].forEach(team => {
            let assigned = false;
            let attempts = 0; // Para evitar bucles infinitos si no hay espacio suficiente en ningún grupo
            while (!assigned && attempts < Object.keys(newGroups).length) {
                let groupKey = Object.keys(newGroups)[currentGroupIndex];
                let group = newGroups[groupKey];
                if (group.length < 4 && !group.some(member => member.country === team.country && !member.isFase3 && !team.isFase3)) {
                    newGroups[groupKey].push(team);
                    assigned = true;
                } else {
                    currentGroupIndex = (currentGroupIndex + 1) % Object.keys(newGroups).length;
                }
                attempts++;
            }
            // Avanza al siguiente grupo para el próximo equipo, asegurándote de que aún se respete la rotación si un grupo estaba lleno
            currentGroupIndex = (currentGroupIndex + 1) % Object.keys(newGroups).length;
        });
    });
    dispatch(updateGroups(newGroups));
 
}
};