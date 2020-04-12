<p align="center">
	<img src="https://uploaddeimagens.com.br/images/002/572/605/thumb/Sele%C3%A7%C3%A3o_073.png?1586141562" />
</p>

<p align="center">
	Um componente de atalhos para a sua aplicação
</p>

### Instaling

`$ npm install react-quick-shortcut or yarn add react-quick-shortcut`

### Features

- Creating shortcuts for your components

## Basic Usage

```javascript
import React from 'react';
 import Quick from 'react-quick-shortcut';

 export default function Example(){
 	return (
 		<>
			<Quick hotkey="F2" action-{() => alert("Olá mundo")}  />
		</>
 	)
 }
```

## Advanced Usage - with emphasis on CRUD

```javascript
import React, { useState } from "react";
import Table from "./components/Table";
import Quick from "react-quick-shortcut";
import history from "./services/history";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = ["#", "Food", "Ingredients", "Price"];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Chebi maki",
      ingredients: "(Salmão, camarão arroz, cream cheese e alga)",
      Price: "R$ 2,00",
    },
    {
      id: 2,
      name: "Skin roll",
      ingredients: "(Pele de salmão frito, arroz, cream cheese, alga)",
      Price: "R$ 1,90",
    },
    {
      id: 3,
      name: "Maki fruit",
      ingredients: "(Morango e manga, cream cheese, arroz, alga)",
      Price: "R$ 1,60",
    },
    {
      id: 4,
      name: "Maki goiabada",
      ingredients: "(Goiaba, cream cheese, arroz, alga)",
      Price: "R$ 1,70",
    },
  ]);

  function handleDelete() {
    if (selectedItem) {
      const items = data.filter((item) => item.id !== selectedItem);

      setData(items);
      setSelectedItem(null);
    }
  }

  function handleOnMouseOver(id) {
    setSelectedItem(id);
  }

  function handleOnMouseOut() {
    setSelectedItem(null);
  }

  function handleRedirectNew() {
    history.push("/food/new");
  }

  function handleRedirectEdit() {
    history.push(`/food/${selectedItem}`);
  }

  return (
    <div className="container mt-2">
      <Quick hotkey="F2" action={() => handleRedirectNew()} />
      <Quick hotkey="F7" action={() => handleRedirectEdit()} />
      <Quick hotkey="F4" action={() => handleDelete()} />

      <Table
        columns={columns}
        data={data}
        handleOnMouseOver={handleOnMouseOver}
        handleOnMouseOut={handleOnMouseOut}
      />
    </div>
  );
}

export default App;
```

###End
