const httpProvider = 'https://api.edamam.com/api/recipes/v2?type=public&';
const resultados = document.getElementById('resultados');
const tabla = document.querySelector('.table');
const resultado = document.getElementById('resultado');
const adelante = document.getElementById('adelante');
const btnAnterior = document.getElementById('anterior');
const pagina = document.getElementById('pagina');
let anterior = [];
let y = 0;
export const conexion = async(query, pepe, wololo) =>{
    let resp = '';
    let data = '';
    if(pepe === false){
        y=0;
        anterior = [];
        const url = `${httpProvider}q=${query}&app_id=319131b3&app_key=cb08df52f86317722ba6e2aca2153d0d`;
        resp = await fetch(url);
        data = await resp.json();
        anterior.push(url);
    }else{
        resp = await fetch(query);
        data = await resp.json();
    }
    resultados.innerHTML = '';
    if(data.hits.length === 0){
        tabla.classList.add('d-none');
        resultado.classList.remove('d-none');
        resultado.innerHTML='La consulta no ha ofrecido ningún resultado, por favor escriba otro ingrediente, o puede que lo que haya puesto no sea un ingrediente';
    }else{
        botonera.classList.remove('d-none');
        botonera.classList.add('d-flex');
        resultado.classList.add('d-none');
        tabla.classList.remove('d-none');
        tabla.classList.add('d-block-flex');   
        data.hits.forEach(element => {
            resultados.innerHTML += `<tr>
            <th scope="row"><img class="imagen" src="${element.recipe.image}"></th>
            <td class="m-auto"><p>${element.recipe.label}</p><p><a href="${element.recipe.url}" class="btn btn-primary" target="_blank">Pincha aquí para ver receta</a></p>
            <p>${element.recipe.calories.toFixed(2)} kcal</p><p>Se suele comer para: ${(element.recipe.mealType)? element.recipe.mealType : 'No está definido su hora de comer en la base de datos'}</p>
            <p>La gastronomía a la que pertenece el plato es: ${element.recipe.cuisineType}</td>
          </tr>`;
        });
        let x = y+1;
        pagina.innerHTML = x;
        adelante.setAttribute('href', `${data._links.next.href}`);
        if(y<=0){
            y=0;
            btnAnterior.setAttribute('href', `${anterior[y]}`)
        }else{
            anterior.push(data._links.next.href);
            btnAnterior.setAttribute('href', `${anterior[y-1]}`)
        }
        if(wololo===true){
            y++;
            x++;
            pagina.innerHTML = x;
        }else if(wololo===false){
            y--;
            x--;
            if(y<=0 || x<=1){
                y=0;
                x=1;
                pagina.innerHTML = x;
            }else{
                pagina.innerHTML = x;
            }
        }
        if(resultado.children.length<20){
            adelante.setAttribute('disabled', true);
        }else{
            adelante.disabled=false;
        }
    }    
}