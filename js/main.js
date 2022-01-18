var containerEl = document.createElement('div')
containerEl.setAttribute('class', 'container')





let rowEl = document.createElement('div')
rowEl.setAttribute('class', 'row mt-3 g-5 mb-3')




function renderPokemonItem(pokemon = pokemons[0]){
       let colEl =document.createElement('div')
       colEl.setAttribute('class', ' col-12 col-sm-6 col-md-4   ')
       console.log(pokemon)
       let pokemonItem = document.createElement('div')
       pokemonItem.setAttribute('class', 'card border-radius-3 bg-info')

       let pokemonImg = document.createElement('img')
       pokemonImg.setAttribute('src',pokemon.img)
       pokemonImg.setAttribute( 'class', 'card-image-top pokemon_img border-bottom rounded-cricle  ')
       pokemonImg.setAttribute( 'alt', 'Pokemon Image here')
       pokemonImg.addEventListener('error', () => {
           pokemonImg.setAttribute('src', 'http://picsum.photos/200/200')
       })
        
       let pokemonBody = document.createElement('div')
       pokemonBody.setAttribute('class', 'pokemonBody ')

      

       let pokemonName = document.createElement('h3')
       pokemonName.setAttribute('class','text-center text-warning')
       pokemonName.textContent = pokemon.name

       let pokemonType = document.createElement('h4')
       pokemonType.setAttribute('class', 'text-light bg-danger text-center')
       pokemonType.textContent = pokemon.type

       let pokemonHeight = document.createElement('h4')
       pokemonHeight.setAttribute('class','text-primary text-center')
       pokemonHeight.textContent = pokemon.height

       let pokemonWeight = document.createElement('h4')
       pokemonWeight.setAttribute('class','text-light text-center')
       pokemonWeight.textContent = pokemon.weight

       let pokemonCandy = document.createElement('h4') 
       pokemonCandy.setAttribute('class','text-light text-center')
       pokemonCandy.textContent = pokemon.candy

       let pokemonCandy_Count = document.createElement('h4') 
       pokemonCandy_Count.setAttribute('class','text-light text-center')
       pokemonCandy_Count.textContent = pokemon.candy_count

       let pokemonEgg = document.createElement('h4')
       pokemonEgg.setAttribute('class', 'text-light text-center')
       pokemonEgg.textContent = pokemon.egg


       let pokemonAvg_spawns = document.createElement('h4')
       pokemonAvg_spawns.setAttribute('class', 'text-light text-center')
       pokemonAvg_spawns.textContent = pokemon.avg_spawns


       let pokemonSpawn_chance = document.createElement('h4')
       pokemonSpawn_chance.setAttribute('class', 'text-light text-center')
       pokemonSpawn_chance.textContent = pokemon.spawn_chance


       let pokemonSpawn_time = document.createElement('h4')
       pokemonSpawn_time.setAttribute('class', 'text-light text-center')
       pokemonSpawn_time.textContent = pokemon.spawn_time


       let pokemonMultipliers = document.createElement('h4')
       pokemonMultipliers.setAttribute('class', 'text-light text-center')
       pokemonMultipliers.textContent = pokemon.multipliers



       let pokemonWeaknesses = document.createElement('h4')
       pokemonWeaknesses.setAttribute('class', 'text-light text-center')
       pokemonWeaknesses.textContent = pokemon.weaknesses


       let pokemonNum =document.createElement('h2');
       pokemonNum.setAttribute('class', 'bg-danger p-2 text-light position-absolute top-0 end-0');
       pokemonNum.textContent = pokemon.num;
      

     



       pokemonBody.appendChild(pokemonNum);
       pokemonBody.appendChild(pokemonType)
       pokemonBody.appendChild(pokemonHeight)
       pokemonBody.appendChild(pokemonWeight)
       pokemonBody.appendChild(pokemonCandy)
       pokemonBody.appendChild(pokemonCandy_Count)
       pokemonBody.appendChild(pokemonEgg)
       pokemonBody.appendChild(pokemonSpawn_chance)
       pokemonBody.appendChild(pokemonAvg_spawns)
       pokemonBody.appendChild(pokemonSpawn_time)
       pokemonBody.appendChild(pokemonMultipliers)
       pokemonBody.appendChild(pokemonWeaknesses)

      
       pokemonItem.appendChild(pokemonImg)
    //    pokemonBody.appendChild(pokemonNum)
       pokemonItem.appendChild(pokemonName)
       pokemonItem.appendChild(pokemonBody)
       colEl.appendChild(pokemonItem)

       return colEl
}
function renderPokemonRows(pokemon = []){



    for(let pokemon of pokemons){
        let pokemonItem = renderPokemonItem(pokemon)
        rowEl.appendChild(pokemonItem)
    }

    return rowEl
}

containerEl.appendChild(renderPokemonRows(pokemons))
document.body.appendChild(containerEl)