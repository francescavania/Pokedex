export const handleColorType = (color) => {
    switch (color) {
      case "bug":
        return "#94BC4A";
      case "dark":
        return "#736C75";
      case "dragon":
        return "#6A7BAF";
      case "electric":
        return "#E5C531";
      case "fairy":
        return "#E397D1";
      case "fighting":
        return "#CB5F48";
      case "fire":
        return "#EA7A3C";
      case "flying":
        return "#7DA6DE";
      case "ghost":
        return "#846AB6";
      case "grass":
        return "#5acdbd";
      case "ground":
        return "#CC9F4F";
      case "ice":
        return "#70CBD4";
      case "normal":
        return "#AAB09F";
      case "poison":
        return "#B468B7";
      case "psychic":
        return "#E5709B";
      case "rock":
        return "#B2A061";
      case "steel":
        return "#89A1B0";
      case "water":
        return "#539AE2";
      default:
        return "rgba(52, 52, 52, 0.2)";
    }
  };