# 💥 Game: Detona Ralph — Mini Game em JavaScript

Projeto desenvolvido como parte do **bootcamp de desenvolvimento web**, com foco em aplicar os principais fundamentos de **HTML, CSS e JavaScript puro** através da criação de um mini game inspirado no personagem *Detona Ralph*.

A proposta foi criar uma dinâmica simples de jogo estilo "Whac-A-Mole", controlando o tempo, pontuação e movimentação de inimigos via manipulação de DOM e lógica condicional.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica do jogo
- **CSS3** — Estilização visual e layout em grid
- **JavaScript (Vanilla JS)** — Lógica de jogo, eventos, timers e manipulação de elementos
- **Web Audio API** — Efeito sonoro ao acertar o Ralph

---

## 🧠 Conceitos Aplicados

- Seletores DOM com `querySelector` e `querySelectorAll`
- Temporizadores com `setInterval()` e `clearInterval()`
- Eventos de clique com `addEventListener("mousedown")`
- Controle de estado com objetos JavaScript (`state`)
- Manipulação de classes com `classList.add` e `classList.remove`
- Geração de posições aleatórias com `Math.random()`

---

## 🎮 Como Funciona

1. Ralph aparece aleatoriamente em uma das 9 janelas.
2. O jogador precisa clicar nele o mais rápido possível.
3. Cada acerto vale **+1 ponto** e dispara um som de impacto.
4. O jogo dura **60 segundos**.
5. Ao final, um `alert` mostra sua pontuação final.

---

## 🕹️ Como Jogar Localmente

```bash
# Clone o repositório
git clone https://github.com/devc4rl/detonaralphgamejs

# Acesse a pasta
cd detonaralphgamejs

# Abra o arquivo index.html no navegador
