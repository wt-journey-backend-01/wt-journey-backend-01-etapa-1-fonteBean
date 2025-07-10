const express = require('express')
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const lanches = [
  {
    "id": 1,
    "nome": "DevBurger Clássico",
    "ingredientes": "Pão brioche, Carne 150g, Queijo cheddar, Alface americana, Tomate fresco, Molho especial"
  },
  {
    "id": 2,
    "nome": "Burger de Bacon",
    "ingredientes": "Pão australiano, Carne 180g, Queijo prato, Bacon crocante, Cebola caramelizada, Molho barbecue"
  },
  {
    "id": 3,
    "nome": "Commit Veggie",
    "ingredientes": "Pão integral, Burger de grão de bico, Queijo vegano, Rúcula, Tomate seco, Maionese de ervas"
  }
]

const contato = []


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/', 'index.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/', 'contato.html'));
});


app.get("/api/lanches", (req,res)=>{
  res.status(200).json(lanches);
})

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req,res)=>{
  contato.push(req.body);
  res.status(201).send("Contato enviado com sucesso");
})

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});