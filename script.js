const chordsInKey = {
    ['C Major']: ['C Major', 'D Minor', 'E Minor', 'F Major', 'G Major', 'A Minor', 'B Diminished'],
    ['G Major']: ['G Major', 'A Minor', 'B Minor', 'C Major', 'D Major', 'E Minor', 'F Diminished'],
    ['D Major']: ['D Major', 'E Minor', 'F_Sharp Minor', 'G Major', 'A Major', 'B Minor', 'C Diminished'],
    ['A Major']: ['A Major', 'B Minor', 'C_Sharp Minor', 'D Major', 'E Major', 'F_Sharp Minor', 'G_Sharp Diminished'],
    ['E Major']: ['E Major', 'F_Sharp Minor', 'G_Sharp Minor', 'A Major', 'B Major', 'C_Sharp Minor', 'D_Sharp Diminished'],
    ['B Major']: ['B Major', 'C_Sharp Minor', 'D_Sharp Minor', 'E Major', 'F_Sharp Major', 'G_Sharp minor', 'A_Sharp Diminished'],
    ['F_Sharp Major']: ['F_Sharp Major', 'G_Sharp Minor', 'A_Sharp Minor', 'B Major', 'C_Sharp Major', 'D_Sharp Major', 'E_Sharp Diminished'],
    ['D_Flat Major']: ['D_Flat Major', 'E_Flat Minor', 'F Minor', 'G_Flat Major', 'A_Flat Major', 'B_Flat Minor', 'C Diminished'],
    ['A_Flat Major']: ['A_Flat Major', 'B_Flat Minor', 'C Minor', 'D_Flat Major', 'E_Flat Major', 'F Minor', 'G Diminished'],
    ['E_Flat Major']: ['E_Flat Major', 'F Minor', 'G Minor', 'A_Flat Major', 'B_Flat Major', 'C Minor', 'D Diminished'],
    ['B_Flat Major']: ['B_Flat Major', 'C Minor', 'D Minor', 'E_Flat Major', 'F Major', 'G Minor', 'A Diminished'],
    ['F Major']: ['F Major', 'G Minor', 'A Minor', 'B_Flat Major', 'C Major', 'D Minor', 'E Diminished']
};



document.querySelector('select').addEventListener('change', () => {
    let keyList = document.querySelector('select');
    displayChords(keyList.value);
})


function displayChords(key){
    let chords = chordsInKey[key];
    let newDiv = document.createElement('div');
    newDiv.id = 'chordContainer';

    document.getElementById('chordContainer').remove();
    if(key === 'default'){
        document.body.appendChild(newDiv);
        return;
    }

    chords.forEach(element => {
        let chordDiv = document.createElement('div');
        let chordPicture = document.createElement('img');
        let chordLabel = document.createElement('span');
        chordLabel.innerHTML = handleUnderscore(element);
        chordPicture.src = `Chord_Images/${element}.png`;
        chordPicture.setAttribute('class', 'chord');
        chordDiv.appendChild(chordPicture);
        chordDiv.appendChild(chordLabel);

        newDiv.appendChild(chordDiv);
    });

    function handleUnderscore(text){
        if(!text.includes('_')){
            return text;
        }
        if(text.includes('Sharp')){
            return text.replace('_Sharp', '#');
        }
        return text.replace('_Flat', 'b');

    }

    document.body.appendChild(newDiv);
}
