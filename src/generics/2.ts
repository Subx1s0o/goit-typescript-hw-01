type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "position">,
  bottom: Pick<AllType, "color" | "weight">
): AllType {
  return {
    name: top.name,
    position: top.position,
    color: bottom.color,
    weight: bottom.weight,
  };
}
