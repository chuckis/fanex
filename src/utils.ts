export function getRandomBorderCoordinate(width: number, height: number): [number, number] {
    const side = Math.floor(Math.random() * 4);

    switch (side) {
      case 0: 
        return [Math.random() * width, 0];
      case 1: 
        return [Math.random() * width, height];
      case 2:
        return [0, Math.random() * height];
      case 3: 
        return [width, Math.random() * height];
      default:
        return [0, 0];
    }
  }