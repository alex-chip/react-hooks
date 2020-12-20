# Hooks en React.js
## ¿Qué son los React Hooks y cómo cambian el desarrollo con React?
Es una característica que salió en la versión 16.8 en febrero de 2019.
Los Hooks vienen a cambiar la forma de desarrollo en React.
⠀
Vienen a resolver problemas ligados a React, como la complejidad de los componentes, no se podía compartir la lógica de estado entre componentes, Component Hell, etc.

Los Hooks presentan una alternativa al desarrollo con clases, ya que estos vienen a trabajar con funciones.

## ¿Qué es un Hook?
Un Hook es una función especial que nos permitirá conectarnos a características de React, para trabajar con métodos especiales, los cuales nos permitirán manejar el estado de mejor forma sin depender de clases.


## useMemo
use Memon nos permitirá usar la memoización de forma simple, esto nos permite almacenar lso resultados de una función para que, en caso de enviar lso mismos argumentos que antes, ésta no haga los cálculos otra vez sino que devuelva el resultado que registró antes.

Ejemplo de como crear un **```useMemo```**:

```javascript
  const memoizedValue = useMemo(() => myFunction(a, b), [valueToWatch])
```

Donde **myFunction** será la función que no queremos que haga los cálculos siempre, y el valueToWatch es la variable que, al cambiar el valor, hará que nuestro memo se ejecute (igual que el segundo argumento de useEffect).