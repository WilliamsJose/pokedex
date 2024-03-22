# Pokedex

### Visite o aplicativo na [Vercel](https://pokewilldex.vercel.app/)


### Como executar local

Como nesse caso a api é pública, podemos usar o .env.example. Renomeieo para .env

após isso execute no terminal:
```sh
pnpm install
pnpm dev
```

#### TODO:
- [ ] Componentes com Styled Components
  - [x] Componente com Nome, Tipo e Foto do Pokémon
  - [x] Componente com detalhes do Pokémon
    - [x] Aba About
    - [x] Aba BaseStats
    - [ ] Aba Evolution
    - [ ] Aba Moves
- [ ] Páginas
  - [x] Lista de Pokémon
    - [x] Paginação na lista de Pokémon
    - [ ] Filtragem de Pokémons por tipo
  - [x] Detalhes do Pokémon
- [ ] Validações
---

#### Opcionais
- [ ] Autenticação de usuário
- [ ] Troca de Pokémon entre usuários.
- [x] React SWR para cache