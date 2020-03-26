import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

/* Importação do arquivo de rotas */
import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}

/* Exemplo de estilização 
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupar a tela toda
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
