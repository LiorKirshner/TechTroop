import Article from "./Article";

const Wardrobe = () => {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ];

  return wardrobe
    .filter((c) => c.color === "blue")
    .map((c) => <Article info={c} key={c.color + c.type} />);
};

export default Wardrobe;
