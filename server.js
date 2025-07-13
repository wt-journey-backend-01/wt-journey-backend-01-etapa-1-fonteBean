const express = require('express')


const app = express();
const PORT = 3000;



app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({ extended: true }));
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
const sugestao = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/lanches", (req,res)=>{
  res.status(200).json(lanches);
})

app.get('/contato', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).sendFile(__dirname+ '/views/contato.html');
});



app.post('/contato', (req,res)=>{
    console.log(req.body)
    const {nome,email,assunto,mensagem} = req.body
    res.set('Content-Type', 'text/html');
    if(!nome || !email || !assunto || !mensagem){
     res.status(404).sendFile(__dirname +'/public/404.html')
    }
    
    res.status(200).send(`<!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contato Enviado com Sucesso</title>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTK7jYlRjU3gqWq6t+3F0n/Q2m3QfM3L0a8oB4XQJ9G5O4c0b4s1fF5v4L5aT"
        crossorigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
      />
      <style>
        #logo {
          height: 50px;
        }
      </style>
    </head>

    <body class="bg-light">
      <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                id="logo"
                src="public/images/logo-devburguer.png"
                alt="Logo DevBurguer"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link active fs-5">HOME</a>
                </li>
                <li class="nav-item">
                  <a href="#cardapio" class="nav-link fs-5">CARDÁPIO</a>
                </li>
                <li class="nav-item">
                  <a href="#sobre" class="nav-link fs-5">SOBRE NÓS</a>
                </li>
                <li class="nav-item">
                  <a href="/contato" class="nav-link fs-5">CONTATO</a>
                </li>
              </ul>

              <a href="#" class="btn btn-warning position-relative">
                <i class="bi bi-cart-fill"></i>
                <span class="visually-hidden">Itens no carrinho</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="card shadow-sm border-0 p-4">
              <div class="card-body text-center">
                <div
                  class="alert alert-success d-flex align-items-center justify-content-center"
                  role="alert"
                >
                  <i class="bi bi-check-circle-fill me-2 fs-4"></i>
                  <h1 class="h3 mb-0">Obrigado ${nome}!</h1>
                </div>

                <p class="lead mt-3">Seu contato foi salvo com sucesso.</p>

                <hr />

                <h2 class="h5 text-start mt-4">Informações enviadas:</h2>
                <div class="text-start">
                  <p class="mb-2">
                    <strong>Email:</strong>
                    <span class="text-muted">${email}</span>
                  </p>
                  <p class="mb-2">
                    <strong>Assunto:</strong>
                    <span class="text-muted">${assunto}</span>
                  </p>
                  <p class="mb-4">
                    <strong>Mensagem:</strong>
                    <span class="text-muted">${mensagem}</span>
                  </p>
                </div>

                <a href="/" class="btn btn-primary mt-4">
                  <i class="bi bi-house-fill me-2"></i>Voltar para HOME
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YpYh/T9W/Hq+qJ3l5t4z/T2P9y1s7f5X4l8k3a9s6p5G4a2z3v7y8y0c6r5s3l8s"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `);
  })

app.get('/sugestao', (req,res)=>{
  console.log(req.query)
  const {nome, ingredientes} = req.query;
   res.set('Content-Type', 'text/html');
  if(nome && ingredientes){
    res.send(`<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sugestao Enviada com Sucesso</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTK7jYlRjU3gqWq6t+3F0n/Q2m3QfM3L0a8oB4XQJ9G5O4c0b4s1fF5v4L5aT"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    />
    <style>
      #logo {
        height: 50px;
      }
    </style>
  </head>

  <body class="bg-light">
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              id="logo"
              src="/public/images/logo-devburguer.png"
              alt="Logo DevBurguer"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active fs-5">HOME</a>
              </li>
              <li class="nav-item">
                <a href="#cardapio" class="nav-link fs-5">CARDÁPIO</a>
              </li>
              <li class="nav-item">
                <a href="#sobre" class="nav-link fs-5">SOBRE NÓS</a>
              </li>
              <li class="nav-item">
                <a href="/contato" class="nav-link fs-5">CONTATO</a>
              </li>
            </ul>

            <a href="#" class="btn btn-warning position-relative">
              <i class="bi bi-cart-fill"></i>
              <span class="visually-hidden">Itens no carrinho</span>
            </a>
          </div>
        </div>
      </nav>
    </header>

    <main class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="card shadow-sm border-0 p-4">
            <div class="card-body text-center">
              <div
                class="alert alert-success d-flex align-items-center justify-content-center"
                role="alert"
              >
                <i class="bi bi-check-circle-fill me-2 fs-4"></i>
                <h1 class="h3 mb-0">Obrigado!</h1>
              </div>

              <p class="lead mt-3">Sua sugestao foi salva com sucesso.</p>

              <hr />

              <h2 class="h5 text-start mt-4">Receita enviada:</h2>
              <div class="text-start">
                <p class="mb-2">
                  <span class="text-muted">Nome: ${nome}</span>
                </p>
                <p class="mb-2">
                  <span class="text-muted">Ingredientes: ${ingredientes}</span>
                </p>
              </div>

              <a href="/" class="btn btn-primary mt-4">
                <i class="bi bi-house-fill me-2"></i>Voltar para HOME
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YpYh/T9W/Hq+qJ3l5t4z/T2P9y1s7f5X4l8k3a9s6p5G4a2z3v7y8y0c6r5s3l8s"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`)
  }else{
    res.status(404).sendFile(__dirname +'/public/404.html')
  }
})



app.use((req,res)=>{
  res.status(404).sendFile(__dirname +'/public/404.html')
})


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});