//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variavel da raquete
let xRaquete = 5
let yRaquete = 150
let RaqueteComprimento = 10
let RaqueteAltura = 90

//variaveis do oponente
let XRaqueteOponente = 585;
let YRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup () {
  createCanvas (600, 400);

}
function draw() {
  background (0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(XRaqueteOponente, YRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha

}

function verificaColisaoBorda(){
   if (xBolinha + raio> width || xBolinha - raio< 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio> height || yBolinha - raio< 0) {
        velocidadeYBolinha *= -1;
    } 
}

function mostraRaquete(x, y){
  rect(x, y, RaqueteComprimento, RaqueteAltura);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } 
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  } 
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - YRaqueteOponente - RaqueteComprimento /2 - 30
  YRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaqueteOponente(){
  if(xBolinha - raio < XRaqueteOponente + RaqueteComprimento && yBolinha - raio < YRaqueteOponente + RaqueteAltura && yBolinha + raio > YRaqueteOponente){
    velocidadeXBolinha *= +1;
  }
}

function incluiPlacar() {
   stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}