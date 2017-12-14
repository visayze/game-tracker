import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jeux = [
      { id: 1, name: 'Thief II: The Metal Age' , description: 'The ultimate thief is back! Tread softly as you make your way through 15 new complex, non-linear levels full of loot to steal and guards to outsmart. Improved enemy AI, new gadgets and a riveting story will draw you into the world of Thief II: The Metal Age, a place of powerful new technologies, fanatical religions and corruption.', img: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Thief_II_-_The_Metal_Age_Coverart.png' },
      { id: 2, name: 'Thief: The Dark Project' , description: 'Thief is a first-person stealth game that likes the dark. You sneak through the ruins of haunted cathedrals, subterranean ruins, and forbidding prisons, in a dark and sinister city - heavily inspired by Steampunk and the Dark Ages. Garrett finds an ally in the shadows, as he steals for money and uncovers the hidden agendas of allies and enemies. The story that unravels is one of deception and revenge.' , img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOWQ4ZjYxZjktNmEyNC00YmVlLWJiOGEtNzdlZTYzOWU2NDE0XkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR14,0,182,268_AL_.jpg' },
      { id: 45, name: 'Overlord: Raising Hell' , description: "Overlord just got an massive DLC, Raising hell, enter in this underground world full of fire and skeletons, dark magic and exploding sheeps, here you will discover how evil an everlord can get. Using the power of all the minions you have, you will explore hell as never before, getting new loot and gear! THE HELL WILL RISE!" , img: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Overlord_pc_uk.jpg' }
    ];
    return { jeux };
  }
}