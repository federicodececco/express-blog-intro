console.log("hello world");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
app.get("/bacheca", (req, res) => {
  const ciao = [
    { title: "Ciambellone", content: "Tante cose belle", img: "/images/ciambellone.jpeg", tags: ["torta"] },
    { title: "Cracker alla Barbabietola", content: "Un po' di cose belle", img: "/images/creacker_barbabietola.jpeg", tags: ["pasta", "pizza","mandolino"] },
    { title: "Pane firtto dolce", content: "Nessuna cosa bella", img: "/images/pane_fritto_dolce.jpeg", tags: ["pane", "zucchero"] },
    { title: "Pasta alla Barbabietola", content: "Some cose belle", img: "/images/pasta_barbabietola.jpeg", tags: ["barbabietola", "pasta"] },
    { title: "Torta Paesana", content: "Any belle cose", img: "/images/torta_paesana.jpeg", tags: ["torta"] },
  ];
  res.json(ciao);
});
app.listen(port, () => {});
